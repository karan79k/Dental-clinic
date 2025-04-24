/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

export default function HomeParallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh] bg-black">
      <motion.div
        className="sticky top-0 h-[80vh] flex flex-col justify-center items-center text-center px-4"
      >
       <div>
       <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="animate-gradient mb-4"
  >
    {/* First line: Smooth gradient from light blue to turquoise */}
    <span className="bg-gradient-to-r from-[#5e9de6] via-[#c0e9e7] to-[#1ab8b3] bg-[length:200%] bg-clip-text text-transparent">
      Brighten Your Smile
    </span>
    <br />
    {/* Second line: Deeper tones and elegant gradient design */}
    <span className="bg-gradient-to-r from-[#3671b9] via-[#cdd7fa] to-[#935cc2] bg-[length:200%] bg-clip-text text-transparent">
      Brighten Your Day
    </span>
  </motion.h1>

</div>
        <p className="text-white text-md font-light mb-6">
          Our philosophy is built on providing the world's best cosmetic dental care, uniquely tailored to the individual.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 border text-[14px] sm:text-[20px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300   hover:border-opacity-70 cursor-pointer"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
      <div className="sticky top-0 h-screen mt-[-8rem] ">
        <ParallaxImage scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function ParallaxImage({ scrollYProgress }: { scrollYProgress: any }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.26]);
  // const scale = useTransform(scrollYProgress, [0.6, 1], [1, 1.26]);

  //   const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1])

  // const translateY = useTransform(scrollYProgress , [0 , 1] , ["-25%" , "0%"])

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        scale,
        // y: translateY,
        // opacity,
      }}
    >
      <motion.video
        src="/video-2.mp4"
        autoPlay
        muted
        loop
        playsInline
        // className=" w-[80vw] h-[80vh] object-cover rounded-3xl shadow-[0_60px_140px_60px_rgba(151,125,255,0.45)]"
        className=" w-[100vw] h-[85vh] object-cover rounded-3xl shadow-gradient-custom"
      />
    </motion.div>
  );
}