import React from "react";
import { Heart, Award, BookOpenCheck, Handshake } from "lucide-react";

const values = [
  {
    title: "EXCELLENCE",
    description:
      "We pledge continuous development and leadership in providing medical services with the latest scientific technology.",
    icon: <Award className="h-10 w-10 text-primary" />, // Ribbon/Medal icon
  },
  {
    title: "MASTERING",
    description:
      "We form a team of specialists and consultants in various disciplines with international competencies and long experience in diagnosing, studying and treating various cases.",
    icon: <Handshake className="h-10 w-10 text-primary" />, // Handshake or Team icon
  },
  {
    title: "HONESTY",
    description:
      "We strive to promote the principle of honesty, integrity and transparency with all our customers.",
    icon: <Heart className="h-10 w-10 text-primary" />,
  },
  {
    title: "QUALITY",
    description:
      "We focus our attention on making our customers' experience the best by providing high quality services and safe sterilization standards.",
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />, // Quality/book symbol
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">VALUES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 px-4 py-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
          >
            {value.icon}
            <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
