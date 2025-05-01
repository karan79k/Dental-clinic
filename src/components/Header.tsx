import { useEffect, useState, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo3D from "./Logo3D";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from 'react-i18next';
import LanguageToggleButton from "./LanguageToggleButton";

export default function Header() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  const navLinks = [
    { to: "/about", labelKey: 'navigation.about' },
    { to: "/contact", labelKey: 'navigation.contact' },
    { to: "/our-doctors", labelKey: 'navigation.ourDoctors' },
  ];

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > lastScroll && latest > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScroll(latest);
    });
  }, [scrollY, lastScroll]);

  const gradientClass = "bg-gradient-to-r from-[#77e5e0] to-[#77e5e0] bg-clip-text text-transparent brightness-100";
  const hoverClass = "hover:bg-gradient-to-r hover:from-[#77e5e0] hover:to-[#1AB8B3] hover:bg-clip-text hover:text-transparent transition-colors duration-300 hover:brightness-150";

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`bg-black text-white w-full sticky top-0 z-50`}
      dir="ltr" // Force LTR layout for header
    >
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center justify-center h-12">
            <Suspense fallback={<div className="w-24 h-12 flex items-center justify-center">
              <span className="text-[#1AB8B3] text-2xl font-bold">QC</span>
            </div>}>
              <Logo3D />
            </Suspense>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-[16px] font-semibold-500">
            {navLinks.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                className={`${hoverClass} ${location.pathname === nav.to ? gradientClass : ""}`}
              >
                {t(nav.labelKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggleButton />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 bg-gradient-custom cursor-pointer text-white font-normal rounded-md w-[200px]"
          >
            {t('navigation.bookAppointment')}
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
          {navLinks.map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              onClick={() => setIsOpen(false)}
              className={`${hoverClass} ${location.pathname === nav.to ? gradientClass : ""}`}
            >
              {t(nav.labelKey)}
            </Link>
          ))}
          <Link to={"#"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 border text-[16px] border-[#1ab8b3] text-white rounded-md hover:bg-[#1ab8b3]/20 transition-all duration-300 w-[200px] hover:border-opacity-70 cursor-pointer"
            >
              {t('navigation.bookAppointment')}
            </motion.button>
          </Link>
        </div>
      )}
    </motion.header>
  );
}
