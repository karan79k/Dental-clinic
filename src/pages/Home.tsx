/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react"
import { motion, useScroll, useTransform  } from "framer-motion"
import OurTreatmentsSlider from "../components/OurTreatmentsSlider"
import OurPractice from "../components/OurPractice"
import GetInTouch from "../components/GetInTouch"
import Book from "../components/Book"
// import BlogCards from "../components/BlogCards"
import UpperParallax from "../components/UpperParallax"
import Testimonials from "../components/Testimonials"
import OurTeam from "../components/OurTeam"
import HomeParallax from "../components/HomeParallax"
// import Button from "../components/Button"

export default function Home() {
  

  
  return (
    <div className="relative w-full ">
      {/* Header */}
      <HomeParallax/>
      <TextAnimation/>
      <OurTreatmentsSlider/>
      <UpperParallax/>
      <Testimonials/>
      <OurPractice/>
      <OurTeam/>
      {/* <BlogCards/> */}
      <Book/>
      <GetInTouch/>
    </div>
  )
}




const texts = [
  "Leaders in cosmetic dentistry",
  "State of the art modern clinic",
  "Redefining standards in patient care"
];

function TextAnimation() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // const isInView = useInView(containerRef, { amount: 0.3, once: true });

  return (
    <motion.div 
      ref={containerRef} 
      className="min-h-[400vh] relative"
      // initial={{ opacity: 0, y: 30 }}
      // animate={isInView ? { opacity: 1, y: 0 } : {}}
      // transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {texts.map((text, index) => (
            <TextBlock 
              key={index}
              text={text}
              index={index}
              total={texts.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TextBlock({
  text,
  index,
  total,
  scrollYProgress
}: {
  text: string;
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  const ref = useRef(null);
  // const isInView = useInView(ref, { amount: 0.3, once: true });

  const sectionStart = index / total;
  const sectionMid = sectionStart + 1 / total / 2;
  const sectionEnd = (index + 1) / total;

  const narrowStart = sectionMid - 0.07;
  const narrowEnd = sectionEnd + 0.07;

  const opacity = useTransform(
    scrollYProgress,
    [narrowStart, sectionMid, narrowEnd],
    [0, 1, 0]
  );



  // const y = useTransform(scrollYProgress, [sectionStart, sectionEnd], ["40%", "0%"]);

return (
  <motion.div
    ref={ref}
    className="absolute inset-0 flex items-start pt-[30vh] justify-center text-center"
    style={{
      opacity,
      zIndex: total - index,
    }}
  >
    <div className="w-1/2 flex-wrap text-start">
      <h2>
        {index === 0 ? (
          <>
            <span className="text-primary">Leaders</span> in cosmetic dentistry
          </>
        ) : index === 1 ? (
          <>
            State of the art <span className="text-primary">modern clinic </span>
          </>
        ) : index === 2 ? (
          <>
            <span className="text-primary">Redefining standards</span> in patient care
          </>
        ) : (
          text
        )}
      </h2>
    </div>
  </motion.div>
);
}