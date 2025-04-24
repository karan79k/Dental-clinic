import Book from "../components/Book";
import GetInTouch from "../components/GetInTouch";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          
          <div className="flex items-start flex-col  bg-secondary text-white p-4 rounded-md h-30 w-auto sm:w-80 hover:bg-violet-600 transition-colors">
            <h4>
              Locate Us
            </h4>
            <div className="flex py-4 gap-4 items-center justify-center ">
            <FaMapMarkerAlt className="size-8  "/>
            <p>Quality Clinics, Saudi Arabia.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start  gap-4 bg-secondary text-white p-4 rounded-md h-30 w-auto sm:w-80 hover:bg-violet-600 transition-colors">
            <h4>Phone</h4>
              <a
                href="tel:01417777511"
                className="flex gap-4 items-center justify-center"
              >
                  <FaPhoneAlt className="size-8" />
                  <p>920004864</p>
              </a>
            </div>

            {/* Email */}
            <div  className="flex items-start flex-col gap-4 bg-secondary text-white p-4 rounded-md h-30 w-auto sm:w-80 hover:bg-violet-600 transition-colors">
            <h4>Email</h4>
              <a
                href="mailto:info@dentalglasgow.co.uk"
                className="flex gap-4 items-center justify-center"
              >
                <MdOutlineEmail className="size-8" />
                <p>care@aljawdahclinic.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full h-96 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8942.320592824271!2d-4.154342!3d55.92198!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1745042486244!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Book />
      <GetInTouch />
      
    </div>
  );
}

