import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaSnapchatGhost,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const footer = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/AljawdahClinics/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/aljawdahclinics/#",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/quality-clinics/",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/aljawdahclinics",
  },
  {
    icon: <FaSnapchatGhost />,
    link: "https://www.snapchat.com/add/aljawdahclinics",
  },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className="bg-black px-6 py-10 text-sm border-t-[1px] border-t-[#1ab8b3b9]"> 
      <div className="container mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-400">
          {/* Column 1 - Contact Info */}
          <div>
            <Link to="/">
              <img
                src="/Images/logo-3.png"
                alt={t('footer.logo.alt')}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <ul className="space-y-4 mt-4">
              <li className="hover:text-primary text-white">
                {t('footer.contact.address')}
              </li>
              <li className="hover:text-primary text-white">
                {t('footer.contact.phone')}
              </li>
              <li className="hover:text-primary text-white">
                {t('footer.contact.email')}
              </li>
            </ul>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              {t('footer.navigation.title')}
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/" className="hover:text-primary">
                  {t('footer.navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  {t('footer.navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-primary">
                  {t('footer.navigation.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  {t('footer.navigation.contact')}
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="hover:text-primary">
                  {t('footer.navigation.referrals')}
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="hover:text-primary">
                  {t('footer.navigation.treatments')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="-ml-18">
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              {t('footer.useful.title')}
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/blog" className="hover:text-primary">
                  {t('footer.useful.blog')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary">
                  {t('footer.useful.news')}
                </Link>
              </li>
              <li>
                <Link to="/complaints" className="hover:text-primary">
                  {t('footer.useful.complaints')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Treatments */}
          <div className="-ml-22">
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              {t('footer.treatments.title')}
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/bonding" className="hover:text-primary">
                  {t('footer.treatments.bonding')}
                </Link>
              </li>
              <li>
                <Link to="/invisalign" className="hover:text-primary">
                  {t('footer.treatments.invisalign')}
                </Link>
              </li>
              <li>
                <Link to="/implants" className="hover:text-primary">
                  {t('footer.treatments.implants')}
                </Link>
              </li>
              <li>
                <Link to="/whitening" className="hover:text-primary">
                  {t('footer.treatments.whitening')}
                </Link>
              </li>
              <li>
                <Link to="/aesthetics" className="hover:text-primary">
                  {t('footer.treatments.aesthetics')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Subscribe */}
          <div className="-ml-28">
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              {t('footer.subscribe.title')}
            </h4>
            <p className="text-gray-300 mb-4">
              {t('footer.subscribe.description')}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder={t('footer.subscribe.placeholder')}
                className="w-full p-2 rounded-md bg-black/10 outline focus:ring-2 focus:ring-violet-500"
              />
              <button className="cursor-pointer border-[1px] border-[#1AB8B3] text-[#1AB8B3] px-4 py-2 rounded-md transition outline-none focus:outline-[#1AB8B3] hover:bg-[#1AB8B3] hover:text-white">
                {t('buttons.subscribe')}
              </button>
            </div>
            <p className="text-xs text-gray-500">
              {t('footer.subscribe.terms')}
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white border-t border-gray-700 pt-6">
          <p>{t('footer.copyright.development')}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <small>{t('footer.copyright.rights')}</small>
            <small className="underline cursor-pointer hover:text-primary">
              {t('footer.copyright.privacy')}
            </small>
            <small className="underline cursor-pointer hover:text-primary">
              {t('footer.copyright.terms')}
            </small>
            <small className="underline cursor-pointer hover:text-primary">
              {t('footer.copyright.cookies')}
            </small>
          </div>
          <div className="flex gap-3">
            {footer.map((ele, i) => (
              <Link
                to={ele.link}
                target="_blank"
                key={i}
                className="flex items-center justify-center rounded-full border border-gray-400 bg-gray-100 text-black w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-secondary hover:border-primary"
              >
                <span className="text-lg sm:text-xl">{ele.icon}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
