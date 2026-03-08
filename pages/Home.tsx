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
    title: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    company: 'Andrea Erler Personalberatung',
    location: 'Straubing',
    type: 'Vollzeit',
    description: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '2',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '3',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '4',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '5',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '6',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '7',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '8',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Regensburg',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '9',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Freiburg im Breisgau',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '10',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Dresden',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '11',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '12',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '13',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '14',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '15',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Karlsruhe, Baden',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '16',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '17',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '18',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '19',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '20',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Stuttgart',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '21',
    title: 'Anlagenmechaniker/in Sanitär',
    company: 'Unruh Personal GmbH',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker/in Sanitär',
    postedAt: '2026-03-06'
  },
  {
    id: '22',
    title: 'Bauklempner/in Sanitär',
    company: 'Unruh Personal GmbH',
    location: 'Kiel',
    type: 'Vollzeit',
    description: 'Bauklempner/in Sanitär',
    postedAt: '2026-03-06'
  },
  {
    id: '23',
    title: 'Verkäufer Sanitär (m/w/d)',
    company: 'Bauhaus AG',
    location: 'Kiel',
    type: 'Vollzeit',
    description: 'Verkäufer Sanitär (m/w/d)',
    postedAt: '2026-03-06'
  },
  {
    id: '24',
    title: 'Haustechniker (m/w/d) mit Fachrichtung Sanitär und Heizung',
    company: 'Colonia Personal UG (haftungsbeschränkt)',
    location: 'Bonn',
    type: 'Vollzeit',
    description: 'Haustechniker (m/w/d) mit Fachrichtung Sanitär und Heizung',
    postedAt: '2026-03-06'
  },
  {
    id: '25',
    title: 'Anlagenmechaniker für Heizung und Sanitär (m/w/d)',
    company: 'Aide GmbH Hamburg',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Anlagenmechaniker für Heizung und Sanitär (m/w/d)',
    postedAt: '2026-03-04'
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
