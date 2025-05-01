import { useTranslation } from "react-i18next";
import NormalCard from "./NormalCard";


const team = [
  {
    image: "/Images/cd-1.jpg",
    name: "team.members.0.name",
    specificaiton: "team.members.0.specification",
    text: "team.members.0.text",
  },
  {
    image: "/Images/cd-2.jpg",
    name: "team.members.1.name",
    specificaiton: "team.members.1.specification",
    text: "team.members.1.text",
  },
  {
    image: "/Images/cd-3.jpg",
    name: "team.members.2.name",
    specificaiton: "team.members.2.specification",
    text: "team.members.2.text",
  },
  {
    image: "/Images/cd-4.png",
    name: "team.members.3.name",
    specificaiton: "team.members.3.specification",
    text: "team.members.3.text",
  },
  {
    image: "/Images/cd-5.jpg",
    name: "team.members.4.name",
    specificaiton: "team.members.4.specification",
    text: "team.members.4.text",
  },
  {
    image: "/Images/cd-6.png",
    name: "team.members.5.name",
    specificaiton: "team.members.5.specification",
    text: "team.members.5.text",
  },
  {
    image: "/Images/cd-7.jpg",
    name: "team.members.6.name",
    specificaiton: "team.members.6.specification",
    text: "team.members.6.text",
  },
  {
    image: "/Images/cd-8.jpg",
    name: "team.members.7.name",
    specificaiton: "team.members.7.specification",
    text: "team.members.7.text",
  },
  {
    image: "/Images/cd-9.jpg",
    name: "team.members.8.name",
    specificaiton: "team.members.8.specification",
    text: "team.members.8.text",
  },
  {
    image: "/Images/cd-10.jpg",
    name: "team.members.9.name",
    specificaiton: "team.members.9.specification",
    text: "team.members.9.text",
  },
  {
    image: "/Images/cd-11.jpg",
    name: "team.members.10.name",
    specificaiton: "team.members.10.specification",
    text: "team.members.10.text",
  },
  {
    image: "/Images/cd-12.jpg",
    name: "team.members.11.name",
    specificaiton: "team.members.11.specification",
    text: "team.members.11.text",
  },
];

export default function TeamCarousel() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen sm:px-6 py-12 sm:py-16 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <div className={`text-center space-y-3 sm:space-y-4 ${isArabic ? 'rtl' : 'ltr'}`}>
          <p className="text-[#1AB8B3] text-xs sm:text-sm uppercase tracking-wider">
            {t('team.meetDentist')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('team.title')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 justify-items-center">
          {team.map((member, index) => (
            <div 
              key={index}
              className="w-full max-w-[350px] transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <NormalCard
                image={member.image}
                name={t(member.name)}
                specification={t(member.specificaiton)}
                text={t(member.text)}
                isArabic={isArabic}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}