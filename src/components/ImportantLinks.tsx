import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  ShoppingBag,
  Sparkles,
  MessageCircle,
  Link as LinkIcon,
  Globe,
  Star,
  Zap,
  ArrowLeft,
  Heart,
  Briefcase,
} from 'lucide-react';
import { sheikhConfig } from '../data/sheikhConfig';
import { ImportantLink } from '../types';

const getIcon = (iconName?: string, id?: string) => {
  if (iconName === 'vyonel' || iconName === 'store' || iconName === 'salla' || id === 'vyonel-store' || id === 'salla-store') {
    return <img src="/vyonel-logo.png" alt="VYONEL" className="w-10 h-10 rounded-xl object-cover" />;
  }
  switch (iconName) {
    case 'heart':
      return <Heart className="w-6 h-6 text-rose-400 fill-rose-500/20" />;
    case 'briefcase':
      return <Briefcase className="w-6 h-6 text-blue-400" />;
    case 'shopping-bag':
      return <ShoppingBag className="w-6 h-6" />;
    case 'message-circle':
      return <MessageCircle className="w-6 h-6" />;
    case 'sparkles':
      return <Sparkles className="w-6 h-6" />;
    case 'globe':
      return <Globe className="w-6 h-6" />;
    case 'star':
      return <Star className="w-6 h-6" />;
    case 'zap':
      return <Zap className="w-6 h-6" />;
    default:
      return <LinkIcon className="w-6 h-6" />;
  }
};

const getBadgeStyles = (color?: string) => {
  switch (color) {
    case 'amber':
      return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
    case 'emerald':
      return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    case 'blue':
      return 'bg-blue-500/15 text-blue-400 border-blue-500/30';
    case 'rose':
      return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
    default:
      return 'bg-slate-700/50 text-slate-300 border-slate-600/40';
  }
};

export const ImportantLinks: React.FC = () => {
  const links = sheikhConfig.importantLinks || [];

  if (links.length === 0) return null;

  return (
    <section id="important-links" className="py-8 sm:py-14 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>روابط مباشرة ومميزة</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            روابط هامة وسريعة
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            وصول سريع للمتجر الرسمي، قنوات التواصل، والخدمات الحصرية لصانع المحتوى محمد الإسماعيل
          </p>
        </div>
      </div>

      {/* Grid of Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {links.map((item: ImportantLink, index: number) => {
          const isHighlighted = item.highlight;
          const isEmerald = item.badgeColor === 'emerald';
          return (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className={`group relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5 ${
                isHighlighted && isEmerald
                  ? 'bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border-2 border-emerald-500/50 hover:border-emerald-400 hover:shadow-emerald-500/20'
                  : isHighlighted
                  ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/50 hover:border-amber-400 hover:shadow-amber-500/20'
                  : 'bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-blue-500/50 hover:shadow-blue-500/10'
              }`}>
              {/* Highlight Glow Effect */}
              {isHighlighted && (
                <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-all ${
                  isEmerald ? 'bg-emerald-500/20 group-hover:bg-emerald-500/30' : 'bg-amber-500/20 group-hover:bg-amber-500/30'
                }`}></div>
              )}

              <div>
                {/* Top Bar: Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {item.id === 'vyonel-store' || item.id === 'salla-store' || item.icon === 'vyonel' || item.icon === 'store' ? (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-amber-500/60 bg-black flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0 p-1">
                      <img src="/vyonel-logo.png" alt="VYONEL" className="w-full h-full object-contain rounded-xl" />
                    </div>
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isHighlighted && isEmerald
                          ? 'bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                          : isHighlighted
                          ? 'bg-gradient-to-tr from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/30'
                          : 'bg-slate-800 text-blue-400 border border-slate-700'
                      }`}>
                      {getIcon(item.icon, item.id)}
                    </div>
                  )}

                  {item.badge && (
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${getBadgeStyles(
                        item.badgeColor
                      )}`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="leading-snug">{item.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-[-2px] transition-all" />
                </h3>

                {/* Description */}
                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}
              </div>

              {/* Action Button Link */}
              <div
                className={`w-full py-2 px-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 mt-auto ${
                  isHighlighted && isEmerald
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : isHighlighted
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}>
                <span>{item.id === 'charity-link' ? 'المساهمة والتبرع الآن' : item.id === 'portfolio-drive' ? 'فتح ملف الأعمال بالدرايف' : 'زيارة الرابط الآن'}</span>
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
