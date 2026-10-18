import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sheikhConfig } from '../data/sheikhConfig';

export const AthkarToast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPrayerVisible, setIsPrayerVisible] = useState(false);

  useEffect(() => {
    const handlePrayerVisibility = (e: any) => {
      setIsPrayerVisible(e.detail?.isVisible || false);
    };

    window.addEventListener('prayerVisibilityChanged', handlePrayerVisibility);
    return () => {
      window.removeEventListener('prayerVisibilityChanged', handlePrayerVisibility);
    };
  }, []);

  useEffect(() => {
    if (!sheikhConfig.athkar || sheikhConfig.athkar.length === 0) return;

    let timeoutId: number;

    const showNextZekr = () => {
      if (!isPrayerVisible) {
        setIsVisible(true);
        timeoutId = window.setTimeout(() => {
          setIsVisible(false);
          // Advance to the next zekr after the current one hides
          setCurrentIndex((prev) => (prev + 1) % sheikhConfig.athkar.length);
        }, sheikhConfig.settings?.athkarDuration || 5000);
      } else {
        // If prayer is visible, just advance index and wait for next interval
        setCurrentIndex((prev) => (prev + 1) % sheikhConfig.athkar.length);
      }
    };

    // First appearance after a short delay (e.g. 5 seconds) if index is 0,
    // otherwise wait the full interval
    const delay = currentIndex === 0 && !isVisible ? 5000 : (sheikhConfig.settings?.athkarInterval || 15000);

    const intervalId = window.setTimeout(showNextZekr, delay);

    return () => {
      window.clearTimeout(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [currentIndex, isPrayerVisible]);

  const currentZekr = sheikhConfig.athkar[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && currentZekr && !isPrayerVisible && (
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 40, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="athkar-toast-wrapper"
        >
          <div dir="rtl" className="athkar-toast-content">
            <div className="absolute inset-0 bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
            
            <div className="relative flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] md:text-sm font-bold text-gold">
                    تذكير
                  </span>
                </div>
                <p className="athkar-toast-text text-[13px] md:text-sm font-bold leading-relaxed">
                  {currentZekr}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
