import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-white via-[#f0fdfa] to-white">
      {/* SVG Overlay for Full-Width Patterns */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <g className="g-overlays">
          {/* Gradient Waves */}
          <path
            d="M0,800 Q480,700 960,800 T1920,800 V1080 H0 Z"
            fill="url(#gradient1)"
            fillOpacity="0.2"
          />
          <path
            d="M0,600 Q480,500 960,600 T1920,600 V1080 H0 Z"
            fill="url(#gradient2)"
            fillOpacity="0.15"
          />
          {/* Circles */}
          <circle cx="1600" cy="300" r="120" fill="url(#gradient3)" fillOpacity="0.1" />
          <circle cx="400" cy="200" r="100" fill="url(#gradient3)" fillOpacity="0.08" />
          <circle cx="960" cy="500" r="150" fill="url(#gradient3)" fillOpacity="0.12" />
          <circle cx="600" cy="800" r="80" fill="url(#gradient3)" fillOpacity="0.1" />
          <circle cx="1400" cy="900" r="90" fill="url(#gradient3)" fillOpacity="0.1" />
        </g>
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#77e5e0" />
            <stop offset="100%" stopColor="#1ab8b3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1ab8b3" />
            <stop offset="100%" stopColor="#1a4578" />
          </linearGradient>
          <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1ab8b3" />
            <stop offset="100%" stopColor="#1a4578" />
          </radialGradient>
        </defs>
      </svg>

      {/* Left Div */}
      <div className="flex justify-center items-center w-full md:w-[45%] z-10 mb-8 md:mb-0">
        <div className="relative w-[280px] h-[500px]">
          {/* Gradient Shadow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#77e5e0] via-[#1ab8b3] to-[#1a4578] blur-xl opacity-50"></div>
          <div className="border-8 border-[#1ab8b3] rounded-3xl p-2 relative bg-white/10 shadow-2xl backdrop-blur-md">
            <div className="w-full flex content-center items-center h-full bg-black rounded-2xl overflow-hidden">
              <img
                src="https://cdn.appdesign.dev/wp-content/uploads/2019/04/disen%CC%83o-app-para-dentistas.png"
                alt="App Screenshot"
                className="object-cover align-middle w-[300px] h-[500px] opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Div */}
      <div className="flex flex-col items-center w-full md:w-[45%] gap-8 z-10">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-gray-800 drop-shadow-lg mb-2">
            Get Our App
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Download our dental clinic app for easy appointment booking, reminders, and more!
          </p>
        </div>
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 32px 0 rgba(26,184,179,0.25)",
          }}
          whileTap={{ scale: 0.97 }}
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#1a4578] to-[#1ab8b3] text-white text-center font-semibold rounded-2xl shadow-lg hover:from-[#32558f] hover:to-[#18a0a0] transition-all duration-300"
        >
          <img src="/Images/playStore.png" alt="Play Store" className="w-8 h-8" />
          Download on Google Play
        </motion.a>

        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 8px 32px 0 rgba(26,184,179,0.25)",
          }}
          whileTap={{ scale: 0.97 }}
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#1ab8b3] to-[#77e5e0] text-white text-center font-semibold rounded-2xl shadow-lg hover:from-[#18a0a0] hover:to-[#77e5e0] transition-all duration-300"
        >
          <img src="/Images/appstore.png" alt="App Store" className="w-8 h-8" />
          Download on App Store
        </motion.a>
      </div>
    </div>
  );
}
