import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

const data = [
  {
    category: "Dermatology Department",
    title: "Face and eyebrow bleaching session",
    src: "/Images/department-1.png",
  },
  {
    category: "Productivity",
    title: "Laser session for one area of ​​your choice (underarms - chin) + Touch Ups",
    src: "/Images/department-2.png",
  },
  {
    category: "Product",
    title: "Dermapen session + mesotherapy for skin freshness and tightening + mesotherapy for lip augmentation",
    src: "/Images/department-3.png",
  },
];

export default function OurTreatmentsSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % data.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + data.length) % data.length);

  const prevIndex = (current - 1 + data.length) % data.length;
  const nextIndex = (current + 1) % data.length;

  const imageClasses = "absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl";
  
  // New transition settings for smoother movement
  const transition = { 
    duration: 0.7, 
    ease: "easeInOut", 
    stiffness: 100, 
    damping: 25 
  };

  return (
    <div className="h-[130vh] bg-black flex items-center justify-center sm:pb-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        {/* Text Side */}
        <div className="space-y-8 flex flex-col justify-center text-left relative h-full">
          <div className="mt-28">
            <h4 className="text-[#1ab8b3] text-[18px] mb-4 font-medium">Our Treatments</h4>
            <h3 className="text-white text-4xl font-bold tracking-wide drop-shadow-lg">
              {data[current].category}
            </h3>
            <p className="text-white/80 text-lg mt-8 mr-40 leading-relaxed">
              {data[current].title}
            </p>
          </div>
          {/* Navigation - moved outside of changing content */}
          <div className="mt-auto flex space-x-4 z-50">
            <button
              onClick={prevSlide}
              className="p-4 text-3xl border bg-slate-50/10 text-white rounded-full hover:bg-slate-50/20"
              aria-label="Previous"
            >
              <MdKeyboardArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 text-3xl border bg-slate-50/10 text-white rounded-full hover:bg-slate-50/20"
              aria-label="Next"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative w-[90%] max-w-lg h-[550px] mx-auto flex items-end">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Left Image */}
            <motion.img
              key={`left-${prevIndex}`}
              src={data[prevIndex].src}
              alt="Previous"
              className={`${imageClasses} z-10`}
              initial={{ opacity: 0, scale: 0.8, x: "-10%" }}
              animate={{ opacity: 0.4, scale: 0.9, rotate: -10, x: "-10%" }}
              exit={{ opacity: 0, scale: 0.8, x: "-15%" }}
              transition={transition}
            />

            {/* Center Image */}
            <motion.img
              key={`center-${current}`}
              src={data[current].src}
              alt="Current"
              className={`${imageClasses} z-20 shadow-2xl`}
              initial={{ opacity: 0, scale: 0.9, x: "0%" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, x: "0%" }}
              exit={{ opacity: 0, scale: 0.9, x: "0%" }}
              transition={transition}
            />

            {/* Right Image */}
            <motion.img
              key={`right-${nextIndex}`}
              src={data[nextIndex].src}
              alt="Next"
              className={`${imageClasses} z-10`}
              initial={{ opacity: 0, scale: 0.8, x: "10%" }}
              animate={{ opacity: 0.4, scale: 0.9, rotate: 10, x: "10%" }}
              exit={{ opacity: 0, scale: 0.8, x: "15%" }}
              transition={transition}
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent rounded-b-xl flex items-end justify-center z-30">
              <div className="text-white text-2xl font-normal mb-6">
                {data[current].category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
