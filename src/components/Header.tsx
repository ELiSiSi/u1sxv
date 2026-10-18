import { Menu, MessageCircle, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sheikhConfig } from '../data/sheikhConfig';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() =>
        setTheme((current) => (current === 'light' ? 'dark' : 'light'))
      }
      className="theme-toggle-btn"
      aria-label={
        theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'
      }
      title={theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن'}>
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="story-header" dir="rtl">
      <nav className="story-nav" aria-label="التنقل الرئيسي">
        <Link to="/" className="story-brand flex items-center gap-2 sm:gap-3" onClick={() => setIsOpen(false)}>
          <div className="relative flex-shrink-0">
            <img
              src={sheikhConfig.logo}
              alt={sheikhConfig.name}
              className="story-brand-logo w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-blue-500/50 shadow-md"
            />
            <span className="absolute -bottom-0.5 -left-0.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-slate-900 rounded-full" title="متاح للتواصل والتعاون"></span>
          </div>
          <span className="flex flex-col min-w-0">
            <strong className="text-sm sm:text-base font-bold tracking-tight truncate">{sheikhConfig.name}</strong>
            <small className="text-[10px] sm:text-xs text-blue-400 font-medium font-mono truncate">@u1sxv · صانع محتوى</small>
          </span>
        </Link>

        <div className="story-nav-links">
          <NavLink to="/" end>
            الرئيسية
          </NavLink>
          <NavLink to="/profile">عن محمد</NavLink>
          <a href="/#content-areas">المجالات</a>
          <a href="/#social-hub">المنصات</a>
          <a href="/#contact-section">تواصل</a>
        </div>

        <div className="story-nav-tools flex items-center gap-1.5 sm:gap-3">
          <ThemeToggle />
          <a
            className="story-nav-cta flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm"
            href={sheikhConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="تواصل مباشر عبر واتساب">
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span className="hidden xs:inline">تواصل</span>
          </a>
          <button
            type="button"
            className="story-menu-toggle p-1.5 sm:p-2"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={isOpen}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="story-mobile-menu">
          <NavLink to="/" end onClick={() => setIsOpen(false)}>
            الرئيسية
          </NavLink>
          <NavLink to="/profile" onClick={() => setIsOpen(false)}>
            عن محمد
          </NavLink>
          <a href="/#content-areas" onClick={() => setIsOpen(false)}>
            المجالات
          </a>
          <a href="/#social-hub" onClick={() => setIsOpen(false)}>
            المنصات
          </a>
          <a href="/#contact-section" onClick={() => setIsOpen(false)}>
            تواصل معي
          </a>
          <a
            href={sheikhConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 py-2 px-4 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-2 text-sm font-bold">
            <MessageCircle className="w-4 h-4" />
            واتساب: 0593605211
          </a>
        </div>
      )}
    </header>
  );
};
