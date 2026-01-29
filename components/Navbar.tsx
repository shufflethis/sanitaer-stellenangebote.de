
import React from 'react';
import { User, Droplet } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-20 flex items-center bg-white border-b-4 border-sky-600 sticky top-0 z-50 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-sky-600 text-white p-2 rounded-lg group-hover:bg-amber-500 transition-colors">
            <Droplet size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900 font-heavy uppercase">
            Sanitär<span className="text-sky-600">Stellen</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-slate-400 uppercase text-xs tracking-[0.2em]">
          <a href="#" className="hover:text-sky-600 transition-colors">Jobs</a>
          <a href="#" className="hover:text-sky-600 transition-colors">Betriebe</a>
          <a href="#" className="hover:text-sky-600 transition-colors">Magazin</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
