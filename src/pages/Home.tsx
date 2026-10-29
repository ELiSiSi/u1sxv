import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  ExternalLink,
  Film,
  Heart,
  Mail,
  MessageCircle,
  Phone,
  Play,
  PlayCircle,
  Sparkles,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { ImportantLinks } from '../components/ImportantLinks';
import { SocialLiveStats } from '../components/SocialLiveStats';
import { CharityBanner } from '../components/CharityBanner';
import { PartnershipsSection } from '../components/PartnershipsSection';
import { SocialLinks } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ShareButtons } from '../components/ShareButtons';
import { sheikhConfig } from '../data/sheikhConfig';


// ============================================================================
// Video Detector
// ============================================================================
const detectVideo = (
  url: string,
  overrideOrientation?: 'portrait' | 'landscape' | 'square'
) => {
  const orientationToRatio = (o: string) =>
    o === 'portrait' ? '9/16' : o === 'square' ? '1/1' : '16/9';

  const applyOverride = (result: any) => {
    if (!overrideOrientation) return result;
    return {
      ...result,
      orientation: overrideOrientation,
      aspectRatio: orientationToRatio(overrideOrientation),
    };
  };

  if (!url)
    return applyOverride({
      platform: 'other',
      orientation: 'landscape',
      embedUrl: '',
      aspectRatio: '16/9',
      id: '',
    });

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();

    if (hostname.includes('youtube.com') || hostname.includes('youtu.be')) {
      let id = '';
      let isShorts = false;
      if (hostname.includes('youtu.be')) id = urlObj.pathname.slice(1);
      else if (urlObj.searchParams.has('v'))
        id = urlObj.searchParams.get('v') || '';
      else if (urlObj.pathname.startsWith('/embed/'))
        id = urlObj.pathname.split('/')[2];
      else if (urlObj.pathname.startsWith('/shorts/')) {
        id = urlObj.pathname.split('/')[2];
        isShorts = true;
      }
      if (id)
        return applyOverride({
          platform: 'youtube',
          orientation: isShorts ? 'portrait' : 'landscape',
          embedUrl: `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`,
          aspectRatio: isShorts ? '9/16' : '16/9',
          id,
        });
    }

    if (hostname.includes('facebook.com') || hostname.includes('fb.watch')) {
      const isPortrait =
        urlObj.pathname.includes('/reel/') ||
        urlObj.pathname.includes('/reels/');
      return applyOverride({
        platform: 'facebook',
        orientation: isPortrait ? 'portrait' : 'landscape',
        embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=800`,
        aspectRatio: isPortrait ? '9/16' : '16/9',
        id: '',
      });
    }

    if (hostname.includes('tiktok.com')) {
      let id = '';
      if (urlObj.pathname.includes('/video/'))
        id = urlObj.pathname.split('/video/')[1].split('?')[0];
      else if (urlObj.pathname.includes('/v/'))
        id = urlObj.pathname.split('/v/')[1].split('?')[0];
      if (id)
        return applyOverride({
          platform: 'tiktok',
          orientation: 'portrait',
          embedUrl: `https://www.tiktok.com/embed/v2/${id}`,
          aspectRatio: '9/16',
          id,
        });
    }

    if (hostname.includes('instagram.com')) {
      let id = '';
      let embedType = 'p';
      if (urlObj.pathname.includes('/p/')) {
        id = urlObj.pathname.split('/p/')[1].split('/')[0];
        embedType = 'p';
      } else if (urlObj.pathname.includes('/reel/')) {
        id = urlObj.pathname.split('/reel/')[1].split('/')[0];
        embedType = 'reel';
      } else if (urlObj.pathname.includes('/reels/')) {
        id = urlObj.pathname.split('/reels/')[1].split('/')[0];
        embedType = 'reel';
      }

      if (id)
        return applyOverride({
          platform: 'instagram',
          orientation: embedType === 'reel' ? 'portrait' : 'square',
          embedUrl: `https://www.instagram.com/${embedType}/${id}/embed/`,
          aspectRatio: embedType === 'reel' ? '9/16' : '1/1',
          id,
        });
    }

    return applyOverride({
      platform: 'other',
      orientation: 'landscape',
      embedUrl: url,
      aspectRatio: '16/9',
      id: '',
    });
  } catch {
    return applyOverride({
      platform: 'other',
      orientation: 'landscape',
      embedUrl: url,
      aspectRatio: '16/9',
      id: '',
    });
  }
};

// ============================================================================
// Hero Section
// ============================================================================
const Hero = () => (
  <section className="relative overflow-hidden py-8 sm:py-14 md:py-20" dir="rtl">
    {/* Background Glows */}
    <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
    <div className="absolute bottom-10 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono font-bold">@u1sxv</span>
            <span>•</span>
            <span>صانع محتوى وتوعية</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-[1.3] tracking-tight">
            أهلاً بك، أنا{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 via-indigo-500 to-amber-500 dark:from-blue-400 dark:via-indigo-300 dark:to-amber-300">
              {sheikhConfig.name}
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            “مهتم بالتوعية الاجتماعية ومشاركة تفاصيل اليوميات بأسلوب بسيط وقريب من القلب”
          </p>

          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            أشارككم تجارب واقعية، أفكاراً ملهمة، ولمحات من الحياة اليومية لصناعة الفائدة وترك أثر إيجابي دائم في يوم كل متابع.
          </p>

          {/* Social Bar */}
          <div className="pt-1 sm:pt-2 flex justify-center lg:justify-start">
            <SocialLinks context="hero" />
          </div>

          {/* Actions */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3.5 justify-center lg:justify-start">
            {/* 1. متجر العطور الفاخرة VYONEL */}
            <a
              href="https://mtjr.at/6ad27d60qy9ant"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-amber-500/30 group">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black flex items-center justify-center overflow-hidden shadow-md p-1 flex-shrink-0 ring-1 ring-black/40">
                <img
                  src="/vyonel-logo.png"
                  alt="VYONEL"
                  className="w-full h-full object-contain group-hover:scale-115 transition-transform"
                />
              </span>
              <div className="text-right">
                <span className="block text-[11px] font-bold text-slate-800 leading-none mb-1">المتجر المعتمد</span>
                <span className="text-sm sm:text-base font-black">متجر العطور (VYONEL)</span>
              </div>
            </a>

            {/* 2. رابط خيري متجدد */}
            {sheikhConfig.charityCampaign?.enabled && (
              <a
                href={sheikhConfig.charityCampaign.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm sm:text-base transition-all shadow-lg hover:shadow-emerald-500/30 group">
                <span className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                  <Heart className="w-4 h-4 text-white fill-white/40 group-hover:scale-110 transition-transform" />
                </span>
                <div className="text-right">
                  <span className="block text-[10px] text-emerald-200 font-bold leading-none mb-1">يتجدد عند اكتمال الحالة</span>
                  <span className="text-sm sm:text-base font-black">رابط خيري متجدد</span>
                </div>
              </a>
            )}

            {/* 3. ملف الأعمال والشراكات بالدرايف */}
            <a
              href="#partnerships-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-blue-600/30">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>ملف الأعمال والشراكات</span>
            </a>

            {/* 4. واتساب */}
            <a
              href={sheikhConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-sm sm:text-base transition-all">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>واتساب</span>
            </a>

            {/* 5. عن محمد */}
            <Link
              to="/profile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-slate-200 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-sm sm:text-base transition-all">
              <span>عن محمد</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="pt-4 sm:pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-200 dark:border-slate-800 max-w-lg mx-auto lg:mx-0 text-center">
            <div className="p-2 sm:p-0">
              <span className="block text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">5+</span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">منصات رقمية نشطة</span>
            </div>
            <div className="p-2 sm:p-0">
              <span className="block text-xl sm:text-2xl font-black text-amber-500 font-mono">100%</span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">محتوى هادف وقريب</span>
            </div>
            <div className="p-2 sm:p-0">
              <span className="block text-xl sm:text-2xl font-black text-emerald-500 font-mono">يومي</span>
              <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">تفاعل وتحديثات</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Portrait */}
        <motion.div
          className="lg:col-span-5 flex justify-center order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <div className="relative w-64 sm:w-80 md:w-96 max-w-[85vw]">
            {/* Glow frame */}
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-blue-600 via-indigo-500 to-amber-500 rounded-3xl blur-xl sm:blur-2xl opacity-40 animate-pulse"></div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white/20 dark:border-slate-700/80 shadow-2xl bg-slate-900 aspect-[4/5]">
              <img
                src={sheikhConfig.heroImage}
                alt={sheikhConfig.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

              {/* Bottom Card Inside Image - Ultra Compact on Mobile */}
              <div className="absolute bottom-2.5 sm:bottom-4 inset-x-2.5 sm:inset-x-4 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-lg text-white">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xs sm:text-base leading-tight truncate">{sheikhConfig.name}</h3>
                    <p className="text-[10px] sm:text-xs text-blue-400 font-mono tracking-tight truncate mt-0.5">@u1sxv · المملكة العربية السعودية</p>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Platform Badges - Scaled for Mobile */}
            <a
              href={sheikhConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-2.5 sm:-top-3 right-0 sm:-right-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/90 text-white border border-slate-700 shadow-xl flex items-center gap-1.5 text-[10px] sm:text-xs font-bold hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>TikTok @u1sxv</span>
            </a>

            <a
              href={sheikhConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex absolute top-20 -left-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white border border-slate-700 shadow-xl items-center gap-1.5 text-xs font-bold hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              <span>Instagram</span>
            </a>

            <a
              href={sheikhConfig.social.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-2 sm:-bottom-3 left-0 sm:-left-3 px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/90 text-white border border-slate-700 shadow-xl flex items-center gap-1.5 text-[10px] sm:text-xs font-bold hover:scale-105 transition-transform">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              <span>Snapchat</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);// ============================================================================
// Manifesto Quote Banner
// ============================================================================
const ManifestoSection = () => (
  <section className="py-6 sm:py-12 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto" dir="rtl">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900 to-blue-950/70 border border-slate-800 p-5 sm:p-10 shadow-2xl text-center overflow-hidden">
      
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 space-y-3 sm:space-y-5">
        <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs sm:text-sm font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>رسالتي في صناعة المحتوى</span>
        </span>

        <p className="text-base sm:text-xl md:text-2xl font-extrabold text-white leading-relaxed max-w-3xl mx-auto">
          «أؤمن أن المحتوى الحقيقي هو الذي يترك أثراً إيجابياً، يطرح قضايا تهمنا جميعاً، ويشبه حكاياتنا اليومية. من خلال فيديوهاتي، أشارككم تجارب، أفكار، ولمحات من الحياة بهدف صناعة الفائدة وإلهام يومكم.»
        </p>

        <p className="text-xs sm:text-base text-blue-300 font-medium pt-1 sm:pt-2">
          أتمنى لك جولة ممتعة في موقعي، وسعيد جداً بوجودك هنا!
        </p>

        <div className="pt-2 flex items-center justify-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-amber-400">
            <img src={sheikhConfig.logo} alt={sheikhConfig.name} className="w-full h-full object-cover" />
          </div>
          <div className="text-right">
            <span className="block text-xs sm:text-sm font-bold text-white">{sheikhConfig.name}</span>
            <span className="block text-[10px] sm:text-xs text-slate-400 font-mono">@u1sxv</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

// ============================================================================
// Content Areas / Pillars
// ============================================================================
const ContentAreas = () => {
  const pillars = [
    {
      id: 'pillar-1',
      number: '01',
      title: 'التوعية الاجتماعية',
      tagline: 'قضايا تهم مجتمعنا',
      desc: 'طرح قضايا تهمنا جميعاً بأسلوب بنّاء، ومناقشة الظواهر الاجتماعية والسلوكيات لتعزيز الوعي والفهم المتبادل.',
      icon: Users,
      color: 'from-blue-500/20 to-blue-600/5',
      border: 'hover:border-blue-500/50',
      iconColor: 'text-blue-400',
    },
    {
      id: 'pillar-2',
      number: '02',
      title: 'يوميات وتجارب واقعية',
      tagline: 'تشبه حكاياتنا اليومية',
      desc: 'مشاركة تفاصيل اليوميات ولمحات عفوية من الحياة وتجارب واقعية ملهمة تمس القلب وتزرع الابتسامة.',
      icon: Film,
      color: 'from-amber-500/20 to-amber-600/5',
      border: 'hover:border-amber-500/50',
      iconColor: 'text-amber-400',
    },
    {
      id: 'pillar-3',
      number: '03',
      title: 'أفكار ورسائل إلهام',
      tagline: 'صناعة الفائدة والأثر الإيجابي',
      desc: 'رسائل تحفيزية وأفكار إيجابية تدفعك للأمام، وتذكّرنا بأهمية الإحسان، التفاؤل، والعمل الطيب في كل يوم.',
      icon: Heart,
      color: 'from-rose-500/20 to-rose-600/5',
      border: 'hover:border-rose-500/50',
      iconColor: 'text-rose-400',
    },
  ];

  return (
    <section id="content-areas" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" dir="rtl">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-500 block mb-1.5">أركان المحتوى</span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 sm:mb-3">
          مجالات المحتوى التي أشاركها معكم
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base">
          ثلاث مساحات رئيسية تلتقي فيها الفكرة بالبساطة لصناعة تجربة ممتعة وهادفة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-2xl sm:rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 p-5 sm:p-8 transition-all hover:-translate-y-1 ${pillar.border} shadow-lg relative group overflow-hidden`}>
              
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${pillar.color} border border-slate-700/60 flex items-center justify-center ${pillar.iconColor} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <span className="font-mono text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-700 group-hover:text-slate-500 transition-colors">
                  {pillar.number}
                </span>
              </div>

              <span className="block text-[11px] sm:text-xs font-bold text-amber-400 mb-1">{pillar.tagline}</span>
              <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================================
// Social Hub Section
// ============================================================================
const SocialHub = () => {
  const platforms = [
    {
      name: 'TikTok',
      handle: '@u1sxv',
      desc: 'فيديوهات قصيرة ويوميات وتوعية سريعة',
      url: sheikhConfig.social.tiktok,
      action: 'تابعني على تيك توك',
      badge: 'محتوى يومي',
      color: 'hover:border-cyan-400 hover:shadow-cyan-500/20',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    },
    {
      name: 'Instagram',
      handle: '@u1sxv',
      desc: 'ريلز، ستوريات حصرية، ولمحات من الكواليس',
      url: sheikhConfig.social.instagram,
      action: 'تابعني على إنستغرام',
      badge: 'ريلز وستوري',
      color: 'hover:border-pink-500 hover:shadow-pink-500/20',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    },
    {
      name: 'Snapchat',
      handle: 'u1sxv',
      desc: 'سنابات وتفاصيل اليوميات الحية مع الجمهور',
      url: sheikhConfig.social.snapchat,
      action: 'أضفني على سناب شات',
      badge: 'يوميات حية',
      color: 'hover:border-yellow-400 hover:shadow-yellow-500/20',
      badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    },
    {
      name: 'YouTube',
      handle: '@u1sxv',
      desc: 'فلوقات وقضايا مجتمعية مطولة وحلقات خاصة',
      url: sheikhConfig.social.youtube,
      action: 'اشترك في القناة',
      badge: 'حلقات وشورتس',
      color: 'hover:border-red-500 hover:shadow-red-500/20',
      badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
    },
    {
      name: 'Facebook',
      handle: 'Mohamed',
      desc: 'منشورات ومناقشات وتواصل مع المتابعين',
      url: sheikhConfig.social.facebook,
      action: 'تابع الصفحة',
      badge: 'مجتمع فيسبوك',
      color: 'hover:border-blue-500 hover:shadow-blue-500/20',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    },
  ];

  return (
    <section id="social-hub" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" dir="rtl">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1.5">حساباتي الرسمية</span>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 sm:mb-3">
          مجتمعنا على منصات التواصل (@u1sxv)
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base">
          اختر منصتك المفضلة وكن جزءاً من رحلتنا اليومية في صناعة المحتوى الهادف
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
        {platforms.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className={`p-4 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 transition-all hover:-translate-y-1 ${p.color} shadow-lg flex flex-col justify-between group`}>
            
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className={`text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border ${p.badgeColor}`}>
                  {p.badge}
                </span>
                <span className="font-mono text-xs text-slate-400 dir-ltr font-bold">{p.handle}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">{p.name}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 sm:mb-6">
                {p.desc}
              </p>
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-all border border-slate-700/60 flex items-center justify-center gap-2 group-hover:border-slate-500">
              <span>{p.action}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// Direct Contact / Collaboration Section
// ============================================================================
const ContactCTA = () => (
  <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" dir="rtl" id="contact-section">
    <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border border-blue-500/30 p-5 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
        <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-center lg:text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">تواصل وتعاون</span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            جاهزون للتعاون، الرعايات، وصناعة الأثر الطيب
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl">
            إذا كانت لديك فكرة مبادرة، رعاية، أو ترغب في التواصل المباشر مع محمد الإسماعيل، يمكنك المراسلة عبر الواتساب أو البريد الإلكتروني.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-4 justify-center lg:justify-start pt-1 sm:pt-2 font-mono text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 0593605211
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> ma355301@gmail.com
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3.5 justify-center">
          <a
            href={sheikhConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center text-sm sm:text-base transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>مراسلة عبر واتساب</span>
          </a>

          <a
            href={sheikhConfig.social.email}
            className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-center text-sm sm:text-base transition-all flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>إرسال بريد إلكتروني</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ============================================================================
// Home Page
// ============================================================================
export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="story-home">
      <SEO />
      
      {/* Top Dynamic Charity Banner */}
      <CharityBanner />

      {/* 1. Creator Hero */}
      <Hero />

      {/* 2. Important Quick Links (Direct on Landing) */}
      <ImportantLinks />

      {/* 3. Live Platform Stats & 100% Verified Interaction */}
      <SocialLiveStats />

      {/* 4. Portfolio, Media Kit & Brand Partnerships */}
      <PartnershipsSection />

      {/* 5. Personal Manifesto */}
      <ManifestoSection />

      {/* 6. Content Pillars */}
      <ContentAreas />

      {/* 7. Social Presence Hub */}
      <SocialHub />

      {/* 8. Direct Contact CTA */}
      <ContactCTA />
    </motion.div>
  );
};

// ============================================================================
// Series / Category Page with Video Player
// ============================================================================
const SeriesPage = () => {
  const { id, videoId } = useParams();
  const navigate = useNavigate();
  const [iframeError, setIframeError] = useState(false);
  const videoPlayerRef = useRef<HTMLDivElement>(null);

  const series = sheikhConfig.categories?.find((c) => c.id === id);
  const currentIndex =
    videoId && series ? series.videos.findIndex((v) => v.id === videoId) : -1;
  const currentVideo =
    currentIndex >= 0 && series ? series.videos[currentIndex] : null;
  const parsedVideo = currentVideo
    ? detectVideo(currentVideo.url, currentVideo.orientation)
    : null;
  const hasNext =
    currentIndex >= 0 && series
      ? currentIndex < series.videos.length - 1
      : false;
  const hasPrev = currentIndex > 0;

  useEffect(() => {
    setIframeError(false);
    const timer = setTimeout(() => {
      if (videoId && videoPlayerRef.current) {
        const yOffset = -90;
        const element = videoPlayerRef.current;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (!videoId) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [id, videoId]);

  if (!series) return <Navigate to="/" replace />;

  const playVideo = (vId: string) => navigate(`/category/${id}/video/${vId}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen py-8 md:py-14"
      dir="rtl">
      <SEO
        title={`${series.name} | ${sheikhConfig.name}`}
        description={`مقاطع وفيديوهات ${series.name} لصانع المحتوى ${sheikhConfig.name}`}
        type="article"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-bold text-sm sm:text-base">
            <ArrowRight className="w-4 h-4" /> العودة للرئيسية
          </Link>
        </div>

        {/* Series Header */}
        <div className="mb-8 p-6 md:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <img
            src={series.image}
            alt={series.name}
            className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-2xl shadow-lg border-2 border-slate-700"
          />
          <div className="text-center md:text-right flex-1 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">سلسلة مقاطع</span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">{series.name}</h1>
            <p className="text-xs md:text-sm text-slate-400 font-medium">
              {series.videos.length} مقطع متوفر
            </p>
            <div className="pt-2">
              <ShareButtons
                url={typeof window !== 'undefined' ? window.location.href : ''}
                title={`${series.name} - ${sheikhConfig.name}`}
              />
            </div>
          </div>
        </div>

        {/* Video Player */}
        {currentVideo && parsedVideo && (
          <motion.div
            ref={videoPlayerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10">
            <div
              className={`relative mx-auto bg-black overflow-hidden shadow-2xl rounded-2xl border border-slate-800 ${
                parsedVideo.orientation === 'portrait'
                  ? 'w-full md:max-w-[480px]'
                  : 'w-full md:max-w-[850px]'
              }`}
              style={{
                aspectRatio: parsedVideo.aspectRatio,
                maxHeight: parsedVideo.orientation === 'portrait' ? '80vh' : 'none',
              }}>
              {!iframeError ? (
                <iframe
                  src={parsedVideo.embedUrl}
                  title={currentVideo.title || 'فيديو'}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  loading="eager"
                  onError={() => setIframeError(true)}></iframe>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <Film className="w-12 h-12 text-amber-400 mb-3" />
                  <p className="text-lg font-bold mb-1">المقطع متاح عبر الرابط المباشر</p>
                  <a
                    href={currentVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs">
                    فتح الرابط الأصلي
                  </a>
                </div>
              )}
            </div>

            {/* Title & Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 max-w-[850px] mx-auto">
              <h2 className="text-base sm:text-xl font-bold text-white text-center sm:text-right flex-1">
                {currentVideo.title || 'مقطع فيديو'}
              </h2>
              <div className="flex items-center gap-2">
                {hasPrev && (
                  <button
                    onClick={() => playVideo(series.videos[currentIndex - 1].id)}
                    className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all">
                    السابق
                  </button>
                )}
                {hasNext && (
                  <button
                    onClick={() => playVideo(series.videos[currentIndex + 1].id)}
                    className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all">
                    التالي
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Video List */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white mb-4">مقاطع هذه السلسلة</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {series.videos.map((v, idx) => {
              const isCurrent = v.id === videoId;
              return (
                <div
                  key={v.id}
                  onClick={() => playVideo(v.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isCurrent
                      ? 'bg-blue-600/20 border-blue-500 shadow-md'
                      : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800'
                  }`}>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-blue-400">
                    {isCurrent ? <Play className="w-5 h-5 fill-current" /> : <PlayCircle className="w-5 h-5" />}
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs font-semibold text-slate-400">مقطع #{idx + 1}</span>
                    <h4 className="text-sm font-bold text-white truncate">{v.title || `فيديو ${idx + 1}`}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CategoryPage = SeriesPage;
export const VideoPage = SeriesPage;
