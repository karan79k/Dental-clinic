import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-[#77e5e0] via-[#1ab8b3] to-[#1a4578]">
      {/* SVG Overlay */}
      <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      fill="none"
      >
      <g className="g-overlays">
        <path
        d="M0,700 Q360,600 720,700 T1440,700 V900 H0 Z"
        fill="#fff"
        fillOpacity="0.08"
        />
        <path
        d="M0,500 Q360,400 720,500 T1440,500 V900 H0 Z"
        fill="#fff"
        fillOpacity="0.10"
        />
        <circle cx="1200" cy="200" r="80" fill="#fff" fillOpacity="0.07" />
        <circle cx="300" cy="150" r="60" fill="#fff" fillOpacity="0.06" />
      </g>
      </svg>

      {/* Left Div */}
      <div className="flex justify-center items-center w-full md:w-[45%] z-10 mb-8 md:mb-0">
      <div className="border-8 border-[#1ab8b3] rounded-3xl p-2 relative w-[280px] h-[500px] bg-white/10 shadow-2xl backdrop-blur-md">
        <div className="w-full flex content-center items-center h-full bg-black rounded-2xl overflow-hidden">
        <img
          src="https://cdn.appdesign.dev/wp-content/uploads/2019/04/disen%CC%83o-app-para-dentistas.png"
          alt="App Screenshot"
          className="object-cover align-middle w-[300px] h-[500px] opacity-100"
        />
        </div>
      </div>
      </div>

      {/* Right Div */}
      <div className="flex flex-col items-center w-full md:w-[45%] gap-8 z-10">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">Get Our App</h2>
        <p className="text-lg text-white/80 max-w-md mx-auto">
        Download our dental clinic app for easy appointment booking, reminders, and more!
        </p>
      </div>
      <motion.a
        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(26,184,179,0.25)" }}
        whileTap={{ scale: 0.97 }}
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[280px] flex items-center justify-center gap-3 py-4 bg-[#1a4578] text-white text-center font-semibold rounded-2xl shadow-lg hover:bg-[#32558f] transition-all duration-300"
      >
        <img src="/Images/playStore.png" alt="Play Store" className="w-8 h-8" />
        Download on Google Play
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(26,184,179,0.25)" }}
        whileTap={{ scale: 0.97 }}
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[280px] flex items-center justify-center gap-3 py-4 bg-[#1ab8b3] text-white text-center font-semibold rounded-2xl shadow-lg hover:bg-[#18a0a0] transition-all duration-300"
      >
        <img src="/Images/appstore.png" alt="App Store" className="w-8 h-8" />
        Download on App Store
      </motion.a>
      </div>
    </div>
  );
}
