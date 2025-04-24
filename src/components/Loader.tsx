
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden relative">
      <AnimatePresence>
        {loading && (
          <>
            {/* Black screen animation */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-black z-10"
            />

            <motion.div className="absolute z-20 flex items-center justify-center w-full h-screen">
              <div className="inline-flex items-baseline text-white text-4xl font-bold">
                <h1 className="mr-2 relative -top-2">Dental</h1>
                <div className="relative w-[300px] h-[62px] overflow-hidden">
                  <AnimatePresence mode="sync">
                    <motion.h1
                      key={currentText}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute top-0 left-0 w-full text-primary flex items-center"
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
