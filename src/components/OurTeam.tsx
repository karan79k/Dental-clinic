import { Link } from "react-router-dom";
interface TeamMember {
  image: string;
  name: string;
  specificaiton: string;
  text: string;
}

interface NormalCardProps extends TeamMember {}

const team: TeamMember[] = [
  {
    image: "/Images/cd-4.png",
    name: "Dr Philip Church",
    specificaiton: "Dentist",
    text: "Implants and Sedation",
  },
  {
    image: "/Images/cd-2.png",
    name: "Dr Jane Doe",
    specificaiton: "Oral Surgeon",
    text: "Facial Reconstruction Expert",
  },
  {
    image: "/Images/cd-3.png",
    name: "Dr Alan Smith",
    specificaiton: "Orthodontist",
    text: "Braces and Aligners",
  },
  {
    image: "/Images/cd-1.png",
    name: "Dr Nina Patel",
    specificaiton: "Prosthodontist",
    text: "Crowns and Implants",
  },
];

function NormalCard({ image, name, specificaiton, text }: NormalCardProps) {
  return (
    <div className="card-container">
      <img src={image} alt={name} className="rounded-md w-[70vh] bg-cover" />
      <div className="content mt-6 flex flex-col gap-0">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-md font-medium text-[#1AB8B3]">{specificaiton}</div>
        <div className="text-md font-light mt-4">{text}</div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  return (
    <div className="min-h-screen pt-32 bg-black text-white pb-20">
      <div className="container mx-auto flex flex-col gap-y-[-30px] md:flex-row gap-12">
        <div className="md:w-2/5 flex flex-col justify-start space-y-6 text-left">
          <p className="text-primary text-sm tracking-wider pl-1">
            Meet your doctors
          </p>
          <h3 className="text-white">Our Doctors</h3>
          <p className="text-white/80 ml-1">
            We put our long experience at your disposal
          </p>
          <div>
            <Link to='/our-doctors'>
            <button className="relative cursor-pointer border border-secondary text-primary px-12 py-4 mt-6 rounded-md transition-all duration-200 hover:bg-primary hover:text-primary hover:scale-105 ">
              View All
            </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-18 sm:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <NormalCard key={i} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
