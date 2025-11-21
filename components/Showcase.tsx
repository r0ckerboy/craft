import React from "react";
import { Battery, Signal, Wifi, Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";

const Showcase: React.FC = () => {
  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Phone Mockup */}
        <div className="relative flex justify-center lg:justify-start group perspective-1000 animate-fade-slide-in" style={{ animationDelay: "0.3s" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-500/20 blur-[120px] -z-10 rounded-full opacity-40 pointer-events-none"></div>
          
          <div className="relative w-[340px] h-[680px] bg-[#0a0a0a] border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex justify-center items-center"></div>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-xs font-medium relative z-40">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* App Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-30">
               <div className="flex items-center gap-1">
                 <span className="font-serif font-bold text-xl tracking-tight text-white">Lumina</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
               </div>
               <div className="flex gap-4 text-white">
                 <Heart className="w-5 h-5" />
                 <MessageCircle className="w-5 h-5" />
               </div>
            </div>

            {/* Stories */}
            <div className="flex gap-4 px-5 py-4 overflow-x-hidden border-b border-white/5">
               {['News', 'Updates', 'Verified', 'Feature'].map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center gap-1.5">
                   <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-600">
                     <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black text-[9px] text-white font-bold">
                        {idx === 3 ? 'New' : ''}
                     </div>
                   </div>
                   <span className="text-[10px] text-neutral-400">{item}</span>
                 </div>
               ))}
            </div>

            {/* Feed Post */}
            <div className="flex flex-col pb-20">
               <div className="flex justify-between items-center px-4 py-3">
                 <div className="flex items-center gap-2.5">
                   <div className="w-8 h-8 bg-neutral-800 rounded-full border border-white/10"></div>
                   <div className="flex flex-col">
                     <span className="text-xs font-semibold text-white">Lumina_official</span>
                     <span className="text-[10px] text-neutral-500">Sponsored</span>
                   </div>
                 </div>
                 <MoreHorizontal className="w-5 h-5 text-white" />
               </div>

               <div className="w-full aspect-square bg-[#111] relative overflow-hidden group/post">
                 {/* Abstract Shapes */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl"></div>
                 <div className="flex items-center justify-center h-full">
                    <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md rotate-12 group-hover/post:rotate-6 transition-transform duration-700"></div>
                    <div className="w-24 h-24 rounded-2xl bg-white/5 backdrop-blur-md -rotate-6 absolute group-hover/post:-rotate-3 transition-transform duration-700 translate-x-4 translate-y-4"></div>
                 </div>
                 <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                    <span className="text-[10px] font-medium text-white">AI Generated</span>
                 </div>
               </div>

               <div className="flex bg-gradient-to-b from-orange-400 to-orange-600 px-4 py-2.5 items-center justify-between">
                 <span className="text-xs font-semibold text-white">Try Lumina for free</span>
                 <Share2 className="w-4 h-4 text-white" />
               </div>

               <div className="flex justify-between items-center px-4 py-3">
                 <div className="flex gap-4 text-white">
                   <Heart className="w-6 h-6" />
                   <MessageCircle className="w-6 h-6" />
                   <Share2 className="w-6 h-6" />
                 </div>
                 <Bookmark className="w-6 h-6 text-white" />
               </div>

               <div className="px-4 pb-4">
                 <p className="text-sm font-semibold text-white">12,453 likes</p>
                 <p className="text-sm text-neutral-300 mt-1">
                   <span className="font-semibold text-white">Lumina_official</span> Transform your workflow with our new Creative Engine 2.0 🚀 <span className="text-blue-400">#MadeWithLumina</span>
                 </p>
               </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Right Column: Stats List */}
        <div className="flex flex-col justify-center gap-2 pl-0 lg:pl-12">
           {[
             { val: "10+", text: "Industries Transformed" },
             { val: "500 Million", text: "Assets Generated Annually" },
             { val: "1,800%", text: "Production Efficiency Lift" },
             { val: "140,000", text: "Active Creative Teams" }
           ].map((item, idx) => (
             <div key={idx} className={`flex flex-col gap-2 py-8 ${idx !== 3 ? 'border-b border-white/5' : 'pt-8'} animate-fade-slide-in`} style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
               <div className="text-5xl md:text-6xl font-medium text-white tracking-tight">{item.val}</div>
               <div className="text-lg text-neutral-500 font-medium">{item.text}</div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};

export default Showcase;
