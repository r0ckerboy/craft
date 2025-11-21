import React from "react";
import { ArrowRight, Minus } from "lucide-react";

const SuccessStories: React.FC = () => {
  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
          Success Stories
        </h2>
        <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-1 animate-fade-slide-in" style={{ animationDelay: "0.3s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          <span className="uppercase tracking-widest text-xs">Case Studies</span>
        </div>
      </div>

      <div className="flex flex-col w-full border-t border-white/5">
        {/* Fintech */}
        <div className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
            <div className="col-span-1 md:col-span-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">Fintech</span>
            </div>
            <div className="col-span-1 md:col-span-8 flex items-center gap-3">
               <div className="h-6 w-8 bg-white/20 rounded flex items-center justify-center"><div className="w-4 h-[2px] bg-white"></div></div>
               <span className="text-lg font-semibold tracking-tight text-white">Midday Financial</span>
            </div>
            <div className="col-span-1 flex justify-end">
               <ArrowRight className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
            <div className="col-span-1 md:col-span-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">Infrastructure</span>
            </div>
             <div className="col-span-1 md:col-span-8 flex items-center gap-3">
               <div className="h-5 w-5 border-2 border-white transform rotate-45"></div>
               <span className="text-lg font-semibold tracking-tight text-white">Vercel</span>
            </div>
            <div className="col-span-1 flex justify-end">
              <ArrowRight className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Expanded Item: Productivity */}
        <div className="border-white/5 border-b relative">
          <div className="grid grid-cols-1 md:grid-cols-12 cursor-pointer pt-8 pb-8 gap-x-6 gap-y-6 items-start">
             <div className="col-span-1 md:col-span-3 flex flex-col gap-1">
               <span className="text-xs font-semibold tracking-widest uppercase text-orange-500">Productivity</span>
               <span className="text-[10px] font-medium text-neutral-500">48 Workflows Optimized</span>
             </div>
             <div className="col-span-1 md:col-span-8 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center"><div className="w-1 h-1 bg-white rounded-full"></div></div>
                <span className="text-lg font-semibold tracking-tight text-white">Linear Systems</span>
             </div>
             <div className="col-span-1 flex justify-end">
               <Minus className="w-6 h-6 text-white" />
             </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 pb-12 gap-x-8 gap-y-8">
             <div className="hidden md:block col-span-3 relative">
                <div className="absolute right-8 top-0 bottom-4 w-px bg-gradient-to-b from-white/10 to-transparent"></div>
             </div>
             <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 pr-4 pl-4 md:pl-0">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Challenge</span>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    Internal fragmentation led to <span className="text-white font-medium">siloed decision-making</span> and slower release cycles across distributed engineering teams.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Solution</span>
                   <p className="text-sm leading-relaxed text-neutral-300">
                     Deployed Lumina's collaborative engine to synchronize <span className="text-white font-medium">asset pipelines</span> and automate status reporting in real-time.
                   </p>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Result</span>
                  <p className="text-sm leading-relaxed text-neutral-300">
                    Achieved a <span className="text-orange-400 font-semibold">40% reduction</span> in meeting times and doubled the velocity of feature shipments within Q3.
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* Database */}
        <div className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
           <div className="grid grid-cols-1 md:grid-cols-12 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
             <div className="col-span-1 md:col-span-3">
               <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">Database</span>
             </div>
             <div className="col-span-1 md:col-span-8 flex items-center gap-3">
               <div className="w-6 h-6 bg-emerald-500 rounded-sm opacity-80"></div>
               <span className="text-lg font-semibold tracking-tight text-white">Supabase</span>
             </div>
             <div className="col-span-1 flex justify-end">
               <ArrowRight className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessStories;
