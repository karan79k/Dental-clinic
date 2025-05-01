import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const projects = [
  "https://images.unsplash.com/photo-1525222285365-d6bfe94ec598?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1628619487925-e9b8fc4c6b08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1708110769999-02be12f5930d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1703382945684-60321c25f248?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1632874638128-c10ddbb9d51c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
];

export default function ServicesSlides() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Create background color transition from white to black
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.04, 0.2],
    ['#ffffff', '#222222', '#000000']
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full min-h-[500vh] py-32 transition-colors duration-700"
      style={{ backgroundColor }}
    >
      <div className={`left-0 w-full flex flex-col items-center justify-center z-10 ${
        isArabic ? 'text-right' : 'text-left'
      }`}>
        <h3 className="text-black dark:text-white text-[42px] font-bold">
          {t('practice.title')} <span className='text-primary'>{t('practice.highlight')}</span>
        </h3>
        <p className="pt-2 w-1/2 text-center text-gray-600 dark:text-gray-300">
          {t('practice.description')}
        </p>
      </div>

      <div className='relative w-full min-h-[500vh] py-8 mb-12'>
        <div className="sticky top-0 h-[90vh] overflow-hidden">
          {projects.map((ele, idx) => (
            <PrallaxSlide
              key={idx}
              src={ele}
              index={idx}
              scrollYProgress={scrollYProgress}
              totalImages={projects.length}
              isFirst={idx === 0}
              path={`/projects`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PrallaxSlide({ src, index, scrollYProgress, totalImages, isFirst, path }: {
  src: string;
  index: number;
  scrollYProgress: any;
  totalImages: number;
  isFirst: boolean;
  path: string;
}) {
  const start = index / totalImages;
  const end = (index + 1) / totalImages;

  const x = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{
        x: isFirst ? '0%' : x,
        opacity: isFirst ? 1 : opacity,
      }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center pt-20"
    >
      <Link to={path}>
        <motion.img
          src={src}
          alt="img"
          className="object-cover w-[95vw] lg:w-[85vw]  sm:h-screen md:h-[80vh] lg:h-[80vh] rounded-2xl brightness-70"
        />
      </Link>
    </motion.div>
  );
}
