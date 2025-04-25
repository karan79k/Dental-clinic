import { useRef } from "react";
import { motion, useInView, useScroll, useTransform,easeIn } from "framer-motion";
import Button from "./Button";

const img = "https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Book() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-20%" // Adjusted margin for smoother trigger
  });

  // Add scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create smooth transforms
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.9, 1, 0.95],
    { ease: easeIn }
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
    { ease: easeIn }
  );

  return (
    <motion.div 
      ref={ref}
      className="bg-slate-100 h-[80vh] w-full flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        style={{ scale, opacity }}
        transition={{ 
          duration: 1.2,
          ease: [0.32, 0.72, 0, 1],
          opacity: { duration: 0.8 },
          scale: { duration: 1.2 }
        }}
        className="h-[350px] w-[85vw] relative"
      >
        <motion.img 
          src={img} 
          alt="img" 
          className="w-full h-full object-cover rounded-2xl shadow-gradient-custom"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
        />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/60 text-white p-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.32, 0.72, 0, 1]
          }}
        >
          <h3 className="mb-4 text-center text-[56px]">Book an appointment today</h3>
          <p className="mb-4 text-center text-[18px]">
            Start your smile journey at Millersneuk Dental Practice, Lenzie.
          </p>
          <Button />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
