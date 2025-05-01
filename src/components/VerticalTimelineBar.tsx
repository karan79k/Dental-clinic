import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useTranslation } from 'react-i18next';

type TimelineItem = {
  id: number;
  yearKey: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
  button?: ReactNode;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    yearKey: 'timeline.founded.year',
    titleKey: 'timeline.founded.title',
    descriptionKey: 'timeline.founded.description',
  },
  {
    id: 2,
    yearKey: 'timeline.quality.year',
    titleKey: 'timeline.quality.title',
    descriptionKey: 'timeline.quality.description',
    image: "/Images/quality-clinic.jpg",
    button: <Button />
  },
  {
    id: 3,
    yearKey: 'timeline.vision.year',
    titleKey: 'timeline.vision.title',
    descriptionKey: 'timeline.vision.description',
    image: "/Images/vision-future.jpg",
    button: <Button />
  },
  {
    id: 4,
    yearKey: 'timeline.message.year',
    titleKey: 'timeline.message.title',
    descriptionKey: 'timeline.message.description',
  },
];

const VerticalScrollTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && timelineRef.current) {
        const container = containerRef.current;
        const containerTop = container.getBoundingClientRect().top;
        const containerHeight = container.offsetHeight;
        const viewportHeight = window.innerHeight;

        let progress = 0;

        if (containerTop <= 0) {
          progress = Math.min(
            Math.max(Math.abs(containerTop) / (containerHeight - viewportHeight), 0),
            1
          );
        }

        setScrollProgress(progress);

        const newActiveIndex = Math.min(
          Math.floor(progress * timelineData.length),
          timelineData.length - 1
        );

        if (newActiveIndex !== activeIndex) {
          setActiveIndex(newActiveIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const TimelineItem = ({ item, index }: { item: TimelineItem; index: number }) => {
    const isActive = index <= activeIndex;

    return (
      <div className="grid grid-cols-12 items-center my-24 md:my-32 relative">
        {/* Left Content */}
        <div className="col-span-5 pr-4 text-right">
          <div className={`text-xl md:text-3xl font-medium ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {t(item.yearKey)}
          </div>
        </div>

        {/* Center Marker */}
        <div className="col-span-2 flex justify-center items-center relative z-10">
          <motion.div
            className={`w-6 h-6 rounded-full border-4 ${isActive ? 'bg-blue-500 border-blue-300' : 'bg-gray-200 border-gray-300'}`}
          />
        </div>

        {/* Right Content */}
        <div className="col-span-5 pl-4 text-left ">
          <p className={`text-2xl font-normal  mb-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {t(item.titleKey)}
          </p>
          <p className={`font-extralight text-[15px] pr-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>{t(item.descriptionKey)}</p>

          <div className={`py-4 ${isActive ? '' : 'opacity-50 pointer-events-none'}`}>{item.button}</div>
          {item.image && (
            <img src={item.image} alt={t(item.titleKey)} className={`rounded-md transition-all duration-300 ${isActive ? '' : 'grayscale-25 opacity-60'}`} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-12" ref={containerRef}>
        <div className="relative">

          {/* Static Line */}
          {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gray-200 h-full rounded-full" /> */}

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 rounded-full origin-top"
            style={{
              height: `${scrollProgress * 100}%`,
              top: 0
            }}
            ref={timelineRef}
          />

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 border-4 border-white rounded-full shadow-lg"
            style={{
              top: `${scrollProgress * 100}%`,
              marginTop: -12
            }}
          />

          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollTimeline;
