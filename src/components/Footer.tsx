import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, Heart, Home, Mail, MessageCircle, Phone, Share2, Sparkles, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sheikhConfig } from '../data/sheikhConfig';

// ============================================================================
// SocialLinks
// ============================================================================
export const SocialLinks = ({
  context = 'hero',
}: {
  context?: 'hero' | 'footer' | 'profile' | 'compact';
}) => {
  const { social } = sheikhConfig;
  const links = [
    {
      name: 'TikTok',
      handle: '@u1sxv',
      url: social.tiktok,
      color: '#00f2fe',
      bgHover: 'hover:bg-slate-800 hover:border-cyan-400',
      icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.8-5.46-.4-2.51.76-5.33 2.96-6.61 1.5-.88 3.31-1.06 4.96-.53.11.04.22.09.33.15v4.32c-.5-.14-1.03-.2-1.55-.14-.73.08-1.45.42-1.92 1-.46.57-.68 1.3-.65 2.03.04.9.45 1.74 1.15 2.31.75.61 1.76.85 2.7.67.92-.17 1.75-.72 2.24-1.5.34-.53.53-1.15.57-1.78.04-3.79.02-7.57.02-11.36 0-1.87-.01-3.73-.01-5.6z',
    },
    {
      name: 'Instagram',
      handle: '@u1sxv',
      url: social.instagram,
      color: '#e1306c',
      bgHover: 'hover:bg-pink-950/40 hover:border-pink-500',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    },
    {
      name: 'Snapchat',
      handle: 'u1sxv',
      url: social.snapchat,
      color: '#fffc00',
      bgHover: 'hover:bg-amber-950/40 hover:border-yellow-400',
      icon: 'M12.016 2.007c-3.924 0-5.836 2.827-5.836 4.908 0 .894.27 1.748.704 2.378.118.172.164.385.078.58-.09.207-.34.332-.733.454-.74.23-1.637.525-1.637 1.34 0 .74.773 1.258 1.83 1.488.242.053.432.226.495.464.085.32-.016.711-.476 1.055-.429.321-.926.858-.887 1.547.043.766.786 1.295 1.764 1.443 1.272.193 2.054.912 2.766 1.564.717.658 1.439 1.144 2.628 1.144.116 0 .232-.005.35-.015.088-.007.177-.015.267-.015 1.19 0 1.912-.486 2.629-1.144.712-.652 1.494-1.371 2.766-1.564.978-.148 1.721-.677 1.764-1.443.039-.689-.458-1.226-.887-1.547-.46-.344-.561-.735-.476-1.055.063-.238.253-.411.495-.464 1.057-.23 1.83-.748 1.83-1.488 0-.815-.897-1.11-1.637-1.34-.393-.122-.643-.247-.733-.454-.086-.195-.04-.408.078-.58.434-.63.704-1.484.704-2.378 0-2.081-1.912-4.908-5.836-4.908z',
    },
    {
      name: 'YouTube',
      handle: '@u1sxv',
      url: social.youtube,
      color: '#ff0000',
      bgHover: 'hover:bg-red-950/40 hover:border-red-500',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
    {
      name: 'Facebook',
      handle: 'Facebook',
      url: social.facebook,
      color: '#1877f2',
      bgHover: 'hover:bg-blue-950/40 hover:border-blue-500',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    },
    {
      name: 'WhatsApp',
      handle: '0593605211',
      url: social.whatsapp,
      color: '#25d366',
      bgHover: 'hover:bg-emerald-950/40 hover:border-emerald-500',
      icon: 'M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.95L0 24l6.28-1.65a11.9 11.9 0 0 0 5.8 1.48h.01C18.67 23.83 24 18.49 24 11.92c0-3.19-1.24-6.19-3.48-8.44ZM12.09 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.87-9.88 9.87Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z',
    },
    {
      name: 'Email',
      handle: 'ma355301@gmail.com',
      url: social.email,
      color: '#60a5fa',
      bgHover: 'hover:bg-blue-950/40 hover:border-blue-400',
      icon: 'M12 12.713l11.985-8.71C23.517 2.03 21.849 1 20 1H4C2.152 1 .484 2.03.015 4.003L12 12.713zm0 2.574L0 6.577V20c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V6.577l-12 8.71z',
    },
  ];

  if (context === 'footer') {
    return (
      <div className="flex flex-wrap gap-3">
        {links.map(
          (link) =>
            link.url && (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={`${link.name}: ${link.handle}`}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-11 h-11 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 flex items-center justify-center transition-all group shadow-sm">
                <svg className="w-5 h-5 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d={link.icon} />
                </svg>
              </motion.a>
            )
        )}
      </div>
    );
  }

  if (context === 'profile') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl mx-auto">
        {links.map(
          (link) =>
            link.url && (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/50 backdrop-blur-md transition-all text-right group ${link.bgHover}`}>
                <div className="w-10 h-10 rounded-xl bg-slate-800/90 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-slate-200 group-hover:fill-white" viewBox="0 0 24 24">
                    <path d={link.icon} />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-sm font-bold text-slate-200 group-hover:text-white truncate">{link.name}</span>
                  <span className="block text-xs text-slate-400 truncate dir-ltr text-right">{link.handle}</span>
                </div>
              </motion.a>
            )
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2.5 sm:gap-3">
      {links.map(
        (link) =>
          link.url && (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              title={`${link.name}: ${link.handle}`}
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all shadow-md group"
              whileHover={{ scale: 1.12, y: -3 }}
              whileTap={{ scale: 0.92 }}>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24">
                <path d={link.icon} />
              </svg>
            </motion.a>
          )
      )}
    </div>
  );
};

// ============================================================================
// Scroll to Top Button
// ============================================================================
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="scroll-to-top-btn"
          aria-label="العودة للأعلى">
          <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// Footer Component
// ============================================================================
export const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-container border-t border-slate-800 bg-slate-950 text-slate-200">
        <div className="footer-glow"></div>

        <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-5">
              <Link to="/" className="inline-flex items-center gap-3 group">
                <img
                  src={sheikhConfig.logo}
                  alt={sheikhConfig.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-blue-500/40 shadow-lg group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{sheikhConfig.name}</h3>
                  <p className="text-sm text-blue-400 font-medium">صانع محتوى · @u1sxv</p>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                {sheikhConfig.bio}
              </p>
              <div className="pt-2">
                <span className="block text-xs font-semibold text-slate-500 mb-3 tracking-wider uppercase">تابعني وتواصل معي عبر المنصات</span>
                <SocialLinks context="footer" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-base font-bold text-white border-b border-slate-800 pb-2">روابط سريعة</h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-400" />
                    <span>الرئيسية</span>
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    <span>عن محمد الإسماعيل</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://mtjr.at/6ad27d60qy9ant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-2 group">
                    <span className="w-8 h-8 rounded-lg bg-black flex items-center justify-center overflow-hidden p-0.5 ring-1 ring-amber-400/50 flex-shrink-0">
                      <img src="/vyonel-logo.png" alt="VYONEL" className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                    </span>
                    <span className="font-bold">متجر فيونيل الرسمي (VYONEL)</span>
                  </a>
                </li>
                <li>
                  <a href="/#important-links" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>الروابط المهمة والسريعة</span>
                  </a>
                </li>
                <li>
                  <a href="/#social-live-stats" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>إحصائيات المنصات المباشرة</span>
                  </a>
                </li>
                <li>
                  <a href="/#content-areas" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>مجالات التوعية والمحتوى</span>
                  </a>
                </li>
                <li>
                  <a href="/#social-hub" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-cyan-400" />
                    <span>منصات التواصل (@u1sxv)</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact info */}
            <div className="md:col-span-4 space-y-4" id="contact-section">
              <h4 className="text-base font-bold text-white border-b border-slate-800 pb-2">التواصل المباشر والتعاون</h4>
              <div className="space-y-3 text-sm">
                <a
                  href={sheikhConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-emerald-950/30 border border-slate-800 hover:border-emerald-500/50 transition-all text-slate-300 hover:text-emerald-400">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">واتساب ومحادثة مباشرة</span>
                    <span className="font-mono font-bold text-sm">0593605211</span>
                  </div>
                </a>

                <a
                  href={`tel:0593605211`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-blue-950/30 border border-slate-800 hover:border-blue-500/50 transition-all text-slate-300 hover:text-blue-400">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">اتصال هاتفي</span>
                    <span className="font-mono font-bold text-sm">0593605211</span>
                  </div>
                </a>

                <a
                  href={sheikhConfig.social.email}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-indigo-950/30 border border-slate-800 hover:border-indigo-500/50 transition-all text-slate-300 hover:text-indigo-400">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-xs text-slate-500">البريد الإلكتروني للتعاون والرعايات</span>
                    <span className="font-mono text-xs truncate block text-slate-300">ma355301@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-slate-800/80"></div>

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              جميع الحقوق محفوظة © {new Date().getFullYear()}{' '}
              <span className="text-slate-300 font-bold">{sheikhConfig.name}</span>
            </p>
            <p className="flex items-center gap-1">
              صُنع بـ <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> لمشاركة الأثر الإيجابي وإلهام يومكم
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </>
  );
};
