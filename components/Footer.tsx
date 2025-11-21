import React from "react";
import { Send, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="overflow-hidden group bg-[#050505] w-full border-white/5 border-t relative" id="contact">
      {/* Texture Background */}
      <div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
        {/* Noise Simulation */}
        <div className="absolute inset-0 opacity-[0.03] bg-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-12 flex flex-col min-h-[85vh] justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* CTA Text */}
           <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-orange-500 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500/80">
                   Контакт
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                 Усильте линию защиты <span className="text-white/50">профессиональной экспертизой.</span>
              </h2>
              <p className="text-lg text-neutral-400 max-w-md mb-12">
                 Не ждите, пока ситуация станет критической. Свяжитесь со мной для предварительной оценки вашего случая.
              </p>

              <div className="space-y-6">
                 <a href="tel:+79780000000" className="flex items-center gap-4 group/link">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-orange-500 transition-colors">
                       <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-medium text-white">+7 (978) 000-00-00</span>
                 </a>
                 <a href="mailto:expert@crimea.ru" className="flex items-center gap-4 group/link">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-orange-500 transition-colors">
                       <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-medium text-white">expert@crimea.ru</span>
                 </a>
              </div>
           </div>

           {/* Contact Form */}
           <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <form className="flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Ваше имя</label>
                    <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Иван Иванов" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Телефон</label>
                    <input type="tel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="+7 (___) ___-__-__" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Тип дела</label>
                    <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                       <option className="bg-neutral-900">Уголовное</option>
                       <option className="bg-neutral-900">Гражданское</option>
                       <option className="bg-neutral-900">Семейное</option>
                       <option className="bg-neutral-900">Другое</option>
                    </select>
                 </div>
                 <button type="submit" className="mt-4 bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                    Связаться с экспертом <Send className="w-4 h-4" />
                 </button>
                 <p className="text-[10px] text-neutral-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                 </p>
              </form>
           </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 uppercase tracking-widest">
           <span>© 2025 Независимая экспертиза Крым</span>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Политика</a>
              <a href="#" className="hover:text-white transition-colors">Оферта</a>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;