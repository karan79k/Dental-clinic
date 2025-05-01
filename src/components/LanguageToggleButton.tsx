import { useTranslation } from 'react-i18next';

export default function LanguageToggleButton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
    // Remove dir setting to maintain layout
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 rounded-md border border-[#1ab8b3] text-white hover:bg-[#1ab8b3]/20 transition-all duration-300"
    >
      {i18n.language === 'en' ? 'عربي' : 'English'}
    </button>
  );
}