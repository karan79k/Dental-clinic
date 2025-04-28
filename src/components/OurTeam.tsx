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
    image: "/Images/cd-4.png",
    name: "Dr Philip Church",
    specification: "Dentist",
    text: "Implants and Sedation",
  },
  {
    image: "/Images/cd-2.png",
    name: "Dr Jane Doe",
    specification: "Oral Surgeon",
    text: "Facial Reconstruction Expert",
  },
  {
    image: "/Images/cd-3.png",
    name: "Dr Alan Smith",
    specification: "Orthodontist",
    text: "Braces and Aligners",
  },
  {
    image: "/Images/cd-1.png",
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
        if (slider) {
          slider.next();
        }
      }, 2500); // autoplay like swiper
    },
  });

  return (
    <section className="py-12 pb-30 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex items-center shadow-gray-200 justify-between mb-10 -ml-7">
          <div>
            <p className="text-sm text-blue-600">Meet your dentist</p>
            <h2 className="text-4xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-gray-500 font-extralight text-[18px]">Experts in dental care</p>
          </div>
          <Link
            to="/our-doctors"
            className="flex items-center gap-1 text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800 group"
          >
            View All
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <ChevronRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        {/* Keen Slider Carousel */}
        <div ref={sliderRef} className="keen-slider pt-4">
          {team.map((member, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="w-full rounded-xl overflow-hidden text-right">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto p-0 mb-2 rounded-lg w-80 object-cover"
                />
                <div className="pr-6 leading-tight">
                  <h3 className="text-xl font-semibold text-gray-800 -mb-2">{member.name}</h3>
                  <p className="text-blue-400">{member.specification}</p>
                  <p className="text-gray-400 text-sm">{member.text}</p>
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
