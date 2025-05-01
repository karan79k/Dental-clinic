/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslation } from "react-i18next"
import OurTreatmentsSlider from "../components/OurTreatmentsSlider"
import OurPractice from "../components/OurPractice"
import UpperParallax from "../components/UpperParallax"
import Testimonials from "../components/Testimonials"
import OurTeam from "../components/OurTeam"
import HomeParallax from "../components/HomeParallax"

export default function Home() {
  return (
    <div className="relative w-full">
      <HomeParallax/>
      <TextAnimation/>
      <OurTreatmentsSlider/>
      <UpperParallax/>
      <Testimonials/>
      <OurPractice/>
      <OurTeam/>
    </div>
  )
}

const texts = [
  'home.sections.features.leaders',
  'home.sections.features.modern',
  'home.sections.features.standards'
];

function TextAnimation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div 
      ref={containerRef} 
      className="min-h-[400vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {texts.map((textKey, index) => (
            <TextBlock 
              key={index}
              textKey={textKey}
              index={index}
              total={texts.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface TextBlockProps {
  textKey: string;
  index: number;
  total: number;
  scrollYProgress: any;
}

function TextBlock({ textKey, index, total, scrollYProgress }: TextBlockProps) {
  const ref = useRef(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const sectionStart = index / total;
  const sectionMid = sectionStart + 1 / total / 2;
  const sectionEnd = (index + 1) / total;

  const narrowStart = sectionMid - 0.07;
  const narrowEnd = sectionEnd + 0.07;

  const opacity = useTransform(
    scrollYProgress,
    [narrowStart, sectionMid, narrowEnd],
    [0, 1, 0]
  );

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 flex items-start pt-[30vh] justify-center text-center"
      style={{
      opacity,
      zIndex: total - index,
      }}
    >
      <div className={`w-2/3 flex-wrap ${isArabic ? 'text-end' : 'text-start'}`}>
      <h2
        className={`text-5xl lg:text-5xl xl:text-6lg font-bold leading-tight ${
        isArabic ? 'tracking-normal' : 'tracking-wide'
        } main-heading-font`}
      >
        {index === 0 ? (
        <>
          <span className="text-[#1ab8b3]">{t('home.sections.features.leaders.title')}</span>
          {' '}
          <span className={isArabic ? 'text-5xl lg:text-5xl' : ''}>
          {t('home.sections.features.leaders.subtitle')}
          </span>
        </>
        ) : index === 1 ? (
        <>
          <span className={isArabic ? 'text-5xl lg:text-5xl' : ''}>
          {t('home.sections.features.modern.title')}
          </span>
          {' '}
          <span className="text-[#1ab8b3]">{t('home.sections.features.modern.subtitle')}</span>
        </>
        ) : index === 2 ? (
        <>
          <span className="text-[#1ab8b3]">{t('home.sections.features.standards.title')}</span>
          {' '}
          <span className={isArabic ? 'text-5xl lg:text-5xl' : ''}>
          {t('home.sections.features.standards.subtitle')}
          </span>
        </>
        ) : (
        t(textKey)
        )}
      </h2>
      </div>
    </motion.div>
  );
}
