import React from 'react';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 198, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 154, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 227, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 131, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 112, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 143, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 89, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 72, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 65, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 58, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 67, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 94, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 46, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 53, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 41, slug: 'freiburg' },
  { name: 'Luebeck', region: 'Schleswig-Holstein', jobs: 29, slug: 'luebeck' },
  { name: 'Karlsruhe', region: 'Baden-Wuerttemberg', jobs: 48, slug: 'karlsruhe' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 35, slug: 'muenster' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 22, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 38, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Sanitaer-Jobs in deutschen Staedten</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Finden Sie Stellenangebote im Bereich Sanitaer, Heizung und Klima in Ihrer Naehe. Wir bieten SHK-Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <a
              key={city.slug}
              href={`#/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all group"
            >
              <MapPin className="h-4 w-4 text-sky-500 flex-shrink-0 group-hover:text-sky-600" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800 text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-400">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">SHK-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Die Sanitaer-, Heizungs- und Klimabranche (SHK) gehoert zu den gefragtesten Handwerksbereichen in Deutschland. Von der Installation moderner Waermepumpensysteme bis hin zur Planung komplexer Sanitaeranlagen - Fachkraefte werden in allen Regionen dringend gesucht.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Besonders hohe Nachfrage nach SHK-Fachkraeften gibt es in den Grossstaedten Berlin, Muenchen, Hamburg, Koeln, Stuttgart und Frankfurt. Aber auch in mittelgrossen Staedten wie Nuernberg, Karlsruhe, Dresden und Hannover entstehen laufend neue Stellen fuer Anlagenmechaniker, Servicetechniker und Projektleiter.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ob Anlagenmechaniker fuer Sanitaer-, Heizungs- und Klimatechnik, Meister im SHK-Handwerk, Servicetechniker oder Projektleiter - auf sanitaer-stellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um SHK-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
