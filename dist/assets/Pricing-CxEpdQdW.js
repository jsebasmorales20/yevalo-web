import{r as u,j as e,m as d}from"./motion-DoHil9B3.js";import{j as h}from"./icons-Brebg13I.js";const f={blue:{base:220,spread:200},purple:{base:280,spread:300},green:{base:120,spread:200},red:{base:0,spread:200},orange:{base:30,spread:200}},v={sm:"w-48 h-64",md:"w-64 h-80",lg:"w-80 h-96"},y=`
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }
  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }
  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }
  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }
  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`,w=({children:r,className:t="",style:a,glowColor:l="blue",size:c="md",width:s,height:i,customSize:b=!1})=>{const o=u.useRef(null);u.useEffect(()=>{const p=n=>{o.current&&(o.current.style.setProperty("--x",n.clientX.toFixed(2)),o.current.style.setProperty("--xp",(n.clientX/window.innerWidth).toFixed(2)),o.current.style.setProperty("--y",n.clientY.toFixed(2)),o.current.style.setProperty("--yp",(n.clientY/window.innerHeight).toFixed(2)))};return document.addEventListener("pointermove",p),()=>document.removeEventListener("pointermove",p)},[]);const{base:g,spread:m}=f[l],x={"--base":g,"--spread":m,"--radius":"16","--border":"2","--backdrop":"hsl(0 0% 98% / 0.85)","--backup-border":"hsl(215 40% 8% / 0.08)","--size":"220","--outer":"1","--border-size":"calc(var(--border, 2) * 1px)","--spotlight-size":"calc(var(--size, 150) * 1px)","--hue":"calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",backgroundImage:`radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.08)), transparent
    )`,backgroundColor:"var(--backdrop, transparent)",backgroundSize:"calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",backgroundPosition:"50% 50%",backgroundAttachment:"fixed",border:"var(--border-size) solid var(--backup-border)",position:"relative",touchAction:"none",...s!==void 0?{width:typeof s=="number"?`${s}px`:s}:{},...i!==void 0?{height:typeof i=="number"?`${i}px`:i}:{}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:y}}),e.jsxs("div",{ref:o,"data-glow":!0,style:{...x,...a},className:`
          ${b?"":v[c]}
          rounded-2xl relative shadow-sm backdrop-blur-sm
          ${t}
        `,children:[e.jsx("div",{"data-glow":!0}),r]})]})},j=[{name:"Plan Básico",basePrice:54900,period:"/mes",description:"Ideal para quienes desean probar el protector bucal de forma mensual.",features:["Incluye 1 protector bucal de silicona","Envío gratis","Pago contra entrega"],button:"Suscríbete ahora",highlighted:!1},{name:"Plan Anual",basePrice:592920,period:"/año",badge:"Recomendado",description:"Plan completo para un año de descanso sin interrupciones, con más ahorro.",features:["12 protectores bucales (uno por mes)","Envío gratis","Pago contra entrega","10% de descuento adicional"],button:"Suscríbete ahora",highlighted:!0},{name:"Plan Familiar",basePrice:null,period:"/año",description:"Para familias que desean disfrutar de un descanso mejorado con varios protectores bucales.",features:["24 protectores bucales (dos por mes)","Envío gratis","Pago contra entrega","Acceso a atención personalizada"],button:"Consultar ahora",highlighted:!1}],k=.15;function z(r,t){return r.basePrice===null?"Consultar":`$${(t?Math.round(r.basePrice*(1-k)):r.basePrice).toLocaleString("es-CO")}`}const N={hidden:{},visible:{transition:{staggerChildren:.1}}},P={hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.65,ease:[.25,.1,.25,1]}}};function E(){const[r,t]=u.useState(!1);return e.jsx("section",{className:"bg-background py-24 md:py-32",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-6",children:[e.jsxs(d.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:"text-center mb-10",children:[e.jsx("div",{className:"inline-flex items-center gap-2 liquid-glass rounded-full px-1 py-1 mb-6",children:e.jsx("span",{className:"rounded-full px-3 py-1 text-xs font-body font-semibold text-white",style:{backgroundColor:"#E96F18"},children:"Elige el plan perfecto para ti"})}),e.jsx("h2",{className:"font-heading font-black text-foreground mb-4",style:{fontSize:"clamp(1.8rem, 4vw, 3rem)"},children:"Planes de Suscripción"}),e.jsx("p",{className:"font-body font-light text-base md:text-lg",style:{color:"hsl(215 40% 8% / 0.58)"},children:"Elige el plan que más te convenga y empieza a dormir mejor."})]}),e.jsx("div",{className:"flex justify-center mb-14",children:e.jsxs("div",{className:"liquid-glass rounded-full p-1 inline-flex",children:[e.jsx("button",{onClick:()=>t(!1),className:`rounded-full px-5 py-2 text-sm font-body font-medium transition-all ${r?"":"text-white"}`,style:r?{color:"hsl(215 40% 8% / 0.5)"}:{backgroundColor:"hsl(215 40% 8%)"},children:"Mensual"}),e.jsxs("button",{onClick:()=>t(!0),className:`rounded-full px-5 py-2 text-sm font-body font-medium transition-all flex items-center gap-1.5 ${r?"text-white":""}`,style:r?{backgroundColor:"hsl(215 40% 8%)"}:{color:"hsl(215 40% 8% / 0.5)"},children:["Anual",e.jsx("span",{className:"text-white font-semibold rounded-full px-1.5 py-0.5",style:{backgroundColor:"#E96F18",fontSize:"0.6rem"},children:"-15%"})]})]})}),e.jsx(d.div,{variants:N,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:j.map((a,l)=>e.jsx(d.div,{variants:P,children:e.jsxs(w,{customSize:!0,glowColor:a.highlighted?"orange":"blue",className:"p-8 flex flex-col w-full h-full",style:a.highlighted?{boxShadow:"0 0 0 2px rgba(233,111,24,0.25), 0 20px 40px rgba(0,0,0,0.08)"}:void 0,children:[a.badge&&e.jsx("div",{className:"mb-3",children:e.jsx("span",{className:"text-xs font-body font-semibold px-3 py-1 rounded-full text-white",style:{backgroundColor:"#E96F18"},children:a.badge})}),e.jsx("h3",{className:"font-heading font-bold text-xl text-foreground mb-2",children:a.name}),e.jsx("div",{className:"flex items-baseline gap-1 mt-4",children:e.jsx("span",{className:"font-heading font-black text-foreground",style:{fontSize:"clamp(2rem, 4vw, 3rem)"},children:z(a,r)})}),e.jsx("span",{className:"font-body font-light text-sm mb-4",style:{color:"hsl(215 40% 8% / 0.45)"},children:a.period}),e.jsx("p",{className:"font-body font-light text-sm mb-6 leading-relaxed",style:{color:"hsl(215 40% 8% / 0.55)"},children:a.description}),e.jsx("ul",{className:"flex flex-col gap-3 mb-8 flex-1",children:a.features.map((c,s)=>e.jsxs("li",{className:"flex items-start gap-2.5",children:[e.jsx(h,{className:"w-4 h-4 mt-0.5 flex-shrink-0",style:{color:"#11A4A6"}}),e.jsx("span",{className:"font-body text-sm",style:{color:"hsl(215 40% 8% / 0.65)"},children:c})]},s))}),e.jsx("button",{className:`w-full rounded-full py-3 font-body font-semibold text-sm tracking-wide transition-opacity hover:opacity-80 ${a.highlighted?"text-white":"liquid-glass-strong text-foreground"}`,style:a.highlighted?{backgroundColor:"hsl(215 40% 8%)"}:{},children:a.button})]})},l))})]})})}export{E as default};
