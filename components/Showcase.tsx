import React from "react";
import { Activity, MessageSquare, Brain, FileText, ArrowRight, Check, Shield } from "lucide-react";

const Showcase: React.FC = () => {
  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
          Каталог экспертиз
        </h2>
        <p className="text-neutral-500 max-w-md text-right md:text-left">
           Какой вид экспертизы усилит вашу позицию?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Visual "Report" Representation */}
        <div className="relative flex justify-center lg:justify-start group perspective-1000 animate-fade-slide-in sticky top-24" style={{ animationDelay: "0.3s" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-500/20 blur-[120px] -z-10 rounded-full opacity-40 pointer-events-none"></div>
          
          <div className="relative w-[340px] h-[580px] bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden hover:rotate-0 transition-transform duration-700 ease-out">
            
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-neutral-900/50">
               <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold">
                     <Shield className="w-5 h-5" />
                  </div>
                  <div className="text-[10px] font-mono text-green-500 border border-green-500/30 px-2 py-1 rounded">
                     ОФИЦИАЛЬНО
                  </div>
               </div>
               <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
               <div className="h-2 w-32 bg-white/10 rounded"></div>
            </div>

            {/* Document Content Abstract */}
            <div className="p-6 space-y-6">
               {/* Section 1 */}
               <div className="space-y-2">
                  <div className="text-xs text-neutral-500 uppercase tracking-widest">Исследование</div>
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-full bg-white/10 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/10 rounded"></div>
               </div>

               {/* Chart */}
               <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex items-end justify-between gap-2 h-20">
                     <div className="w-full bg-orange-500/20 h-[40%] rounded-t"></div>
                     <div className="w-full bg-orange-500/40 h-[70%] rounded-t"></div>
                     <div className="w-full bg-orange-500/60 h-[50%] rounded-t"></div>
                     <div className="w-full bg-orange-500 h-[90%] rounded-t"></div>
                  </div>
                  <div className="mt-3 flex justify-between text-[9px] text-neutral-500">
                     <span>Фактор А</span>
                     <span>Фактор Б</span>
                  </div>
               </div>

               {/* Conclusion */}
               <div className="space-y-2 pt-4 border-t border-white/5">
                  <div className="text-xs text-orange-500 uppercase tracking-widest font-bold">Выводы эксперта</div>
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-200">
                     Информация подтверждена. Признаков искажения не выявлено.
                  </div>
               </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
               <div className="flex items-center gap-2 text-[10px] text-neutral-500 justify-center">
                  <Check className="w-3 h-3" />
                  <span>Подпись эксперта верифицирована</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Service List */}
        <div className="flex flex-col justify-center gap-8 pl-0 lg:pl-12">
           
           {/* Service 1 */}
           <div className="group flex flex-col gap-4 pb-8 border-b border-white/5 animate-fade-slide-in hover:bg-white/5 p-6 rounded-2xl transition-colors duration-300 cursor-pointer" style={{ animationDelay: "0.4s" }}>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Activity className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-medium text-white">Полиграф</h3>
                  </div>
                  <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">от 20 000 ₽</span>
               </div>
               <p className="text-neutral-400 text-sm leading-relaxed pl-16">
                  Установление достоверности показаний в уголовных и гражданских делах, когда прямых улик недостаточно. Выявляет скрываемые детали происшествия.
               </p>
               <div className="pl-16 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500 group-hover:translate-x-2 transition-transform">
                  Подробнее <ArrowRight className="w-3 h-3" />
               </div>
           </div>

           {/* Service 2 */}
           <div className="group flex flex-col gap-4 pb-8 border-b border-white/5 animate-fade-slide-in hover:bg-white/5 p-6 rounded-2xl transition-colors duration-300 cursor-pointer" style={{ animationDelay: "0.5s" }}>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                        <MessageSquare className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-medium text-white">Лингвистическая</h3>
                  </div>
                  <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">от 15 000 ₽</span>
               </div>
               <p className="text-neutral-400 text-sm leading-relaxed pl-16">
                  Дела о клевете, оскорблениях, экстремизме и защите чести. Анализ текста на наличие негативной информации, утверждений о фактах и угроз.
               </p>
               <div className="pl-16 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-500 group-hover:translate-x-2 transition-transform">
                  Подробнее <ArrowRight className="w-3 h-3" />
               </div>
           </div>

           {/* Service 3 */}
           <div className="group flex flex-col gap-4 pb-8 animate-fade-slide-in hover:bg-white/5 p-6 rounded-2xl transition-colors duration-300 cursor-pointer" style={{ animationDelay: "0.6s" }}>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                        <Brain className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-medium text-white">Психологическая</h3>
                  </div>
                  <span className="text-sm font-medium text-neutral-500 group-hover:text-white transition-colors">от 15 000 ₽</span>
               </div>
               <p className="text-neutral-400 text-sm leading-relaxed pl-16">
                  Споры о детях (развод, место жительства). Определение привязанности ребенка, влияния родителей и фактов психологического давления.
               </p>
               <div className="pl-16 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-500 group-hover:translate-x-2 transition-transform">
                  Подробнее <ArrowRight className="w-3 h-3" />
               </div>
           </div>

        </div>

      </div>
    </div>
  );
};

export default Showcase;