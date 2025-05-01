import { motion } from "framer-motion";

type NormalCardProps = {
  image: string;
  name: string;
  specification: string;
  text: string;
  isArabic: boolean;
};

export default function NormalCard({ image, name, specification, text,  }: NormalCardProps) {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        className="aspect-[3/4] w-full rounded-xl mt-10 overflow-hidden relative group"
        initial="initial"
        whileHover="hover"
      >
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-md object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay Panel */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[37%] z-20"
          variants={{
            initial: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-md p-4 rounded-t-2xl flex flex-col justify-start items-start text-center">
            <motion.div
              className="w-full"
              variants={{
                initial: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
            >
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
              <p className="text-blue-500 text-sm mt-1">{specification}</p>
              <p className="text-gray-700 text-xs mt-1">{text}</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
