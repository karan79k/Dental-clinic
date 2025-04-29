import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaSnapchatGhost,
} from "react-icons/fa";

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

// const words = ['Experts' ,'Artists','Leaders']

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-sm border-t-[1px] border-t-[#1ab8b3b9]"> 
      <div className="container mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-gray-400">
          {/* Column 1 - Contact Info */}
          <div>
            {/* <h4 className="text-white font-semibold mb-4">Logo</h4> */}
            <Link to="/" >
              <img
                src={"/Images/logo-3.png"}
                alt="Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </Link>
            <ul className="space-y-4 mt-4">
              <li className="hover:text-primary text-white">
                Quality Clinics, Saudi Arabia.
              </li>
              <li className="hover:text-primary text-white">0141 777 7511</li>
              <li className="hover:text-primary text-white">
                info@dentalglasgow.co.uk
              </li>
            </ul>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              Navigation
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Referrals
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  All Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Useful Links */}
          <div className="-ml-18">
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              Useful Links
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Complaints Procedure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Treatments */}
          <div className="-ml-22">
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              Treatments
            </h4>
            <ul className="space-y-2 text-white">
              <li>
                <Link to="/" className="hover:text-primary">
                  Composite Bonding
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Invisalign®
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Implants
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Tooth Whitening
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-primary">
                  Facial Aesthetics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Subscribe */}
          <div className="-ml-28">
            <h4 className="text-primary mb-4" style={{ fontSize: "16px", fontWeight: 400 }}>
              Subscribe
            </h4>
            <p className="text-gray-300 mb-4 ">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2  rounded-md bg-black/10 outline focus:ring-2 focus:ring-violet-500"
              />
                <button
                  className="cursor-pointer border-[1px] border-[#1AB8B3] text-[#1AB8B3] px-4 py-2  rounded-md transition outline-none focus:outline-[#1AB8B3] hover:bg-[#1AB8B3] hover:text-white"
                >
                  Subscribe
                </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white border-t border-gray-700 pt-6">
          <p>Website By Gravit Infosystems pvt. ltd</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <small>© 2023 Millersneuk. All rights reserved.</small>
            <small className="underline cursor-pointer hover:text-primary">
              Privacy Policy
            </small>
            <small className="underline cursor-pointer hover:text-primary">
              Terms of Service
            </small>
            <small className="underline cursor-pointer hover:text-primary">
              Cookies Settings
            </small>
          </div>
          <div className="flex gap-3">
            {footer.map((ele, i) => (
              <Link
                to={ele.link}
                target="_blank"
                key={i}
                className="flex items-center justify-center 
                        rounded-full border border-gray-400 
                        bg-gray-100 text-black 
                        w-6 h-6 sm:w-8 sm:h-8 
                        transition-all duration-300 
                        hover:-translate-y-1 hover:scale-110 
                        hover:text-secondary hover:border-primary"
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
