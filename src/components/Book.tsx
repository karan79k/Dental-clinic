import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";

const img =
  "https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Book() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // Trigger animation only once
    margin: "-20%", // Adjusted margin for smoother trigger
  });

  return (
    <motion.div
      ref={ref}
      className="bg-slate-100 h-[80vh] w-full flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} // Start smaller with reduced opacity
        animate={isInView ? { opacity: 1, scale: 1 } : {}} // Grow to full size
        transition={{
          duration: 1.5, // Increased duration for smoother animation
          ease: [0.25, 0.8, 0.25, 1], // Smoother easing curve
        }}
        className="h-[350px] w-[85vw] relative"
      >
        <motion.img
          src={img}
          alt="img"
          className="w-full h-full object-cover rounded-2xl shadow-gradient-custom"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/60 text-white p-4 z-10"
          initial={{ opacity: 0, y: 30 }} // Slightly larger y-offset for smoother entry
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.2, // Increased duration for smoother fade-in
            delay: 0.3, // Added delay for staggered effect
            ease: [0.25, 0.8, 0.25, 1], // Smoother easing curve
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
