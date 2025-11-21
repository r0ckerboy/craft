import React, { useState } from "react";
import { ArrowRight, Scale, ShieldCheck, FileText, GraduationCap, Gavel, FileSearch, BadgeCheck } from "lucide-react";

const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Сбор материалов", icon: FileSearch, badge: "01" },
    { id: 2, title: "Исследование", icon: Scale, badge: "02" },
    { id: 3, title: "Заключение", icon: Gavel, badge: "03" },
  ];

  // Card Stack Logic
  const getCardStyle = (id: number) => {
    if (id === activeStep) {
      return { transform: "translateY(0px) scale(1)", zIndex: 30, opacity: 1 };
    }
    const relativePos = (id - activeStep + 3) % 3;

    if (relativePos === 1) {
      return { transform: "translateY(12px) scale(0.95)", zIndex: 20, opacity: 0.6 };
    } else {
      return { transform: "translateY(24px) scale(0.90)", zIndex: 10, opacity: 0.4 };
    }
  };

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-24 pb-10 gap-x-4 gap-y-12 items-center">
      {/* Left Column */}
      <div className="col-span-1 lg:col-span-6 pl-6 md:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 text-orange-500 mb-8 animate-fade-slide-in" style={{ animationDelay: "0.1s" }}>
          <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500/80">
            Республика Крым
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tighter text-white font-medium mb-6 animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
          Независимые судебные
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500 block mt-2">
            экспертизы.
          </span>
        </h1>

        <p className="leading-relaxed text-lg font-medium text-white/60 max-w-lg animate-fade-slide-in" style={{ animationDelay: "0.35s" }}>
          Когда для победы в суде нужны не слова, а факты. Подготовим официальное заключение эксперта, которое станет весомым доказательством для защиты вашей свободы, репутации и родительских прав.
        </p>

        <div className="mt-10 flex flex-wrap gap-6 items-center animate-fade-slide-in" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(249,115,22,0.45)] bg-gradient-to-b from-white/20 via-white/0 to-white/5 rounded-full relative shadow-[0_0_25px_rgba(249,115,22,0.3),0_8px_40px_rgba(249,115,22,0.15)] p-[1px]"
          >
            {/* Rotating Border Beam */}
            <div className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-spin-slow" style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(253,186,116,0.8) 180deg, transparent 280deg, transparent 360deg)" }}></div>
            
            {/* Inner Background */}
            <div className="relative bg-neutral-950/90 backdrop-blur-xl rounded-full w-full h-full flex items-center gap-3 pt-3 pr-5 pb-3 pl-4">
               <div className="relative z-20 w-7 h-7 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-3.5 h-3.5 text-white fill-white/20" />
               </div>
               <span className="whitespace-nowrap relative z-10 font-medium tracking-tight text-base text-white/95 group-hover:text-white transition-colors">
                  Бесплатная консультация
               </span>
               <span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full ml-1 relative group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
                 <ArrowRight className="w-3 h-3" />
               </span>
            </div>
          </a>
          
          <div className="flex flex-col gap-1 text-xs font-medium text-neutral-500">
             <div className="flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5 text-orange-500" />
                <span>Сертифицированные эксперты</span>
             </div>
             <div className="flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5 text-orange-500" />
                <span>Соответствие УПК и ГПК РФ</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-1 lg:col-span-6 md:pr-10 flex flex-col lg:pt-20 h-full pt-10 px-6 items-end justify-center">
        {/* Card Stack representing "Case Files" */}
        <div className="relative mb-12 mr-4 w-64 md:w-72 aspect-[3/4] group perspective-1000 animate-fade-slide-in" style={{ animationDelay: "0.4s" }}>
          {/* Glow */}
          <div className="absolute -inset-8 bg-orange-500/20 blur-3xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

          <div className="relative w-full h-full">
             {/* Card 1: Conclusion */}
            <div id="card-1" className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl origin-bottom bg-[#111] transition-all duration-500 ease-out flex flex-col" style={getCardStyle(1)}>
                <div className="h-full w-full p-6 flex flex-col bg-gradient-to-b from-neutral-800 to-neutral-950">
                   <div className="w-12 h-12 mb-4 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Gavel className="w-6 h-6" />
                   </div>
                   <div className="h-2 w-1/2 bg-white/20 rounded mb-4"></div>
                   <div className="h-1 w-full bg-white/10 rounded mb-2"></div>
                   <div className="h-1 w-full bg-white/10 rounded mb-2"></div>
                   <div className="h-1 w-3/4 bg-white/10 rounded mb-8"></div>
                   
                   <div className="mt-auto p-3 bg-white/5 rounded border border-white/10">
                      <div className="text-[10px] text-neutral-400 uppercase tracking-wider mb-1">Статус</div>
                      <div className="text-sm text-green-400 font-mono">ЗАКЛЮЧЕНИЕ ГОТОВО</div>
                   </div>
                </div>
            </div>
            {/* Card 2: Analysis */}
            <div id="card-2" className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl origin-bottom bg-[#111] transition-all duration-500 ease-out" style={getCardStyle(2)}>
                 <div className="h-full w-full p-6 flex flex-col bg-neutral-900">
                   <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                      <FileSearch className="w-6 h-6" />
                   </div>
                   <div className="h-2 w-1/2 bg-white/20 rounded mb-4"></div>
                   <div className="space-y-2">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                         <div className="text-xs text-neutral-400">Анализ данных...</div>
                      </div>
                   </div>
                </div>
            </div>
            {/* Card 3: Evidence */}
            <div id="card-3" className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl origin-bottom bg-[#111] transition-all duration-500 ease-out" style={getCardStyle(3)}>
                 <div className="h-full w-full p-6 flex flex-col bg-neutral-900">
                   <div className="w-12 h-12 mb-4 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                      <ShieldCheck className="w-6 h-6" />
                   </div>
                   <div className="h-2 w-1/2 bg-white/20 rounded mb-4"></div>
                   <div className="text-xs text-neutral-500">Материалы дела № 24-81</div>
                </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-3 w-full max-w-xs mr-0 lg:mr-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`
                flex cursor-pointer transition-all duration-300 rounded-lg p-2 gap-4 items-center animate-fade-slide-in
                ${activeStep === step.id 
                   ? "bg-white/5 backdrop-blur-md translate-x-[-10px] shadow-xl border border-white/10" 
                   : "hover:bg-white/5 border border-transparent"}
              `}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`
                 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors duration-300
                 ${activeStep === step.id ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20" : "bg-transparent text-neutral-500 group-hover:text-orange-400"}
              `}>
                {step.badge}
              </div>
              <span className={`text-sm font-medium transition-colors duration-300 ${activeStep === step.id ? "text-white" : "text-neutral-400"}`}>
                {step.title}
              </span>
              <step.icon className={`w-3 h-3 ml-auto transition-all duration-300 ${activeStep === step.id ? "text-orange-500 opacity-100" : "opacity-0 text-neutral-600"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Trust Indicator */}
      <div className="col-span-1 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end md:px-10 mt-16">
        <div className="col-span-1 lg:col-span-4 relative group animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
           <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
           <div className="flex flex-col min-h-[180px] transition-transform hover:-translate-y-1 duration-300 text-black bg-gradient-to-b from-orange-400 to-orange-600 rounded-xl p-8 relative shadow-2xl justify-between">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-black/10">
                        <GraduationCap className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-black/10 rounded text-[10px] font-bold uppercase">
                      Опыт 10+ лет
                  </div>
               </div>
               <div>
                  <p className="text-lg font-semibold leading-snug tracking-tight max-w-[90%]">"Экспертиза — это не просто бумага. Это стратегия защиты."</p>
                  <div className="mt-4 pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-medium uppercase tracking-wide opacity-70">
                     <span>Гарантия</span>
                     <span className="w-1 h-1 bg-black rounded-full"></span>
                     <span>Независимость</span>
                  </div>
               </div>
           </div>
        </div>
        <div className="hidden lg:block col-span-2"></div>
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-end text-right lg:text-left">
           <div className="flex items-center gap-2 lg:justify-start justify-end mb-3 text-orange-400 text-xs font-medium uppercase tracking-wider animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
             <ShieldCheck className="w-3 h-3" />
             <span>Защита в суде</span>
           </div>
           <h2 className="text-4xl lg:text-5xl font-normal tracking-tighter text-white animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
             Профессиональный подход <span className="text-white/60">к вашему делу.</span>
           </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;