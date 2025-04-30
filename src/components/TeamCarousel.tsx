import NormalCard from "./NormalCard";

const team = [
  {
    image: "/Images/cd-1.jpg",
    name: "Dr Philip Church",
    specificaiton: "Dentist",
    text: "Implants and Sedation",
  },
  {
    image: "/Images/cd-2.jpg",
    name: "Dr Jane Doe",
    specificaiton: "Oral Surgeon",
    text: "Facial Reconstruction Expert",
  },
  {
    image: "/Images/cd-3.jpg",
    name: "Dr Alan Smith",
    specificaiton: "Orthodontist",
    text: "Braces and Aligners",
  },
  {
    image: "/Images/cd-4.png",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
  {
    image: "/Images/cd-5.jpg",
    name: "Dr Philip Church",
    specificaiton: "Dentist",
    text: "Implants and Sedation",
  },
  {
    image: "/Images/cd-6.png",
    name: "Dr Jane Doe",
    specificaiton: "Oral Surgeon",
    text: "Facial Reconstruction Expert",
  },
  {
    image: "/Images/cd-7.jpg",
    name: "Dr Alan Smith",
    specificaiton: "Orthodontist",
    text: "Braces and Aligners",
  },
  {
    image: "/Images/cd-8.jpg",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
  {
    image: "/Images/cd-9.jpg",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
  {
    image: "/Images/cd-10.jpg",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
  {
    image: "/Images/cd-11.jpg",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
  {
    image: "/Images/cd-12.jpg",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
];

export default function TeamCarousel() {
  return (
    <div className="min-h-screen  sm:px-6 py-12 sm:py-16 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <div className="text-center space-y-3 sm:space-y-4">
          <p className="text-[#1AB8B3] text-xs sm:text-sm uppercase tracking-wider">
            Meet your dentists
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Team
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Experts in dental care
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 justify-items-center">
          {team.map((member, index) => (
            <div 
              key={index}
              className="w-full max-w-[350px] transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <NormalCard
                image={member.image}
                name={member.name}
                specificaiton={member.specificaiton}
                text={member.text}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}