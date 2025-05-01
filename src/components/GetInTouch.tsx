import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function GetInTouch() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const leftToCenter = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightToCenter = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative -pb-8">
      <div ref={ref} className="bg-black min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
        <motion.h2
          style={{ x: leftToCenter, opacity }}
          className="absolute top-[23%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[56px]"
        >
          {t('app.community.title')}
        </motion.h2>

        <motion.h2 
          style={{ x: rightToCenter, opacity }}
          className="text-[56px] text-gradient-custom bg-clip-text text-transparent absolute top-[33%] left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          {t('app.community.join')}
        </motion.h2>

        <div className="pt-38 max-w-[768px] text-center">
          <p className="text-gray-300 mb-6 text-[17px]">
            {t('app.community.spam')}
          </p>

          <div className="flex justify-center items-center gap-2 mb-4">
            <input
              type="email"
              placeholder={t('app.community.email')}
              className={`w-[360px] h-[48px] px-4 rounded-[8px] font-light text-[16px] text-white outline focus:ring-2 focus:ring-violet-500 ${
                isArabic ? 'text-right' : 'text-left'
              }`}
            />
            <button className="bg-primary text-[16px] ml-2 font-light text-white w-[120px] h-[48px] px-[4px] py-[5px] rounded-md cursor-pointer">
              {t('buttons.subscribe')}
            </button>
          </div>
          <p className="text-gray-500 text-[13px]">
            {t('app.community.terms')}
          </p>
        </div>
      </div>
    </div>
  );
}

const words = ['Experts', 'Artists', 'Leaders'];

export function InfiniteWordsStripe() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const repeatedWords = Array.from({ length: 50 }, () => words).flat();
  const speed = useTransform(scrollYProgress, [0, 1], [0, -1000]); // pixels
  const smoothSpeed = useSpring(speed, {
    stiffness: 50,
    damping: 10,
  });

  return (
    <div ref={containerRef} className="overflow-hidden w-full bg-black py-2 relative">
      <div className="relative h-20 w-full flex items-center justify-center">
        <motion.div
          className="absolute left-0 flex space-x-6 whitespace-nowrap"
          style={{ x: smoothSpeed }}
        >
          {repeatedWords.map((word, index) => (
            <span key={`left-${index}`} className="text-violet-500 text-2xl font-semibold">
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
