import { motion } from 'framer-motion';
import {
  ArrowUpLeft,
  FolderDown,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  Sparkles,
  Users,
  Video,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../components/Footer';
import { SEO } from '../components/SEO';
import { sheikhConfig } from '../data/sheikhConfig';

export const SheikhProfile = () => (
  <motion.main
    className="story-profile py-6 sm:py-12 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    dir="rtl"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.35 }}>
    <SEO title="عن محمد الإسماعيل | صانع محتوى" type="profile" />

    {/* Hero Profile Header */}
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/80 border border-slate-800 p-5 sm:p-10 lg:p-12 shadow-2xl mb-8 sm:mb-12">
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Photo with badges */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-amber-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-56 h-64 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-2xl">
              <img
                src={sheikhConfig.heroImage}
                alt={sheikhConfig.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-200">صانع محتوى نشط</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-7 space-y-3 sm:space-y-4 text-center md:text-right">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>الهوية الرسمية @u1sxv</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            أنا <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-amber-300">{sheikhConfig.name}</span>
          </h1>

          <p className="text-base sm:text-lg font-medium text-slate-300 leading-relaxed">
            “مهتم بالتوعية الاجتماعية ومشاركة تفاصيل اليوميات بأسلوب بسيط وقريب من القلب”
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-400 pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400" />
              {sheikhConfig.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              صناعة المحتوى الرقمي
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              أثر إيجابي وإلهام
            </span>
          </div>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center md:justify-start">
            <a
              href="https://drive.google.com/drive/folders/1-2zFOthFY0vbxwigrt2vXnKmbGrNh8IW"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md">
              <FolderDown className="w-4 h-4" />
              <span>ملف الأعمال بالدرايف</span>
            </a>
            <a
              href={sheikhConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg hover:shadow-emerald-500/25">
              <MessageCircle className="w-4 h-4" />
              <span>تواصل عبر واتساب</span>
            </a>
            <a
              href="#social-links"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-all">
              <Share2 className="w-4 h-4" />
              <span>متابعة المنصات</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Manifesto Quote Section */}
    <section className="rounded-2xl sm:rounded-3xl bg-slate-900/60 border border-slate-800/80 p-5 sm:p-10 backdrop-blur-md mb-8 sm:mb-12 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
        <span className="inline-block text-amber-400 text-3xl sm:text-4xl font-serif">“</span>
        <blockquote className="text-base sm:text-xl md:text-2xl font-bold text-slate-100 leading-relaxed">
          أؤمن أن المحتوى الحقيقي هو الذي يترك أثراً إيجابياً، يطرح قضايا تهمنا جميعاً، ويشبه حكاياتنا اليومية. من خلال فيديوهاتي، أشارككم تجارب، أفكار، ولمحات من الحياة بهدف صناعة الفائدة وإلهام يومكم.
        </blockquote>
        <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto rounded-full"></div>
        <p className="text-xs sm:text-sm font-medium text-slate-400">
          أتمنى لك جولة ممتعة في موقعي، وسعيد جداً بوجودك هنا!
        </p>
      </div>
    </section>

    {/* Content Pillars */}
    <section className="mb-8 sm:mb-14">
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-1.5">محاور المحتوى</span>
        <h2 className="text-xl sm:text-3xl font-bold text-white">ماذا أقدم لجمهوري؟</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">التوعية الاجتماعية</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            طرح قضايا حيوية تهم الشباب والأسرة والمجتمع بأسلوب عقلاني، متزن، وبنّاء يلامس الواقع اليومي.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 transition-all hover:-translate-y-1 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <Video className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">يوميات وتجارب واقعية</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            مشاركة لقطات ومواقف من الحياة اليومية، تجارب ملهمة، وسرد بسيط يعبّر عن الناس وعن تفاصيلنا المشتركة.
          </p>
        </div>

        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/50 transition-all hover:-translate-y-1 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">أثر إيجابي وإلهام</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            رسائل دافئة وأفكار تحفيزية تشجع على الأمل، الكلمة الطيبة، والتعامل الراقي مع الآخرين في كل لحظة.
          </p>
        </div>
      </div>
    </section>

    {/* Social Channels Section */}
    <section id="social-links" className="mb-8 sm:mb-14 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-slate-800 p-5 sm:p-10 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1.5">مجتمعنا الرقمي</span>
      <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">تابعني عبر منصات التواصل</h2>
      <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6 sm:mb-8">
        انضم لمتابعة أحدث الفيديوهات، اليوميات، والتغطيات المباشرة على حساباتي الرسمية
      </p>

      <SocialLinks context="profile" />
    </section>

    {/* Direct Contact Card */}
    <section className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-slate-900 border border-blue-500/30 p-5 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
        <div className="md:col-span-8 space-y-2.5 sm:space-y-3 text-center md:text-right">
          <h2 className="text-xl sm:text-2xl font-bold text-white">هل تود التواصل، التعاون، أو تقديم اقتراح؟</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            أرحب بجميع الاستفسارات، فرص التعاون في صناعة المحتوى الهادف، والرعايات المناسبة لرسالتنا.
          </p>
          <div className="flex flex-wrap gap-2.5 sm:gap-4 justify-center md:justify-start pt-1 sm:pt-2 text-xs sm:text-sm text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> 0593605211
            </span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> ma355301@gmail.com
            </span>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5 sm:gap-3 justify-center">
          <a
            href={sheikhConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>مراسلة عبر واتساب</span>
          </a>
          <a
            href={sheikhConfig.social.email}
            className="w-full py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-center text-xs sm:text-sm transition-all flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <span>إرسال بريد إلكتروني</span>
          </a>
        </div>
      </div>
    </section>

    {/* Back link */}
    <div className="text-center mt-8 sm:mt-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium">
        <span>العودة إلى الصفحة الرئيسية</span>
        <ArrowUpLeft className="w-4 h-4" />
      </Link>
    </div>
  </motion.main>
);
