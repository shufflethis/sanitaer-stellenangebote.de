
import React from 'react';
import { MapPin, Briefcase, ChevronRight, CheckCircle2, Zap } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="shk-card p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 cursor-pointer group">
      <div className="w-20 h-20 rounded-lg bg-slate-50 flex-shrink-0 flex items-center justify-center border border-slate-100 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-1 font-heavy uppercase tracking-tight">
              {job.title}
            </h3>
            <p className="text-sky-600 font-bold text-sm tracking-wide">
              {job.company}
            </p>
          </div>
          <div className="bg-slate-100 text-slate-900 font-black text-lg px-4 py-1.5 rounded-lg">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-sky-600" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Briefcase size={16} className="text-sky-600" />
            {job.type}
          </span>
          <span className="text-slate-300 font-medium italic lowercase">{job.postedAt}</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {['Firmenwagen', 'Übertariflich', '30 Tage Urlaub'].map(tag => (
            <span key={tag} className="bg-sky-50 text-sky-700 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-sky-100">
              <CheckCircle2 size={12} className="text-sky-600" /> {tag}
            </span>
          ))}
          <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-amber-100">
            <Zap size={12} fill="currentColor" /> Sofort-Bewerbung
          </span>
        </div>
      </div>
      
      <div className="flex-shrink-0 group-hover:translate-x-2 transition-transform">
        <div className="w-12 h-12 rounded-lg bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all shadow-inner">
          <ChevronRight size={28} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
