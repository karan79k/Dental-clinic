import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GetInTouch() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const leftToCenter = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightToCenter = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      {/* <InfiniteWordsStripe/> */}
      <div
      ref={ref}
      className="bg-black min-h-screen  flex flex-col items-center justify-center text-white relative overflow-hidden">
      
      <motion.h2
        style={{ x: leftToCenter, opacity }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[56px]"
      >
        Stay in touch
      </motion.h2>

      <motion.h2
        style={{ x: rightToCenter, opacity }}
        // className="bg-[linear-gradient(180deg,_rgba(255,207,242,1)_0%,_rgba(151,125,255,1)_30%,_rgba(0,51,255,1)_100%)] bg-clip-text text-transparent absolute top-[30%] left-1/2 -translate-x-1/2 whitespace-nowrap "
        className="text-[56px] text-gradient-custom bg-clip-text text-transparent absolute top-[30%] left-1/2 -translate-x-1/2 whitespace-nowrap "
      >
        Join our Community
      </motion.h2>

      <div className="mt-[160px] w-full max-w-xl text-center">
        <p className="text-gray-300 mb-6 text-[16px]">
          Don&apos;t worry — we won&apos;t spam you with countless emails or texts.
          Stay in touch and receive VIP offers and first-access to our events!
        </p>

        {/* <div className="p-6 rounded-lg shadow-lg">   */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[360px] h-[40px] px-4 rounded-[8px] font-light text-[16px] text-white outline focus:ring-2 focus:ring-violet-500"
            />
            <button className="bg-primary text-[16px] fonr-light text-white w-[104px] h-[42px] px-[3px] py-[4px] rounded-md hover:bg-violet-600 transition">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-[16px]">
            By clicking Sign Up you&apos;re confirming that you agree with our Terms
            and Conditions.
          </p>
        {/* </div> */}
      </div>
    </div>
    </div>
  );
}



const words = ['Experts', 'Artists', 'Leaders'];

export function InfiniteWordsStripe() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Half move from left to right
  // const xLeft = useTransform(scrollYProgress, [0, 1], ['-100%', '0%']);
  // Half move from right to left
  // const xRight = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);

  const repeatedWords = Array.from({ length: 50 }, () => words).flat();
  const speed = useTransform(scrollYProgress, [0, 1], [0, -1000]); // pixels
  const smoothSpeed = useSpring(speed, {
    stiffness: 50,
    damping: 10,
  });

  return (
    <div ref={containerRef} className="overflow-hidden w-full bg-black py-2 relative">
      <div className="relative h-20 w-full flex items-center justify-center">
        {/* Left to center */}
        <motion.div
          className="absolute left-0 flex space-x-6 whitespace-nowrap"

          style={{ x: smoothSpeed }}
        >
          {repeatedWords.map((word, index) => (
            <span key={`left-${index}`} className="text-violet-500 text-2xl font-semibold">
              {word}
            </span>
          ))}
        </motion.div>

        {/* Right to center */}
        {/* <motion.div
          className="absolute right-0 flex space-x-6 whitespace-nowrap"
          style={{ x: xRight }}
        >
          {repeatedWords.map((word, index) => (
            <span key={`right-${index}`} className="text-violet-500 text-2xl font-semibold">
              {word}
            </span>
          ))}
        </motion.div> */}
      </div>
    </div>
  );
}


// const words = ['Experts', 'Artists', 'Leaders'];

// export function InfiniteWordsStripe() {
//   const repeatedWords = Array.from({ length: 20 }, () => words).flat();

//   return (
//     <div className="overflow-hidden whitespace-nowrap w-full bg-black py-4">
//       <motion.div
//         className="inline-block"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 20,
//           ease: "linear",
//         }}
//         style={{ display: "inline-flex" }}
//       >
//         {repeatedWords.map((word, index) => (
//           <h3
//             key={index}
//             className="text-violet-600 text-xl mx-6 inline-block font-semibold"
//           >
//             {word}
//           </h3>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
