import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowRight } from "lucide-react"; // optional for arrow icon, or use SVG

const teamMembers = [
  {
    name: "Dr. Philip Church",
    role: "Dentist",
    specialty: "Owner | Implants & Sedation",
    image: "/images/philip.png",
  },
  {
    name: "Dr. Lindsey Church",
    role: "Dentist",
    specialty: "Orthodontics",
    image: "/images/lindsey.png",
  },
  {
    name: "Dr. Jonathan Fitzpatrick",
    role: "Dentist",
    specialty: "Smile Makeovers",
    image: "/images/jonathan.png",
  },
  // Add more if needed
];

export default function TeamCarousel() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold"
          >
            Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-500"
          >
            Experts in dental care
          </motion.p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          View All <ArrowRight size={18} />
        </motion.button>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <p className="text-gray-800 text-sm mt-1">{member.specialty}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
