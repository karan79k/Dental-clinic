/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LiaStarSolid } from "react-icons/lia";
import Button from "./Button";

const testimonials = [
  {
    text: "First implant, absolutely delighted with the result and the treatment was painless.<br/> Would highly recommend the practice, Mr Church, Yvonne and the staff, who are all highly professional.Thank you for getting my smile back!",
    author: "Sandra Jamieson Implant Patient",
  },
  {
    text: "I was very worried about having to get dental work done so much so didn't think it would be possible. Amazed at how well the process has been with sedation. Mr Church has been fab and reassuring. Absolutely no problems . Big thanks to Yvonne as well.",
    author: "Christine Tennant Implant Patient",
  },
  {
    text: "I was never happy with my teeth and felt like the edges were not even. I wanted an improvement but did not want any damage to my own teeth. Since I have had composite bonding done, my confidence has increased so much. I get so many compliments on my teeth now. Thank you so much!",
    author: "Mhairi Mclean Invisalign & Composite Bonding Patient",
  },
  {
    text: "This is an excellent practice! Nothing is too much trouble to any one of the members of staff here. <br/> I can highly recommend Millersneuk Dental Practice!",
    author: "Janice Reid Denplan Patient",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Changed for better parallax effect
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[200vh] bg-black/80 "
    >
      <div className="container sticky top-0 h-screen overflow-hidden">
        <div className=" grid grid-cols-1 md:grid-cols-2 h-full ">
          <div className="flex flex-col justify-center sticky top-0 h-screen border-violet-600 ">
            <h3 className="mb-6 text-white">Patient Testimonials</h3>
            <p className=" text-white text-shadow-md mb-8 ">
              We've built a reputation on going the extra mile for our patients.
              For us, it's always about you and treating every patient
              individually.
            </p>
            {/* <button className="bg-violet-500 text-white px-6 py-3 rounded-md hover:bg-violet-600 transition w-fit">
              Book Appointment
            </button> */}
            <Button />
          </div>

          {/* Right content - parallax testimonials */}
          <div className="relative h-screen">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonial={testimonial}
                  index={index}
                  total={testimonials.length}
                  scrollYProgress={scrollYProgress}
                  isFirst={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
  total,
  scrollYProgress,
  isFirst,
}: {
  testimonial: { text: string; author: string };
  index: number;
  total: number;
  scrollYProgress: any;
  isFirst: boolean;
}) {
  const sectionStart = index / total;
  const sectionEnd = (index + 1) / total;

  const y = useTransform(
    scrollYProgress,
    [sectionStart, sectionEnd],
    ["80%", "2%"]
  );

  // const opacity = useTransform(
  //   scrollYProgress,
  //   [sectionStart - 0.1, sectionStart, sectionEnd, sectionEnd + 0.1],
  //   [0, 1, 1, 0]
  // );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center "
      style={{
        top: index * 50,
        y: isFirst ? "0%" : y,
        zIndex: index,
      }}
    >
      <div className="w-full mx-auto bg-[#0f172a] border-primary rounded-2xl shadow-xl p-8 text-white">
        {/* Layered card effect */}
        {/* <div className="absolute top-2 left-2 w-full h-full border-2 border-violet-500 rounded-2xl opacity-60 z-[-1]"></div> */}
        {/* <div className="absolute top-4 left-4 w-full h-full border-2 border-violet-500 rounded-2xl opacity-30 z-[-2]"></div> */}

        {/* Stars */}
        <div className="flex mb-6 text-secondary">
          {[...Array(5)].map((_, i) => (
            <LiaStarSolid key={i} className="text-secondary size-8" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p
          className="text-white mb-4"
          dangerouslySetInnerHTML={{ __html: testimonial.text }}
        />

        {/* Author */}
        <p className=" text-primary">— {testimonial.author}</p>
      </div>
    </motion.div>
  );
}
