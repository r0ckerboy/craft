import React from "react";
import { ClipboardList, HelpCircle, Search, PenTool, UserCheck, ChevronDown } from "lucide-react";

const SuccessStories: React.FC = () => {
  const steps = [
    { icon: ClipboardList, title: "Анализ материалов", desc: "Мы оцениваем перспективы и целесообразность экспертизы на основе ваших данных." },
    { icon: HelpCircle, title: "Формулировка вопросов", desc: "Помогаем составить корректные вопросы для эксперта, которые примет суд." },
    { icon: Search, title: "Проведение исследования", desc: "Работа с человеком или материалами в строгом соответствии с методикой." },
    { icon: PenTool, title: "Подготовка заключения", desc: "Оформление официального документа с дипломами и подпиской об ответственности." },
    { icon: UserCheck, title: "Поддержка в суде", desc: "При необходимости эксперт разъяснит свои выводы в судебном заседании." }
  ];

  return (
    <div className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      
      {/* Process Section */}
      <div className="mb-32">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white animate-fade-slide-in" style={{ animationDelay: "0.2s" }}>
            Этапы работы
          </h2>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-1 animate-fade-slide-in" style={{ animationDelay: "0.3s" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="uppercase tracking-widest text-xs">Процесс</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-t border-white/5 pt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-4 group animate-fade-slide-in" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors duration-300">
                 <step.icon className="w-5 h-5" />
               </div>
               <h4 className="text-lg font-semibold text-white">{step.title}</h4>
               <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-4xl font-medium tracking-tighter text-white mb-4">Частые вопросы</h2>
           <p className="text-neutral-500">Юридические тонкости простыми словами</p>
        </div>

        <div className="space-y-4">
          <details className="group bg-white/5 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/10">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white">
              В чем разница между "заключением специалиста" и "судебной экспертизой"?
              <ChevronDown className="w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
              <strong className="text-white">Заключение специалиста</strong> заказывается вами в частном порядке (до суда или во время). Оно приобщается к делу по ходатайству. 
              <br className="mb-2 block"/>
              <strong className="text-white">Судебная экспертиза</strong> назначается определением суда или постановлением следователя. Мы проводим оба вида исследований.
            </div>
          </details>

          <details className="group bg-white/5 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/10">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white">
              Что делать, если суд уже назначил экспертизу в другом месте, и мы не согласны?
              <ChevronDown className="w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
              Вы можете заказать у нас <strong className="text-white">рецензию</strong> на заключение стороннего эксперта. Мы проверим его на наличие методических и процессуальных ошибок. Качественная рецензия — это основание для назначения повторной экспертизы.
            </div>
          </details>

          <details className="group bg-white/5 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:bg-white/10">
            <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-white">
              Гарантируете ли вы нужный мне результат?
              <ChevronDown className="w-5 h-5 text-neutral-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
              Эксперт по закону обязан быть независимым. Мы не можем гарантировать выводы до проведения исследования — это уголовно наказуемо. Но мы гарантируем, что проведем исследование тщательно, профессионально и учтем все факты, которые могут говорить в вашу пользу.
            </div>
          </details>
        </div>
      </div>

    </div>
  );
};

export default SuccessStories;