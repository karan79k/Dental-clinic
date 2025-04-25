/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";

const beforeImages = [
  "https://images.unsplash.com/photo-1525222285365-d6bfe94ec598?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1628619487925-e9b8fc4c6b08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1708110769999-02be12f5930d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1703382945684-60321c25f248?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1632874638128-c10ddbb9d51c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
];

const afterImages = [
  "https://images.unsplash.com/photo-1525222285365-d6bfe94ec598?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1628619487925-e9b8fc4c6b08?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1708110769999-02be12f5930d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://plus.unsplash.com/premium_photo-1703382945684-60321c25f248?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1632874638128-c10ddbb9d51c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3"
];

export default function ParallaxWithScrollAndInView() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0.9, 1], ["-10%", "-20%"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[500vh] py-10 ">
      <div className="sticky top-0 h-screen py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 h-full w-full">
          
          {/* Text Section */}
          <div className="flex flex-col sticky top-0 h-screen py-10 pr-[8rem]">
            <h3 className="mb-6 text-[56px]">Smile Makeovers that Change Lives</h3>
            <p className="text-gray-600 mb-8 text-[]">
              We pride ourselves on delivering exceptionally high levels of cosmetic dentistry to each patient that walks through our doors.
            </p>
            <Button />
          </div>

          {/* Parallax Images */}
          <div className="relative h-screen col-span-1">
            <motion.div
              style={{ y }}
              className="sticky top-0 h-screen w-full overflow-hidden"
            >
              {beforeImages.map((_, index) => (
                <SlideImage
                  key={index}
                  index={index}
                  total={beforeImages.length}
                  beforeSrc={beforeImages[index]}
                  afterSrc={afterImages[index]}
                  scrollYProgress={scrollYProgress}
                  isFirst={index === 0}
                  isLast={index === beforeImages.length - 1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideImage({
  beforeSrc,
  afterSrc,
  index,
  total,
  scrollYProgress,
  isFirst,
}: {
  beforeSrc: string;
  afterSrc: string;
  index: number;
  total: number;
  scrollYProgress: any;
  isFirst: boolean;
  isLast: boolean;
}) {
  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;

  const y = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    ["100%", "0%"]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        y: isFirst ? "0%" : y,
        zIndex: index,
      }}
    >
      <div className="pt-4 w-full h-full flex items-center justify-center">
        <div className="relative w-[120%] h-[90%] rounded-2xl overflow-hidden">
          {/* Left Image */}
          <div className="absolute inset-0 w-1/2 overflow-hidden">
            <img
              src={beforeSrc}
              alt={`Before ${index}`}
              className="object-cover w-full h-full brightness-75 transition-transform duration-300"
            />
          </div>
          {/* Right Image */}
          <div className="absolute inset-0 left-1/2 w-1/2 overflow-hidden">
            <img
              src={afterSrc}
              alt={`After ${index}`}
              className="object-cover w-full h-full brightness-75 transition-transform duration-300"
            />
          </div>
        
        </div>
      </div>
    </motion.div>
  );
}
