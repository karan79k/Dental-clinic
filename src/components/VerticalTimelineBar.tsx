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
    year: '2008',
    title: 'Company Founded',
    description: 'Quality Clinics is a Saudi institution based in Mecca. Established in 2008, it has six branches in Mecca and Jeddah. These clinics specialize in providing the best medical services in various dental, dermatology, and cosmetic specialties. It is distinguished by the presence of an elite group of skilled and experienced doctors, under the supervision of the orthodontist and maxillofacial consultant, Dr. Muhammad Sulaiman Baghrib, who is ranked first in the Kingdom in Invisalign orthodontics according to the official Invisalign website, and who obtained the German Board in Dentistry in 1992, in addition to the German Board in Orthodontics in 1998.',
  },
  {
    id: 2,
    year: '2021',
    title: 'Why Quality ?',
    description: "At Quality Dental and Dermatology Clinics, we are distinguished by our over twenty years of experience in providing the best medical services in various dental, dermatology, and cosmetic specialties. We utilize the latest medical technology and equipment, along with the finest materials and tools, to ensure a healthy and satisfying smile for our clients. We are distinguished by the presence of an elite group of skilled, competent and experienced doctors, and the presence of specialists in various dental specialties: Children's Dentistry - Prosthodontics - Root Canal Treatment - Orthodontics; under the supervision of orthodontic consultant Dr. Mohammed Baghraib, ranked number one in the Kingdom for Invisalign braces. We also offer cosmetic services in the fields of dermatology, cosmetology, and laser, using specialized laser techniques and skin and hair treatment to achieve the best results for our clients, offering the highest levels of luxury and elegance they deserve.",
    image:"https://plus.unsplash.com/premium_photo-1674179008328-c201db47a0bb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button:<Button/>
  },

  {
    id: 3,
    year: '2023',
    title: 'Vision',
    description: 'To be the first choice for those seeking accurate diagnosis and quality treatment in a safe, sterile environment, under the care of expert hands, and using the latest technologies. Quality is the primary standard for our services, not an optional extra.',
    image:"https://plus.unsplash.com/premium_photo-1681997162401-a65011496a7c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button:<Button/>

  },
  {
    id: 4,
    year: 'Our message',
    title: 'Our message',
    description: 'We strive to satisfy our clients, meet all their needs under one roof, and provide them with the highest levels of healthcare. We ensure that healthcare meets the latest international standards and is delivered using the latest technology under the supervision of a team of consultants and specialists from international universities.',

  },
  // {
  //   id: 5,
  //   year: '2025',
  //   title: 'New Headquarters',
  //   description: 'Moved into our new sustainable headquarters designed to foster collaboration and creativity.',
  //   image:"https://plus.unsplash.com/premium_photo-1681997162401-a65011496a7c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   button:<Button/>
  // },
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
          <p className={`text-2xl font-normal  mb-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>
            {item.title}
          </p>
          <p className={`font-extralight text-[15px] pr-2 ${isActive ? 'text-white' : 'text-gray-900'}`}>{item.description}</p>

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
