import { motion } from "framer-motion";

export default function DownloadSection() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-evenly p-8 bg-white">
      {/* Left Div - Mobile App Preview */}
      <div className="relative w-[280px] h-[500px]">
        {/* Gradient Shadow */}
        <div className="absolute inset-6 rounded-3xl bg-gradient-to-r from-[#95ebe6] via-[#1ab8b3] to-[#4789da] blur-xl opacity-50"></div>
        
        {/* Mobile Frame */}
        <div className=" rounded-3xl  relative bg-white/10 shadow-10xl backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden ">
            <img
              src="https://cdn.appdesign.dev/wp-content/uploads/2019/04/disen%CC%83o-app-para-dentistas.png"
              alt="App Screenshot"
              className="object-cover w-full h-[500px]"
            />
          </div>
        </div>
      </div>

      {/* Right Div - Download Links */}
      <div className="flex flex-col items-center w-full md:w-[45%] gap-8 z-10">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get Our App
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Download our dental clinic app for easy appointment booking, reminders, and more!
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://play.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] flex items-center justify-center gap-3 py-4 bg-gradient-custom text-white text-center font-semibold rounded-2xl shadow-lg transition-all duration-300"
        >
          <img src="/Images/playStore.png" alt="Play Store" className="w-8 h-8" />
          Download on Google Play
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] flex items-center justify-center gap-3 py-4 bg-gradient-custom text-white text-center font-semibold rounded-2xl shadow-lg transition-all duration-300"
        >
          <img src="/Images/appstore.png" alt="App Store" className="w-8 h-8" />
          Download on Apple Store
        </motion.a>
      </div>
    </div>
  );
}
