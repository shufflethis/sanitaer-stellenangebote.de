
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import JobCard from './components/JobCard';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import { Job } from './types';
import { Wrench, Thermometer, Droplets } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'shk1',
    title: 'Anlagenmechaniker SHK (m/w/d)',
    company: 'Meisterbetrieb Haustechnik GmbH',
    location: 'Köln',
    type: 'Vollzeit',
    salary: '3.800€ - 4.500€',
    description: 'Installation von Sanitär- und Heizungsanlagen in Neubau und Sanierung. Wir bieten ein festes Servicefahrzeug und modernstes Werkzeug.',
    postedAt: 'Vor 2 Std.',
    logo: 'https://picsum.photos/seed/plumbing1/120/120'
  },
  {
    id: 'shk2',
    title: 'Kundendiensttechniker Heizung/Sanitär',
    company: 'Energie-Lösungen Nord',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '4.200€ - 5.000€',
    description: 'Wartung und Störungsbehebung moderner Gas- und Ölheizungen sowie Wärmepumpen. Eigenverantwortliches Arbeiten im Notdienst.',
    postedAt: 'Vor 5 Std.',
    logo: 'https://picsum.photos/seed/heat1/120/120'
  },
  {
    id: 'shk3',
    title: 'Meister / Projektleiter SHK',
    company: 'Gebäudetechnik Schmidt',
    location: 'München',
    type: 'Vollzeit',
    salary: '5.500€ - 6.800€',
    description: 'Planung und Bauleitung von Großprojekten im Bereich Klima- und Lüftungstechnik. Führung eines Teams von 10 Monteuren.',
    postedAt: 'Gestern',
    logo: 'https://picsum.photos/seed/manager1/120/120'
  }
];

const App: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-1/3 xl:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="flex items-center justify-between mb-8 border-b-2 border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-sky-600 p-2.5 rounded-lg text-white">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-heavy uppercase tracking-tight">
                      Aktuelle <span className="text-sky-600">SHK-Vakanzen</span>
                    </h2>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-44 bg-white animate-pulse rounded-xl border border-slate-100"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Tradesman CTA */}
              <div className="mt-16 bg-slate-900 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Droplets size={200} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-4 font-heavy uppercase">Werde zum Helden der Baustelle</h3>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed">
                      Erstelle jetzt dein Profil und erhalte exklusive Jobangebote von Top-Betrieben in deiner Region.
                    </p>
                  </div>
                  <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-black px-10 py-4 rounded-lg transition-all shadow-xl shadow-amber-900/40 uppercase tracking-widest text-sm">
                    Kostenlos Profil anlegen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black text-white font-heavy mb-6">
              SANITÄR<span className="text-sky-500">JOBS</span>
            </div>
            <p className="max-w-sm leading-relaxed">
              Die Nr. 1 Plattform für qualifizierte Fachkräfte im SHK-Gewerbe. Wir verbinden Handwerk mit Zukunft.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Gewerke</h4>
            <a href="#" className="hover:text-sky-400 transition-colors">Sanitärtechnik</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Heizungsbau</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Klimatechnik</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">Rechtliches</h4>
            <a href="#" className="hover:text-sky-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Datenschutz</a>
            <p className="mt-4 text-xs">© 2024 sanitaer-stellenangebote.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
