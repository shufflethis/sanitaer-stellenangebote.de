
import React from 'react';
import { Filter, Settings, Thermometer, Info } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 px-2">
        <Filter size={20} className="text-sky-600" />
        <h3 className="font-bold text-slate-900 text-lg font-heavy uppercase tracking-tight">Eingrenzen</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <section className="mb-8">
          <h4 className="font-black text-slate-400 text-[10px] uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
            <Settings size={14} /> Fachbereich
          </h4>
          <div className="space-y-3">
            {[
              'Sanitärtechnik', 
              'Heizungstechnik', 
              'Klima & Lüftung', 
              'Regelungstechnik', 
              'Solar / Photovoltaik'
            ].map(item => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-sky-600 focus:ring-sky-600/50 cursor-pointer" />
                <span className="text-slate-600 font-bold text-sm group-hover:text-sky-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h4 className="font-black text-slate-400 text-[10px] uppercase mb-4 tracking-[0.2em] flex items-center gap-2">
            <Thermometer size={14} /> Erfahrung
          </h4>
          <div className="space-y-3">
            {[
              'Projektleiter / Meister', 
              'Geselle / Techniker', 
              'Berufseinsteiger', 
              'Azubi'
            ].map(item => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="level" className="w-5 h-5 border-slate-300 text-sky-600 focus:ring-sky-600/50 cursor-pointer" />
                <span className="text-slate-600 font-bold text-sm group-hover:text-sky-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-sky-50 p-5 rounded-lg border border-sky-100">
          <div className="flex items-center gap-2 text-sky-700 font-bold text-xs mb-2 uppercase tracking-widest">
            <Info size={16} />
            <span>Markt-News</span>
          </div>
          <p className="text-slate-600 text-xs leading-relaxed font-medium">
            Die Nachfrage nach Fachkräften für <b>Wärmepumpensysteme</b> ist im letzten Quartal um 25% gestiegen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
