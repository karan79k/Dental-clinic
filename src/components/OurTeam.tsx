import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "keen-slider/keen-slider.min.css";

interface TeamMember {
  imageKey: string;
  nameKey: string;
  specificationKey: string;
  textKey: string;
}

const team: TeamMember[] = [
  {
    imageKey: "/Images/cd-1.jpg",
    nameKey: "team.members.0.name",
    specificationKey: "team.members.0.specification",
    textKey: "team.members.0.text",
  },
  {
    imageKey: "/Images/cd-2.jpg",
    nameKey: "team.members.1.name",
    specificationKey: "team.members.1.specification",
    textKey: "team.members.1.text",
  },
  {
    imageKey: "/Images/cd-3.jpg",
    nameKey: "team.members.2.name",
    specificationKey: "team.members.2.specification",
    textKey: "team.members.2.text",
  },
  {
    imageKey: "/Images/cp-1.jpg",
    nameKey: "team.members.3.name",
    specificationKey: "team.members.3.specification",
    textKey: "team.members.3.text",
  },
];

export default function TeamCarousel() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: -60,
    },
    rtl: isArabic,
    created(slider) {
      setInterval(() => {
        slider?.next();
      }, 5000);
    },
  });

  return (
    <section className="py-12 bg-gray-50 relative w-full min-h-100 pb-40">
      <div className="max-w-8xl mx-auto relative">
        {/* Header Section */}
        <div className={`flex items-center mb-10 px-8 ${
          isArabic ? 'flex-row justify-between' : 'justify-between'
        }`}>
          <div className={`px-9 ${isArabic ? 'text-right' : 'text-left'}`}>
            <p className={`text-sm font-medium mb-4 ${isArabic ? 'text-[#1ab8b3]' : 'text-blue-600'}`}>
              {t('team.meetDentist')}
            </p>
            <h2 className={`text-4xl font-bold tracking-wide mb-4 ${
              isArabic ? 'text-gray-800' : 'text-gray-800 leading-tight'
            }`}>
              {t('team.title')}
            </h2>
            <p className={`${
              isArabic ? 'text-gray-500 text-[18px] ' : 'text-gray-600 text-lg font-normal leading-relaxed'
            }`}>
              {t('team.subtitle')}
            </p>
          </div>

          <Link
            to="/our-doctors"
            className={`flex items-center gap-1 px-8 font-medium transition-colors duration-200 
            ${isArabic ? 'text-[#1ab8b3] hover:text-[#158e8a] flex-row' : 'text-blue-600 hover:text-blue-800'} 
            group`}
          >
            {t('team.viewAll')}
            <span className={`transition-transform duration-200 ${
              isArabic ? ' group-hover:-translate-x-1' : 'group-hover:translate-x-1'
            }`}>
              <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Card Content */}
        <div ref={sliderRef} className="keen-slider">
          {team.map((member, index) => (
            <div key={index} className="keen-slider__slide">
              <motion.div
                className="relative w-[360px] h-[540px] overflow-hidden rounded-2xl shadow-xl mx-auto group"
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                {/* Card Image */}
                <img
                  src={member.imageKey}
                  alt={t(member.nameKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Card Overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-30% z-20"
                  initial={{ y: "100%" }}
                  animate={{ y: hoverIndex === index ? "0%" : "100%" }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                >
                  <div className={`w-full h-full ${
                    isArabic 
                      ? 'bg-gradient-to-t from-black/90 via-black/60 to-transparent' 
                      : 'bg-gradient-to-t from-white/90 via-white/60 to-transparent'
                  } backdrop-blur-md p-6 rounded-t-2xl`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoverIndex === index ? 1 : 0,
                        y: hoverIndex === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className={`w-full ${isArabic ? 'text-center' : 'text-center'}`}
                    >
                      <h3 className={`${
                        isArabic 
                          ? 'text-xl font-semibold text-[#58cac6]' 
                          : 'text-2xl font-bold tracking-wide text-gray-800'
                      }`}>
                        {t(member.nameKey)}
                      </h3>
                      <p className={`${
                        isArabic 
                          ? 'text-base mt-1 text-white' 
                          : 'text-lg font-medium mt-2 text-blue-600'
                      }`}>
                        {t(member.specificationKey)}
                      </p>
                      <p className={`${
                        isArabic 
                          ? 'text-sm mt-2 text-gray-300' 
                          : 'text-base font-normal mt-3 text-gray-700 leading-relaxed'
                      }`}>
                        {t(member.textKey)}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className={`absolute mt-10 ${isArabic ? 'left-14' : 'right-14'} flex gap-3 z-10`}>
          <button
            onClick={() => instanceRef.current?.prev()}
            className={`p-2 rounded-full ${
              isArabic ? 'bg-[#1ab8b3] hover:bg-[#158e8a]' : 'bg-white hover:bg-gray-100 shadow-md'
            }`}
          >
            <ChevronLeft className={`h-6 w-6 ${isArabic ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className={`p-2 rounded-full ${
              isArabic ? 'bg-[#1ab8b3] hover:bg-[#158e8a]' : 'bg-white hover:bg-gray-100 shadow-md'
            }`}
          >
            <ChevronRight className={`h-6 w-6 ${isArabic ? 'text-white' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>
    </section>
  );
}