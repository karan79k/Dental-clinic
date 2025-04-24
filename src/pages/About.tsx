import Book from "../components/Book";
import GetInTouch from "../components/GetInTouch";
import { motion } from "framer-motion";
import TeamCarousel from "../components/TeamCarousel";
import Progressbar from "../components/Progressbar";

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header */}
      


      <div className="relative h-[70vh] sm:h-screen overflow-hidden">
        <video
          src="video-2.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Text on Video */}
        <div className="absolute inset-0 z-20 flex flex-col justify-start sm:justify-center px-8 top-1/2 sm:top-0">
          <motion.h1
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white mb-6"
          >
            Leaders in Cosmetic Dentistry
          </motion.h1>

          {/* <button
          className="p-4 text-white rounded-md font-semibold w-[180px]"
          style={{
            background:
              'linear-gradient(141deg, rgba(255, 207, 242, 1) 0%, rgba(151, 125, 255, 1) 30%, rgba(0, 51, 255, 1) 100%)',
          }}
        >
          Contact Us
        </button> */}

        <button className="bg-gradient-custom p-4 text-white rounded-md font-semibold w-[180px]">
            Contact Us
        </button>
        </div>
      </div>

      <Progressbar/>
      {/* Other Sections */}
      <Book />
      <GetInTouch />
      
    </div>
  );
}
