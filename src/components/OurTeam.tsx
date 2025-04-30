import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  image: string;
  name: string;
  specification: string;
  text: string;
}

const team: TeamMember[] = [
  {
    image: "/Images/cd-1.jpg",
    name: "Dr Philip Church",
    specification: "Dentist",
    text: "Implants and Sedation",
  },
  {
    image: "/Images/cd-2.jpg",
    name: "Dr Jane Doe",
    specification: "Oral Surgeon",
    text: "Facial Reconstruction Expert",
  },
  {
    image: "/Images/cd-3.jpg",
    name: "Dr Alan Smith",
    specification: "Orthodontist",
    text: "Braces and Aligners",
  },
  {
    image: "/Images/cp-1.jpg",
    name: "Dr Nina Patel",
    specification: "Prosthodontist",
    text: "Crowns and Implants",
  },
];

export default function TeamCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: -60,
    },
    created(slider) {
      setInterval(() => {
        slider?.next();
      }, 5000);
    },
  });

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50 relative w-full min-h-100 pb-40">
      <div className="max-w-8xl mx-auto relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 px-8">
          <div className="px-9">
            <p className="text-sm text-blue-600">Meet your dentist</p>
            <h2 className="text-4xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-gray-500 font-extralight text-[18px]">Experts in dental care</p>
          </div>
          <Link
            to="/our-doctors"
            className="flex items-center gap-1 px-8 text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800 group"
          >
            View All
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {team.map((member, index) => (
            <div key={index} className="keen-slider__slide">
              <motion.div
                className="relative w-[360px] h-[540px] overflow-hidden rounded-2xl shadow-xl mx-auto group"
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Animated Overlay Panel */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-30% z-20"
                  initial={{ y: "100%" }}
                  animate={{ y: hoverIndex === index ? "0%" : "100%" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-white/90 via-white/60 to-transparent backdrop-blur-md p-6 rounded-t-2xl flex flex-col items-start justify-start text-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoverIndex === index ? 1 : 0,
                        y: hoverIndex === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="w-full"
                    >
                      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-blue-500 text-base mt-1">{member.specification}</p>
                      <p className="text-gray-700 text-sm mt-2">{member.text}</p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute mt-10 right-14 flex gap-3 z-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white shadow-md p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white shadow-md p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
