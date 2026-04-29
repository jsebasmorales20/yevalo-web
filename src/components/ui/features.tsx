import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface FeatureItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  heading?: string;
  subheading?: string;
  features: FeatureItem[];
  primaryColor?: string;
  progressGradientLight?: string;
  progressGradientDark?: string;
}

export function Features({
  heading = "Lo que hace especial a Yevalo",
  subheading = "Beneficios reales. Desde la primera noche.",
  features,
  progressGradientLight = "bg-gradient-to-r from-orange-400 to-orange-500",
  progressGradientDark = "bg-gradient-to-r from-orange-300 to-orange-400",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;
    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();
      container.scrollTo({
        left: activeFeatureElement.offsetLeft - (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-body font-semibold text-sm uppercase tracking-wider" style={{ color: '#E96F18' }}>
            {subheading}
          </span>
          <h2 className="font-heading font-black text-foreground mt-4 mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
            {heading}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-16 gap-8 items-center">
          {/* Left — feature list with progress */}
          <div
            ref={containerRef}
            className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  ref={(el) => { featureRefs.current[index] = el; }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={`flex lg:flex-row flex-col items-start space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-xl rounded-xl border border-gray-200"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`p-3 hidden md:block rounded-full transition-all duration-300 flex-shrink-0 ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                      style={{ backgroundColor: isActive ? '#E96F18' : 'rgba(233,111,24,0.12)' }}
                    >
                      <Icon size={24} style={{ color: isActive ? 'white' : '#E96F18' }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`transition-colors duration-300 text-sm ${
                          isActive ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {feature.description}
                      </p>
                      {/* Progress bar */}
                      <div className="mt-4 bg-gray-100 rounded-sm h-1 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className={`h-full ${progressGradientLight}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — animated image */}
          <div className="relative order-1 max-w-lg mx-auto lg:order-2">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <img
                className="rounded-2xl border border-gray-100 shadow-lg w-full h-auto"
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
