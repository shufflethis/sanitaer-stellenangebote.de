// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Wrench, Thermometer, Droplets } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Verkäufer Sanitär (m/w/d)',
    company: 'Bauhaus AG',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Verkäufer Sanitär (m/w/d)',
    postedAt: '2026-03-04'
  },
  {
    id: '2',
    title: 'Anlagenmechaniker/in Sanitär',
    company: 'Unruh Personal GmbH',
    location: 'Kiel',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker/in Sanitär',
    postedAt: '2026-03-03'
  },
  {
    id: '3',
    title: 'Bauklempner/in Sanitär',
    company: 'Unruh Personal GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Bauklempner/in Sanitär',
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Rohrschlosser / Sanitär / Heizungsbauer',
    company: 'HIT Personaldienstleistungen GmbH Hamburg',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Rohrschlosser / Sanitär / Heizungsbauer',
    postedAt: '2026-03-03'
  },
  {
    id: '5',
    title: 'Anlagenmechaniker / Anlagenmechanikerin für Sanitär-. Heizungs- u...',
    company: 'Ludwig-Maximilians-Universität München',
    location: 'München',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker / Anlagenmechanikerin für Sanitär-. Heizungs- u...',
    postedAt: '2026-03-03'
  },
  {
    id: '6',
    title: 'Anlagenmechaniker für Sanitär-, Heizungs- und  (m/w/d)',
    company: 'Tannenberger GmbH',
    location: 'Seubersdorf in der Oberpfalz',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker für Sanitär-, Heizungs- und  (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '7',
    title: 'Anlagenmechaniker Heizung Sanitär (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Warendorf',
    location: 'Versmold',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker Heizung Sanitär (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '8',
    title: 'Sachbearbeiter Sanitär / Schwerpunkt Einkauf (m/w/d)',
    company: 'Boor Bäder GmbH',
    location: 'Völklingen',
    type: 'Vollzeit',
    description: 'Sachbearbeiter Sanitär / Schwerpunkt Einkauf (m/w/d)',
    postedAt: '2026-03-03'
  },
  {
    id: '9',
    title: 'Anlagenmechaniker - Sanitär (m/w/d)',
    company: 'SYNERGIE Personal HR GmbH Niederlassung Buchholz SYNERGIE',
    location: 'Schneverdingen',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker - Sanitär (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '10',
    title: 'Anlagenmechaniker (m/w/d) Sanitär und Heizung',
    company: 'WEISS Personalmanagement GmbH - Hanau',
    location: 'Hanau',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker (m/w/d) Sanitär und Heizung',
    postedAt: '2026-03-02'
  },
  {
    id: '11',
    title: 'Sanitär- und Heizungsinstallateur (m/w/d)',
    company: 'Bankpower GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Sanitär- und Heizungsinstallateur (m/w/d)',
    postedAt: '2026-03-01'
  },
  {
    id: '12',
    title: 'Sanitär- und Heizungsmonteur/in (m/w/d)',
    company: 'Reß Haustechnik GmbH & Co. KG',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Sanitär- und Heizungsmonteur/in (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '13',
    title: 'Heizungs-, Sanitär- und Kundendienstmonteur (m/w/d)',
    company: 'Christian Iwers Heizung-Sanitär e.K.',
    location: 'Stapel bei Husum, Nordsee',
    type: 'Vollzeit',
    description: 'Heizungs-, Sanitär- und Kundendienstmonteur (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '14',
    title: 'Verkäufer Sanitär (m/w/d)',
    company: 'Bauhaus AG',
    location: 'Freiburg im Breisgau',
    type: 'Vollzeit',
    description: 'Verkäufer Sanitär (m/w/d)',
    postedAt: '2026-02-27'
  },
  {
    id: '15',
    title: 'Anlagenmechaniker Heizung Sanitär',
    company: 'Hess & Makanda GmbH',
    location: 'Remseck am Neckar',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker Heizung Sanitär',
    postedAt: '2026-02-27'
  },
  {
    id: '16',
    title: 'Sanitär- und Heizungsinstallateur (m/w/d)',
    company: 'meteor Personaldienste AG & Co. KGaA',
    location: 'Kerpen, Rheinland',
    type: 'Vollzeit',
    description: 'Sanitär- und Heizungsinstallateur (m/w/d)',
    postedAt: '2026-02-18'
  },
  {
    id: '17',
    title: 'Sanitär-Heizungsmonteur (m/w/d)',
    company: 'abakus Personal GmbH & Co KG',
    location: 'Bad Brückenau',
    type: 'Vollzeit',
    description: 'Sanitär-Heizungsmonteur (m/w/d)',
    postedAt: '2026-02-18'
  },
  {
    id: '18',
    title: 'Sanitär- und Heizungsmonteur (m/w/d)',
    company: 'Weich GmbH',
    location: 'Amberg, Oberpfalz',
    type: 'Vollzeit',
    description: 'Sanitär- und Heizungsmonteur (m/w/d)',
    postedAt: '2026-02-18'
  },
  {
    id: '19',
    title: 'Verkäufer (w/m/d) Sanitär',
    company: 'BRAUN KG',
    location: 'Trier',
    type: 'Vollzeit',
    description: 'Verkäufer (w/m/d) Sanitär',
    postedAt: '2026-02-18'
  },
  {
    id: '20',
    title: 'Verkäufer (w/m/d) Sanitär',
    company: 'LÖHLE KG',
    location: 'Kaiserslautern',
    type: 'Vollzeit',
    description: 'Verkäufer (w/m/d) Sanitär',
    postedAt: '2026-02-18'
  },
  {
    id: '21',
    title: 'Verkäufer (w/m/d) Sanitär',
    company: 'HOLZHAUER KG',
    location: 'Saarbrücken',
    type: 'Vollzeit',
    description: 'Verkäufer (w/m/d) Sanitär',
    postedAt: '2026-02-18'
  },
  {
    id: '22',
    title: 'Sanitär- und Heizungsinstallateur (m/w/d)',
    company: 'C. Kenneweg GmbH',
    location: 'Barver',
    type: 'Vollzeit',
    description: 'Sanitär- und Heizungsinstallateur (m/w/d)',
    postedAt: '2026-02-06'
  },
  {
    id: '23',
    title: 'Installateur (m/w/d) Sanitär',
    company: 'Tempton Personaldienstleistungen GmbH NL Hamburg',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Installateur (m/w/d) Sanitär',
    postedAt: '2026-02-02'
  },
  {
    id: '24',
    title: 'Fachhelfer Sanitär (m/w/d)',
    company: 'König Fachpersonal GmbH & Co KG, Niederlassung Frankfurt / Main',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    description: 'Fachhelfer Sanitär (m/w/d)',
    postedAt: '2026-02-02'
  },
  {
    id: '25',
    title: 'Sanitär mit Hausmeistertätigkeiten',
    company: 'Service Company Kieslich + Rösch GmbH',
    location: 'Lampertheim, Hessen',
    type: 'Vollzeit',
    description: 'Sanitär mit Hausmeistertätigkeiten',
    postedAt: '2026-01-28'
  }
];

const Home: React.FC = () => {
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
            <Link to="/impressum" className="hover:text-sky-400 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-sky-400 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <p className="mt-4 text-xs">© 2024 sanitaer-stellenangebote.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
