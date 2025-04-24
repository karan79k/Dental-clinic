import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "./Button";

const img = "https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Book() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      className="bg-slate-100 h-[80vh] w-full flex justify-center items-center">
      <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay:0.3 }}
      className=" h-[350px] w-[85vw] relative">
        {/* <img src={img} alt="img" className="w-full h-full object-cover rounded-2xl shadow-[0_25px_60px_rgba(79,70,229,0.7)]" /> */}
        <img src={img} alt="img" className="w-full h-full object-cover rounded-2xl shadow-gradient-custom " />
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-black/60 text-white p-4 z-10">
          <h3 className="mb-4 text-center">Book an appointment today</h3>
          <p className="mb-4 text-center ">Start your smile journey at Millersneuk Dental Practice, Lenzie.</p>
          <Button/>
        </div>
      </motion.div>
    </motion.div>
  );
}
