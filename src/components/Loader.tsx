import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const loadingTexts = ["Artists", "Experts", "Leaders", "Visionaries"];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden relative">
      <AnimatePresence>
        {loading && (
          <>
            {/* Vertical lines */}
            <div className="absolute top-0 left-0 w-full h-full z-30 flex">
              <div className="flex-1 border-r border-gray-700"></div>
              <div className="flex-1 border-r border-gray-700"></div>
              <div className="flex-1 border-r border-gray-700"></div>
              <div className="flex-1"></div>
            </div>

            {/* Text */}
            <motion.div className="absolute z-40 flex items-center justify-center w-full h-screen">
              <div className="inline-flex items-baseline text-white text-4xl font-bold">
                <h1 className="ml-34 relative -top-2">Dental</h1>
                <div className="relative ml-4 w-[300px] h-[62px] overflow-hidden">
                  <AnimatePresence mode="sync">
                    <motion.h1
                      key={currentText}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full text-primary flex items-center text-indigo-400"
                    >
                      {loadingTexts[currentText]}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
