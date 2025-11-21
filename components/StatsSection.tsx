import React from "react";
import { Zap, Award, BookOpen, CheckCircle } from "lucide-react";

const StatsSection: React.FC = () => {
  const benefits = [
    {
      icon: Award,
      title: "Безупречная квалификация",
      desc: "Профильное высшее образование и дипломы о переподготовке. Все документы в порядке."
    },
    {
      icon: BookOpen,
      title: "Комплексный подход",
      desc: "Возможность комиссионной экспертизы (психолог + лингвист) для создания несокрушимой базы."
    },
    {
      icon: CheckCircle,
      title: "Процессуальная точность",
      desc: "Знаем требования судов. Каждое заключение содержит обоснованные выводы, которые трудно оспорить."
    },
  ];

  return (
    <div className="z-10 flex flex-col md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mx-auto pt-24 px-6 pb-24 relative">
      {/* Badge */}
      <div className="flex justify-start mb-12 animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors cursor-default">
          <Zap className="w-4 h-4 fill-orange-400/50" />
          <span>Преимущества</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="relative animate-fade-slide-in" style={{ animationDelay: "0.4s" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-orange-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
        <h3 className="leading-[1.05] md:text-5xl lg:text-6xl text-4xl font-medium text-white/40 tracking-tight max-w-6xl">
          <span className="text-white">Экспертиза — это не просто «бумага».</span> Это стратегия защиты.
          Мы понимаем, что от качества нашего заключения зависит исход дела. Поэтому мы работаем по стандартам, которые <span className="text-white">исключают возможность оспорить результат</span> по формальным признакам.
        </h3>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12 mt-24 pt-12 border-t border-white/5">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 animate-fade-slide-in group"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-orange-500" />
            </div>
            <div className="text-2xl font-medium text-white tracking-tight">
              {item.title}
            </div>
            <div className="text-base leading-relaxed text-neutral-500 font-medium">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;