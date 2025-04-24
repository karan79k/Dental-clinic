import { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo3D from "./Logo3D";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScroll(latest);
    });
  }, [scrollY, lastScroll]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-black text-white w-full sticky top-0 z-50"
    >
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center justify-center h-12">
            <Suspense
              fallback={
                <div className="w-24 h-12 flex items-center justify-center">
                  <span className="text-[#1AB8B3] text-2xl font-bold">QC</span>
                </div>
              }
            >
              <Logo3D />
            </Suspense>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm ml-10 font-medium">
            <Link to="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link to="/pricing" className="hover:text-primary transition">
              Pricing
            </Link>
            <Link to="/contact" className="hover:text-primary transition">
              Contact
            </Link>
            <Link to="/referals" className="hover:text-primary transition">
              Referrals
            </Link>
            <Link to="/our-doctors" className="hover:text-primary transition">
              Our doctors
            </Link>
            <Link to="/treaments" className="hover:text-primary transition">
              Treatments
            </Link>
          </nav>
        </div>

        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 bg-gradient-custom cursor-pointer text-white font-normal rounded-md w-[200px] "
          >
            Book Appointment
          </motion.button>
        </div>

        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-black">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400"
          >
            About
          </Link>
          <Link
            to="/pricing"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400"
          >
            Pricing
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400"
          >
            Contact
          </Link>
          <Link
            to="/referals"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400"
          >
            Referrals
          </Link>
          <Link
            to="/treaments"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400"
          >
            Treatments
          </Link>
          <Link to={"#"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300 w-[200px] hover:border-opacity-70 cursor-pointer"
            >
              Book Appointment
            </motion.button>
          </Link>
        </div>
      )}
    </motion.header>
  );
}
