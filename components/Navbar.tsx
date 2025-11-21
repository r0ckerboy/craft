import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-8 px-6 md:px-10 animate-fade-slide-in">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative flex bg-gradient-to-tr from-orange-500 to-amber-500 w-8 h-8 rounded-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-black rounded-full relative z-10"></div>
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">
          Lumina
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {["Workflow", "Resources", "Pricing"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          Log In
        </a>
        <button
          type="button"
          className="relative inline-flex items-center justify-center overflow-hidden transition-all duration-200 bg-[radial-gradient(65.28%_65.28%_at_50%_100%,rgba(251,191,36,0.8)_0%,rgba(251,191,36,0)_100%),linear-gradient(0deg,#ea580c,#ea580c)] rounded-full px-6 py-2.5 group scale-95 hover:scale-100"
        >
            {/* Inner Glow */}
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-50"></div>
             {/* Background Mask to create border effect */}
            <div className="absolute inset-[2px] bg-[#ea580c] rounded-full z-0"></div>

            {/* Particles */}
            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>

            <span className="relative z-10 text-sm font-medium text-white">
              Get Access
            </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
