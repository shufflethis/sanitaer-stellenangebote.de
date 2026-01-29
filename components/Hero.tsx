
import React from 'react';
import { Search, MapPin, Wind } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-32 px-4 bg-slate-100 relative overflow-hidden">
      {/* Decorative Blueprint element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-600/5 -skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest mb-10 shadow-lg">
          <Wind size={14} />
          Deutschlands Portal für Sanitär, Heizung & Klima
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight font-heavy uppercase tracking-tighter">
          Meisterhafte <span className="text-sky-600">Karriere</span> <br/>
          im SHK-Handwerk.
        </h1>
        <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
          Finde deinen Platz in innovativen Handwerksbetrieben. Von der Wärmepumpentechnik bis zum Luxusbad – wir haben den passenden Job für dich.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-3 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-3 border border-slate-200">
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-50 rounded-lg">
            <Search className="text-sky-600 mr-4" size={22} />
            <input 
              type="text" 
              placeholder="Beruf (z.B. Anlagenmechaniker, Meister)" 
              className="w-full bg-transparent focus:outline-none text-slate-900 font-bold placeholder-slate-400"
            />
          </div>
          <div className="flex-grow flex items-center px-6 py-4 w-full bg-slate-50 rounded-lg">
            <MapPin className="text-sky-600 mr-4" size={22} />
            <input 
              type="text" 
              placeholder="Einsatzort" 
              className="w-full bg-transparent focus:outline-none text-slate-900 font-bold placeholder-slate-400"
            />
          </div>
          <button className="w-full md:w-auto bg-sky-600 hover:bg-sky-700 text-white font-black px-12 py-5 rounded-lg transition-all shadow-xl shadow-sky-900/20 uppercase tracking-widest text-sm">
            Jobs finden
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
