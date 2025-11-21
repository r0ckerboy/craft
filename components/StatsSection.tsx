import React from "react";
import { Zap } from "lucide-react";

const StatsSection: React.FC = () => {
  const stats = [
    { value: "$500M", label: "Creator Revenue" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "2M+", label: "Videos Generated" },
    { value: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="z-10 flex flex-col md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mx-auto pt-24 px-6 pb-24 relative">
      {/* Badge */}
      <div className="flex justify-start mb-12 animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors cursor-default">
          <Zap className="w-4 h-4 fill-orange-400/50" />
          <span>About Us</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="relative animate-fade-slide-in" style={{ animationDelay: "0.4s" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-orange-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
        <h3 className="leading-[1.05] md:text-6xl lg:text-7xl text-5xl font-medium text-white/40 tracking-tight max-w-6xl">
          <span className="text-white">We are a creative intelligence engine</span>{" "}
          dedicated to transforming how the world{" "}
          <span className="text-white">visualizes stories.</span> With a team of
          researchers, engineers, and artists, we build tools that empower{" "}
          <span className="text-white">ambitious creators</span> to design,
          animate, and ship cinematic experiences at the speed of thought.
        </h3>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-24 pt-12 border-t border-white/5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 animate-fade-slide-in"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="md:text-7xl lg:text-8xl leading-none text-6xl font-light text-white tracking-tighter">
              {stat.value}
            </div>
            <div className="text-xl font-medium pl-1 text-neutral-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Logos */}
      <div className="mt-24 animate-fade-slide-in" style={{ animationDelay: "0.8s" }}>
        <p className="text-lg font-medium mb-8 uppercase tracking-widest text-center md:text-left text-neutral-500">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap gap-8 md:gap-12 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale items-center justify-between">
           {/* Mock Logos using Text for simplicity as SVGs are complex to inline fully without proper assets */}
           <div className="text-2xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-full"></div> Vercel</div>
           <div className="text-2xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-white/50 rounded-sm"></div> Stripe</div>
           <div className="text-2xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-white/80 skew-x-12"></div> Linear</div>
           <div className="text-2xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 border-2 border-white rounded-full"></div> Supabase</div>
           <div className="text-2xl font-bold text-white flex items-center gap-2"><div className="w-6 h-6 bg-white rounded-tl-xl rounded-br-xl"></div> Raycast</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
