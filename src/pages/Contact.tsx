import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Contact() {
   const { t } = useTranslation();
  
  return (
    <div className="min-h-screen pt-14 flex flex-col bg-gray-50">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Cards */}
          <div className="flex flex-col space-y-6">
            {/* Location Card */}
            <div className="bg-gradient-custom p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-6 h-6" />
                  <h4 className="font-semibold">{t('contact.locateUs')}</h4>
                </div>
                <p className="text-gray-100">{t('contact.clinic')}</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-custom p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="w-6 h-6" />
                  <h4 className="font-semibold">{t('contact.phone')}</h4>
                </div>
                <a
                  href="tel:920004864"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  920004864
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-custom p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <MdOutlineEmail className="w-6 h-6" />
                  <h4 className="font-semibold">{t('contact.email')}</h4>
                </div>
                <a
                  href="mailto:care@aljawdahclinic.com"
                  className="text-gray-100 hover:text-white transition-colors"
                >
                  care@aljawdahclinic.com
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-2">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8942.320592824271!2d-4.154342!3d55.92198!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1745042486244!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

