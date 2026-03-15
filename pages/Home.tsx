// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import GermanCitiesGeo from '../components/geo/GermanCitiesGeo';
import { Job } from '../types';
import { Wrench, Thermometer, Droplets, HelpCircle, TrendingUp, GraduationCap, Award } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    postedAt: '2026-03-15'
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    postedAt: '2026-03-15'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    postedAt: '2026-03-15'
  },
  {
    id: '6',
    title: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    company: 'Neuerburg GrundstücksgemeinschaftSofort-Bewerbung',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Haustechniker/in (m/w/d) für Bestandsimmobilien mit großer Dienstwohnung',
    postedAt: '2026-03-15'
  },
  {
    id: '7',
    title: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    company: 'Andrea Erler Personalberatung',
    location: 'Straubing',
    type: 'Vollzeit',
    description: 'Techniker/Ingenieur Elektro oder Elektromeister Gebäudetechnik als Projektleiter (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '8',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '9',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '10',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '11',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '12',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '13',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Nürnberg, Mittelfranken',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '14',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Regensburg',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '15',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Freiburg im Breisgau',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '16',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Dresden',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '17',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '18',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '19',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '20',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '21',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Karlsruhe, Baden',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '22',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '23',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '24',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
  },
  {
    id: '25',
    title: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    company: 'avanti GmbH',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Servicetechniker (m/w/d) Heizung, Sanitär',
    postedAt: '2026-03-07'
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
            <aside className="w-full lg:w-1/3 xl:w-1/4 order-2 lg:order-1">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-2/3 xl:w-3/4 order-1 lg:order-2">
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
        {/* German Cities Geo SEO Section */}
        <GermanCitiesGeo />

        {/* Career Info Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Karriere im SHK-Handwerk</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Alles, was Sie ueber Berufe und Karrierewege in der Sanitaer-, Heizungs- und Klimabranche wissen muessen.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-sky-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Gehalt & Perspektiven</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SHK-Fachkraefte gehoeren zu den bestbezahlten Handwerkern in Deutschland. Einstiegsgehaelter liegen bei ca. 30.000-36.000 EUR brutto pro Jahr. Erfahrene Meister und Projektleiter koennen 50.000-65.000 EUR und mehr verdienen. Die Nachfrage nach qualifizierten Kraeften steigt stetig.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="text-sky-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Ausbildung & Weiterbildung</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Die Ausbildung zum Anlagenmechaniker SHK dauert 3,5 Jahre. Danach stehen Ihnen viele Wege offen: Meisterpruefung, Techniker-Weiterbildung, Studium der Versorgungstechnik oder Spezialisierung auf Waermepumpen, Solarthermie und Smart-Home-Technik.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-sky-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Zukunftsbranche Energiewende</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Die Energiewende macht SHK-Berufe zukunftssicherer denn je. Waermepumpen, Solarthermie, energieeffiziente Heizungssysteme und moderne Sanitaertechnik sorgen fuer einen dauerhaft hohen Bedarf an Fachkraeften in ganz Deutschland.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <HelpCircle className="text-sky-600" size={28} />
                  <h2 className="text-3xl font-bold text-slate-900">Haeufig gestellte Fragen</h2>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Welche Berufe gibt es im SHK-Bereich?',
                    a: 'Die wichtigsten Berufe sind Anlagenmechaniker/in fuer Sanitaer-, Heizungs- und Klimatechnik, SHK-Meister/in, Servicetechniker/in, Projektleiter/in, Technischer Systemplaner/in sowie Klempner/in und Installateur/in. Auch Quereinsteiger mit technischer Erfahrung finden zunehmend Einstiegsmoeglichkeiten.'
                  },
                  {
                    q: 'Wie finde ich einen passenden SHK-Job auf sanitaer-stellenangebote.de?',
                    a: 'Nutzen Sie unsere Suchfunktion oben auf der Seite. Geben Sie Ihren gewuenschten Beruf und Standort ein, um passende Stellenangebote zu finden. Sie koennen auch nach Fachbereich (Sanitaer, Heizung, Klima) und Erfahrungslevel filtern.'
                  },
                  {
                    q: 'Was verdient ein Anlagenmechaniker SHK?',
                    a: 'Das Einstiegsgehalt liegt bei etwa 30.000-36.000 EUR brutto pro Jahr. Mit Berufserfahrung sind 38.000-45.000 EUR moeglich. SHK-Meister und Projektleiter verdienen haeufig 50.000-65.000 EUR oder mehr. Regionale Unterschiede und Spezialisierungen (z.B. Waermepumpentechnik) beeinflussen das Gehalt zusaetzlich.'
                  },
                  {
                    q: 'Ist die Nutzung von sanitaer-stellenangebote.de kostenlos?',
                    a: 'Ja, die Jobsuche und Bewerbung ist fuer Bewerber vollstaendig kostenlos. Arbeitgeber koennen ihre Stellenangebote ueber unsere Plattform veroeffentlichen, um qualifizierte SHK-Fachkraefte zu erreichen.'
                  },
                  {
                    q: 'Welche Weiterbildungsmoeglichkeiten gibt es im SHK-Handwerk?',
                    a: 'Nach der Ausbildung koennen Sie den Meistertitel erwerben, sich zum Techniker weiterbilden, ein Studium der Versorgungstechnik oder Gebaeudetechnik beginnen oder sich auf Zukunftsfelder wie Waermepumpentechnik, Solarthermie oder Smart-Home-Systeme spezialisieren.'
                  },
                  {
                    q: 'Wer betreibt sanitaer-stellenangebote.de?',
                    a: 'Das Portal wird betrieben von der Social Media Venture GmbH mit Sitz in Berlin (Schliemannstrasse 23, 10437 Berlin). Geschaeftsfuehrer ist Thomas Sander. Bei Fragen erreichen Sie uns unter +49 30 959 988 700.'
                  }
                ].map((faq, i) => (
                  <details key={i} className="bg-slate-50 rounded-xl border border-slate-200 group">
                    <summary className="p-6 cursor-pointer font-bold text-slate-900 hover:text-sky-600 transition-colors list-none flex items-center justify-between">
                      <span>{faq.q}</span>
                      <span className="text-sky-600 ml-4 flex-shrink-0 group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
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
