import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import Showcase from "./components/Showcase";
import SuccessStories from "./components/SuccessStories";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-orange-500/30 flex flex-col overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed z-0 top-0 right-0 bottom-0 left-0 pointer-events-none">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b5079f4-4ddd-433b-a936-fc8f7dea9df0_3840w.webp"
          alt="Landscape"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]"></div>
      </div>

      {/* Vertical Grid Lines */}
      <div className="fixed inset-0 z-0 pointer-events-none flex w-full max-w-7xl mx-auto border-r border-white/5 opacity-60">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="flex-1 border-l border-white/5 h-full relative overflow-hidden"
          >
            {num === 2 && (
              <div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-fall" style={{ animationDelay: "0s" }}></div>
            )}
            {num === 3 && (
              <>
                 <div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent animate-beam-fall" style={{ animationDelay: "2s" }}></div>
                 <div className="h-full border-r border-dashed border-orange-500/20 w-px mx-auto"></div>
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-fall" style={{ animationDelay: "1.5s" }}></div>
              </>
            )}
            {num === 4 && (
               <div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-fall" style={{ animationDelay: "4s" }}></div>
            )}
            <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">
              0{num}
            </span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <StatsSection />
        <Showcase />
        <SuccessStories />
        <Footer />
      </div>
    </div>
  );
};

export default App;
