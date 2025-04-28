import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  image: string;
  name: string;
  specificaiton: string;
  text: string;
}

const team: TeamMember[] = [
  {
    image: "/Images/cd-4.png",
    name: "Dr Philip Church",
    specificaiton: "Dentist",
    text: "Implants and Sedation",
  },
  {
    image: "/Images/cd-2.png",
    name: "Dr Jane Doe",
    specificaiton: "Oral Surgeon",
    text: "Facial Reconstruction Expert",
  },
  {
    image: "/Images/cd-3.png",
    name: "Dr Alan Smith",
    specificaiton: "Orthodontist",
    text: "Braces and Aligners",
  },
  {
    image: "/Images/cd-1.png",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
];

export default function TeamCarousel() {
  return (
    <section className="py-12  pb-30 bg-gray-50 ">
      <div className="max-w-6xl mx-17 relative ">
        {/* Header */}
        <div className="flex items-center shadow-gray-200 justify-between mb-8">
          <div>
            <p className="text-sm -mb-4 text-blue-600">Meet your dentist</p>
            <h2 className="text-3xl font-semibold text-gray-800">Our Team</h2>
            <p className="text-gray-500 font-extralight text-[16px] -mt-[6px]">Experts in dental care</p>
          </div>
            <a
            href="/our-doctors"
            className="flex items-center gap-1 text-blue-600 font-medium transition-colors duration-200 hover:text-blue-800 group"
            >
            View All
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              <ChevronRight className="w-5 h-5" />
            </span>
            </a>
        </div>

        

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{
            delay: 2500,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pt-4"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="w-full rounded-xl  overflow-hidden  text-right">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto p-0 mb-2 rounded-lg w-80 object-cover"
                />
              <div className="pr-6 leading-tight">
                <h3 className="text-xl font-semibold text-gray-800 -mb-2">{member.name}</h3>

                <p className=" text-blue-400">{member.specificaiton}</p>
                <p className="text-gray-400 text-sm">{member.text}</p>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Navigation Arrows */}
      <div className="absolute mt-10  right-38 flex gap-3 z-10">
        <button className="swiper-button-prev-custom bg-white shadow-md p-2 rounded-full">
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button className="swiper-button-next-custom bg-white shadow-md p-2 rounded-full">
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
