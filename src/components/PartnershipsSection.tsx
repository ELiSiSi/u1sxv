import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  ExternalLink,
  FolderDown,
  Sparkles,
  Award,
  TrendingUp,
  MessageCircle,
  Camera,
  HeartHandshake,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { sheikhConfig } from '../data/sheikhConfig';

export const PartnershipsSection: React.FC = () => {
  const portfolio = sheikhConfig.portfolio;
  if (!portfolio) return null;

  const serviceIcons = [Sparkles, Camera, HeartHandshake, TrendingUp];

  return (
    <section id="partnerships-section" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" dir="rtl">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-bold mb-3 shadow-sm">
          <Briefcase className="w-4 h-4 text-blue-400" />
          <span>للشركات والبراندات وصناع القرار</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
          ملف الأعمال والشراكات الإعلانية
        </h2>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          نصنع شراكات إعلانية حقيقية ومؤثرة تصل إلى مئات الآلاف من المتابعين بأسلوب قريب من القلب ومبني على الثقة والمصداقية.
        </p>
      </div>

      {/* Main Drive Media Kit Featured Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-950/80 border-2 border-blue-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl mb-10 sm:mb-14 overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / Info */}
          <div className="lg:col-span-8 space-y-4 text-center lg:text-right">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-bold">
                ملف الأعمال الرسمي (Google Drive)
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> متاح للتحميل والاطلاع
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-white leading-snug">
              {portfolio.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl">
              {portfolio.description}
            </p>

            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center lg:text-right">
                <span className="block text-amber-400 font-bold mb-0.5 font-mono text-base sm:text-lg">+500,000</span>
                <span className="text-slate-400 text-[11px] sm:text-xs">إجمالي المتابعين</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center lg:text-right">
                <span className="block text-blue-400 font-bold mb-0.5 font-mono text-base sm:text-lg">+5,000,000</span>
                <span className="text-slate-400 text-[11px] sm:text-xs">مشاهدات وتفاعل سنوي</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center lg:text-right">
                <span className="block text-emerald-400 font-bold mb-0.5 font-mono text-base sm:text-lg">100%</span>
                <span className="text-slate-400 text-[11px] sm:text-xs">جمهور حقيقي ونشط</span>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 justify-center">
            <a
              href={portfolio.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base transition-all shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-3 group">
              <FolderDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>استعراض ملف الأعمال بالدرايف</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            </a>

            <a
              href={`https://wa.me/966593605211?text=${encodeURIComponent('السلام عليكم أستاذ محمد، أرغب في الاستفسار عن الشراكات والإعلانات التجارية.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>طلب تنسيق إعلان أو رعاية مباشرة</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Services / What We Offer */}
      <div className="mb-12 sm:mb-16">
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">حلول التعاون</span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            مجالات الشراكات والرعايات التي نقدمها
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolio.services.map((service, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-1 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Partnerships Showcase */}
      <div>
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-1">أبرز الشراكات</span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            نماذج لشراكات ونجاحات إعلانية
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolio.partnerships.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between group shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  {partner.id === 'vyonel-partnership' ? (
                    <div className="w-14 h-14 rounded-xl bg-black p-1 ring-1 ring-amber-500/50 flex items-center justify-center overflow-hidden">
                      <img src="/vyonel-logo.png" alt="VYONEL" className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                  )}

                  {partner.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {partner.badge}
                    </span>
                  )}
                </div>

                <span className="text-[11px] text-blue-400 font-medium block mb-1">{partner.category}</span>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {partner.description}
                </p>
              </div>

              {partner.url && (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-2 border-t border-slate-800">
                  <span>زيارة المتجر والشراكة</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
