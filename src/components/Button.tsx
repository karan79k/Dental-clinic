import { useTranslation } from "react-i18next";

export default function Button() {
  const { t } = useTranslation();
  
  return (
    <button 
      className="p-4 bg-gradient-custom text-[14px] sm:text-[16px] text-white rounded-md hover:opacity-90 transition-all duration-300 cursor-pointer"
    >
      {t('navigation.bookAppointment')}
    </button>
  );
}




