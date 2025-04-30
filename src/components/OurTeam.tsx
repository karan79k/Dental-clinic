import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
      spacing: 30,
    },
    created(slider) {
      setInterval(() => {
        slider?.next();
      }, 3000);
    },
  });

  return (
    <section className="py-12 bg-gray-50 relative">
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
        <div ref={sliderRef} className="keen-slider px-8">
          {team.map((member, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="relative group w-[300px] h-[460px] overflow-hidden rounded-xl shadow-lg mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)] group-hover:scale-105"
                />

                {/* Hover Overlay Panel */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/95 via-white/60 to-transparent backdrop-blur-lg p-4 transform translate-y-full group-hover:translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.25, 1, 0.5, 1)] z-20 flex flex-col justify-center items-center text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-500 text-sm">{member.specification}</p>
                  <p className="text-gray-700 text-sm mt-1">{member.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute mt-10 right-6 flex gap-3 z-10">
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
