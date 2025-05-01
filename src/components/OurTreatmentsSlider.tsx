import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const data = [
  {
    categoryKey: "treatments.dermatology.title",
    titleKey: "treatments.dermatology.bleaching",
    src: "/Images/department-1.png",
  },
  {
    categoryKey: "treatments.dermatology.laser.title",
    titleKey: "treatments.dermatology.laser.description",
    src: "/Images/department-2.png",
  },
  {
    categoryKey: "treatments.dermatology.dermapen.title",
    titleKey: "treatments.dermatology.dermapen.description",
    src: "/Images/department-3.png",
  },
];

export default function OurTreatmentsSlider() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % data.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + data.length) % data.length);

  const prevIndex = (current - 1 + data.length) % data.length;
  const nextIndex = (current + 1) % data.length;

  const imageClasses = "absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl";
  
  const transition = { 
    duration: 0.7, 
    ease: "easeInOut", 
    stiffness: 100, 
    damping: 25 
  };

  return (
    <div className="h-[130vh] bg-black flex items-center justify-center sm:pb-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-8 flex flex-col justify-center text-left relative h-full">
          <div className="mt-28">
            <h4 className="text-[#1ab8b3] text-[18px] mb-4 font-medium">
              {t('treatments.title')}
            </h4>
            <h3 className="text-white text-4xl font-bold tracking-wide drop-shadow-lg">
              {t(data[current].categoryKey)}
            </h3>
            <p className="text-white/80 text-lg mt-8 mr-40 leading-relaxed">
              {t(data[current].titleKey)}
            </p>
          </div>
          <div className="mt-auto flex space-x-4 z-50">
            <button
              onClick={prevSlide}
              className="p-4 text-3xl border bg-slate-50/10 text-white rounded-full hover:bg-slate-50/20"
              aria-label={t('buttons.previous')}
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 text-3xl border bg-slate-50/10 text-white rounded-full hover:bg-slate-50/20"
              aria-label={t('buttons.next')}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        <div className="relative w-[90%] max-w-lg h-[550px] mx-auto flex items-end">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Images section remains unchanged */}
            <motion.img
              key={`left-${prevIndex}`}
              src={data[prevIndex].src}
              alt={t(data[prevIndex].titleKey)}
              className={`${imageClasses} z-10`}
              initial={{ opacity: 0, scale: 0.8, x: "-10%" }}
              animate={{ opacity: 0.4, scale: 0.9, rotate: -10, x: "-10%" }}
              exit={{ opacity: 0, scale: 0.8, x: "-15%" }}
              transition={transition}
            />

            <motion.img
              key={`center-${current}`}
              src={data[current].src}
              alt={t(data[current].titleKey)}
              className={`${imageClasses} z-20 shadow-2xl`}
              initial={{ opacity: 0, scale: 0.9, x: "0%" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, x: "0%" }}
              exit={{ opacity: 0, scale: 0.9, x: "0%" }}
              transition={transition}
            />

            <motion.img
              key={`right-${nextIndex}`}
              src={data[nextIndex].src}
              alt={t(data[nextIndex].titleKey)}
              className={`${imageClasses} z-10`}
              initial={{ opacity: 0, scale: 0.8, x: "10%" }}
              animate={{ opacity: 0.4, scale: 0.9, rotate: 10, x: "10%" }}
              exit={{ opacity: 0, scale: 0.8, x: "15%" }}
              transition={transition}
            />

            <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent rounded-b-xl flex items-end justify-center z-30">
              <div className="text-white text-2xl font-normal mb-6">
                {t(data[current].categoryKey)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
