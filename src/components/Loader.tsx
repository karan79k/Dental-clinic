import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Loader() {
  const {  i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [loading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  
  // Keep English texts for reference and add Arabic translations
  const loadingTexts = isArabic 
    ? ["الخبراء", "المتخصصون", "القادة", "المبدعون"]
    : ["Artists", "Experts", "Leaders", "Visionaries"];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative">
      <AnimatePresence>
        {loading && (
          <>
            {/* Vertical lines */}
            <div className="absolute top-0 left-0 w-full h-full z-30 flex">
              <div className="flex-1 border-r border-gray-700"></div>
              <div className="flex-1 border-r border-gray-700"></div>
              <div className="flex-1 border-r border-gray-700"></div>
              <div className="flex-1"></div>
            </div>

            {/* Text */}
            <motion.div className="absolute z-40 flex items-center justify-center w-full h-screen">
              <div className={`inline-flex items-baseline text-white text-4xl font-bold ${
                isArabic ? 'flex-row-reverse' : 'flex-row'
              }`}>
                <h1 className={`relative -top-2 ${
                  isArabic ? 'mr-32' : 'ml-32'
                }`}>
                  {isArabic ? 'عيادة الأسنان' : 'Dental'}
                </h1>
                <div className={`relative ${
                  isArabic ? 'mr-4' : 'ml-4'
                } w-[300px] h-[62px] overflow-hidden`}>
                  <AnimatePresence mode="sync">
                    <motion.h1
                      key={currentText}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full text-primary flex items-center text-indigo-400"
                      style={{ 
                        direction: isArabic ? 'rtl' : 'ltr',
                        textAlign: isArabic ? 'right' : 'left'
                      }}
                    >
                      {loadingTexts[currentText]}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
