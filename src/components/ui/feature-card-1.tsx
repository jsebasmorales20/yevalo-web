import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedFeatureCardProps {
  index: string;
  tag: string;
  title: React.ReactNode;
  imageSrc: string;
  color: "orange" | "teal" | "blue";
  className?: string;
}

const colorVariants = {
  orange: {
    '--feature-color': 'hsl(26, 91%, 50%)',
    '--feature-color-light': 'hsl(26, 100%, 88%)',
    '--feature-color-dark': 'hsl(26, 100%, 97%)',
  },
  teal: {
    '--feature-color': 'hsl(181, 80%, 36%)',
    '--feature-color-light': 'hsl(181, 80%, 85%)',
    '--feature-color-dark': 'hsl(181, 80%, 97%)',
  },
  blue: {
    '--feature-color': 'hsl(211, 100%, 60%)',
    '--feature-color-light': 'hsl(210, 100%, 83%)',
    '--feature-color-dark': 'hsl(216, 100%, 98%)',
  },
};

const AnimatedFeatureCard = React.forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  ({ className, index, tag, title, imageSrc, color }, ref) => {
    const cardStyle = colorVariants[color] as React.CSSProperties;

    return (
      <motion.div
        ref={ref}
        style={cardStyle}
        className={cn(
          "relative flex h-[380px] w-full max-w-sm flex-col justify-end overflow-hidden rounded-2xl border bg-card p-6 shadow-sm",
          className
        )}
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { y: 0 },
          hover: { y: -10 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 50% 30%, var(--feature-color-light) 0%, transparent 70%)`
          }}
        />

        {/* Index number */}
        <div className="absolute top-6 left-6 font-mono text-lg font-bold text-muted-foreground">
          {index}
        </div>

        {/* Main image */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.3, y: -20 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <img
            src={imageSrc}
            alt={tag}
            className="w-40 h-40 object-contain"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-20 rounded-lg border bg-background/80 p-4 backdrop-blur-sm">
          <span
            className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: 'var(--feature-color-dark)',
              color: 'var(--feature-color)',
            }}
          >
            {tag}
          </span>
          <p className="text-base text-card-foreground">{title}</p>
        </div>
      </motion.div>
    );
  }
);
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
