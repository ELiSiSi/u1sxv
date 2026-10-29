import React from 'react';
import { Heart, ExternalLink, HandHeart } from 'lucide-react';
import { sheikhConfig } from '../data/sheikhConfig';

export const CharityBanner: React.FC = () => {
  const campaign = sheikhConfig.charityCampaign;
  if (!campaign || !campaign.enabled) return null;

  return (
    <div className="w-full bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-emerald-500/30 text-white py-2.5 px-3 sm:px-6 relative overflow-hidden z-20" dir="rtl">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-48 h-full bg-emerald-500/10 blur-xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-center sm:text-right">
        {/* Left Side: Campaign Badge and Text */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold text-[11px] sm:text-xs shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <HandHeart className="w-3.5 h-3.5 text-emerald-400" />
            <span>مبادرة خيرية نشطة</span>
          </span>

          <span className="font-bold text-slate-100">
            {campaign.title}
          </span>

          <span className="hidden md:inline-block text-slate-400 text-xs">
            ({campaign.note || 'يتجدد الرابط دورياً عند اكتمال مبلغ الحالة'})
          </span>
        </div>

        {/* Right Side: Direct Link Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={campaign.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md hover:shadow-emerald-500/30 active:scale-95 group">
            <Heart className="w-3.5 h-3.5 text-slate-950 fill-slate-950/30 group-hover:scale-110 transition-transform" />
            <span>ساهم وتبرع الآن</span>
            <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
};
