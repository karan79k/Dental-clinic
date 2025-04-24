import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

type TimelineItem = {
  id: number;
  year: string;
  title: string;
  description: string;
  image?:string;
  button?:ReactNode;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2020',
    title: 'Company Founded',
    description: 'Our journey began with a small team and a big vision to transform the industry.',
  },
  {
    id: 2,
    year: '2021',
    title: 'Product Launch',
    description: 'After months of development, we launched our flagship product to critical acclaim.',
    image:"https://plus.unsplash.com/premium_photo-1674179008328-c201db47a0bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button:<Button/>
  },
  {
    id: 3,
    year: '2022',
    title: 'International Expansion',
    description: 'We expanded our operations to Europe and Asia, establishing new offices in key markets.',

  },
  {
    id: 4,
    year: '2023',
    title: 'Major Partnership',
    description: 'Formed strategic alliance with leading industry players to enhance our product ecosystem.',
    image:"https://plus.unsplash.com/premium_photo-1681997162401-a65011496a7c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button:<Button/>

  },
  {
    id: 5,
    year: '2024',
    title: 'Innovation Award',
    description: 'Received industry recognition for our groundbreaking approach and technological innovations.',

  },
  {
    id: 6,
    year: '2025',
    title: 'New Headquarters',
    description: 'Moved into our new sustainable headquarters designed to foster collaboration and creativity.',
    image:"https://plus.unsplash.com/premium_photo-1681997162401-a65011496a7c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button:<Button/>
  },
];

const VerticalScrollTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    // const isCurrentlyActive = index === activeIndex;

    return (
      <div className="grid grid-cols-12 items-center my-24 md:my-32 relative">
        {/* Left Content */}
        <div className="col-span-5 pr-4 text-right">
          <div className={`text-xl md:text-3xl font-medium ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {item.year}
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
          <p className={`text-2xl font-semibold  mb-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {item.title}
          </p>
          <p className={`text-gray-600 text-xs md:text-xl ${isActive ? 'text-white' : 'text-gray-900'}`}>{item.description}</p>

          <div className={`py-4 ${isActive ? '' : 'opacity-50 pointer-events-none'}`}>{item.button}</div>
          {item.image && (
            <img src={item.image} alt={item.title} className={`rounded-md transition-all duration-300 ${isActive ? '' : 'grayscale-25 opacity-60'}`} />
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
