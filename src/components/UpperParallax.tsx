import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Button from "./Button";

const beforeImages = [
  "https://images.unsplash.com/photo-1525222285365-d6bfe94ec598?q=80",
  "https://images.unsplash.com/photo-1628619487925-e9b8fc4c6b08?q=80",
  "https://plus.unsplash.com/premium_photo-1708110769999-02be12f5930d?q=80",
  "https://plus.unsplash.com/premium_photo-1703382945684-60321c25f248?q=80",
  "https://images.unsplash.com/photo-1632874638128-c10ddbb9d51c?q=80"
];

const afterImages = [...beforeImages];

export default function ParallaxWithScrollAndInView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  function handleNavigation(dir: number) {
    setDirection(dir);
    setCurrentIndex((prev) => {
      const newIndex = prev + dir;
      if (newIndex < 0) return beforeImages.length - 1;
      if (newIndex >= beforeImages.length) return 0;
      return newIndex;
    });
  }

  return (
    <div className="relative w-full min-h-screen py-10 bg-white">
      <div className="h-screen py-20 grid grid-cols-1 md:grid-cols-2 container">

        {/* Text Section */}
        <div className="flex flex-col justify-center pr-[8rem]">
          <h3 className="mb-6 text-[56px]">Smile Makeovers that Change Lives</h3>
          <p className="text-gray-600 mb-8 text-[18px]">
            We pride ourselves on delivering exceptionally high levels of cosmetic dentistry to each patient that walks through our doors.
          </p>
          <Button />
        </div>

        {/* Image Section */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-lg">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="relative w-full h-full flex">
                <div className="w-1/2 h-full overflow-hidden">
                  <img
                    src={beforeImages[currentIndex]}
                    alt={`Before ${currentIndex}`}
                    className="object-cover w-full h-full brightness-75"
                  />
                </div>
                <div className="w-1/2 h-full overflow-hidden">
                  <img
                    src={afterImages[currentIndex]}
                    alt={`After ${currentIndex}`}
                    className="object-cover w-full h-full brightness-75"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => handleNavigation(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow text-xl"
          >
            ⬅
          </button>
          <button
            onClick={() => handleNavigation(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow text-xl"
          >
            ➡
          </button>
        </div>
      </div>
    </div>
  );
}

// Motion Variants for left/right transition
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0
  })
};
