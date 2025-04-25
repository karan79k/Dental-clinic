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
    {/* First line: Enhanced brightness with lighter colors */}
    <span className="bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(125,226,197,0.7)] text-[56px]">
      Brighten Your Smile
    </span>
    <br />
    <span className="bg-gradient-to-b from-[#59bb9f] via-[#92d4e2] to-[#bff0ed] bg-[length:300%] bg-clip-text text-transparent drop-shadow-[0_0_0px_rgba(125,226,197,0.7)] text-[56px]">
      Brighten Your Day
    </span>
  </motion.h1>

</div>
        <p className="text-white text-[16px] font-light  mb-4">
          Our philosophy is built on providing the world's best cosmetic dental care, uniquely tailored to the individual.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 border text-[14px] sm:text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300   hover:border-opacity-70 cursor-pointer"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
      <div className="sticky top-0 h-screen -mt-[3rem] ">
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
      className="absolute inset-0 flex items-center justify-center "
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
        className=" w-[82vw] h-[82vh] object-cover rounded-3xl shadow-gradient-custom"
      />
    </motion.div>
  );
}