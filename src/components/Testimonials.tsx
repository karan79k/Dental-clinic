/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LiaStarSolid } from "react-icons/lia";
import Button from "./Button";
import { useTranslation } from "react-i18next";
//bugs solved
export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], 
  });
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div ref={containerRef} className="relative w-full min-h-[200vh] bg-black/80 pb-20">
      <div className="container sticky top-0 h-screen overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-x-8">
          <div className={`flex flex-col justify-center sticky top-0 h-screen ${
            isArabic ? 'text-right pl-24' : 'text-left pr-24'
          }`}>
            <h3 className="mb-6 text-white text-[42px] font-bold">
              {t('testimonials.title')}
            </h3>
            <p className="text-white/80 text-shadow-md mb-8">
              {t('testimonials.subtitle')}
            </p>
            <div className={isArabic ? 'text-right' : 'text-left'}>
              <Button />
            </div>
          </div>

          <div className={`relative h-screen ${isArabic ? 'mr-8' : 'ml-8'}`}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              {[ 0,1, 2, 3, 4].map((index) => (
                <TestimonialCard
                  key={index}
                  testimonial={{
                    text: t(`testimonials.cards.${index}.text`),
                    author: t(`testimonials.cards.${index}.author`)
                  }}
                  index={index}
                  total={5}
                  scrollYProgress={scrollYProgress}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  total,
  scrollYProgress,
  isFirst,
}: {
  testimonial: { text: string; author: string };
  index: number;
  total: number;
  scrollYProgress: any;
  isFirst: boolean;
}) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;

  // Adjust scroll progression for equal spacing
  const y = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    ["120%", "0%"] // Increased range for better spacing
  );

  const cardSpacing = 60; // Increased spacing between cards

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        top: `${index * cardSpacing}px`, // Fixed pixel spacing
        y: isFirst ? "0%" : y,
        zIndex:index, // Reverse z-index for proper stacking
      }}
    >
      <div 
        className={`w-full max-w-[90%] mx-auto bg-[#0f172a] border-primary rounded-2xl shadow-xl p-8 text-white 
        ${isArabic ? 'text-right' : 'text-left'}`}
      >
        <div className={`flex mb-6 text-secondary ${isArabic ? 'justify-end' : 'justify-start'}`}>
          {[...Array(5)].map((_, i) => (
            <LiaStarSolid key={i} className="text-secondary size-8" />
          ))}
        </div>

        <p
          className="text-white mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: testimonial.text }}
          style={{ direction: isArabic ? 'rtl' : 'ltr' }}
        />

        <p className={`text-primary ${isArabic ? '' : '— '}`}>
          {testimonial.author}
        </p>
      </div>
    </motion.div>
  );
}
