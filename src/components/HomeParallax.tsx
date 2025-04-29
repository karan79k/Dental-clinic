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
        className="sticky top-0 h-[80vh] flex flex-col justify-center items-center text-center px-4 pt-12"
      >
       <div>
       <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="animate-gradient mb-4"
  >
    {/* First line: Enhanced brightness with lighter colors */}
    <span className="bg-gradient-to-b from-[#2f886c] via-[#c0dbdf] to-[#ffffff] bg-[length:300%] bg-clip-text text-transparent  text-[60px]">
      Brighten Your Smile
    </span>
    <br />
    <span className="bg-gradient-to-b from-[#59bb9f] via-[#92d4e2] to-[#bff0ed] bg-[length:300%] bg-clip-text text-transparent text-[60px]">
      Brighten Your Day
    </span>
  </motion.h1>

</div>
        <p className="text-[#ffffffe0] text-[18px] font-normal-200 mb-4">
          Our philosophy is built on providing the world's best cosmetic dental care, uniquely tailored to <br/> the individual.
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

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
      scale,
      }}
    >
      <motion.video
      src="/video-2.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-[82vw] h-[82vh] object-cover rounded-3xl"
      style={{
        boxShadow:
        "0 0 300px 180px rgba(26, 184, 179, 0.38), 0 0 480px 240px rgba(191, 240, 237, 0.18)",
        filter: "blur(0.5px)",
      }}
      />
    </motion.div>
  );
}