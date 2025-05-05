import { motion } from "framer-motion";
import Progressbar from "../components/Progressbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OurValues from "../components/OurValues";

export default function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative h-[70vh] sm:h-screen overflow-hidden">
        <video
          src="/video-2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className={`absolute inset-0 z-20 flex flex-col justify-start sm:justify-center px-8 top-1/2 sm:top-0 
          ${isArabic ? 'items-end text-right' : 'items-start text-left'}`}>
          <motion.h1
            initial={{ opacity: 0, x: isArabic ? 100 : -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {t('about.hero.title')}
          </motion.h1>

          <Link to="/contact">
            <button className="bg-gradient-custom p-4 text-white rounded-md font-semibold w-[180px] 
              hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
              {t('about.hero.contactButton')}
            </button>
          </Link>
        </div>
      </div>

      <Progressbar />
      <OurValues />
    </div>
  );
}
