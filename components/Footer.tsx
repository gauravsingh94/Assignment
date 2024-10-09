import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LocationImageSvg from "../Public/assets/Location.svg";
import MailSvg from "../Public/assets/Mail.svg";

export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:text-left flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-secondary mb-4 underline">
            Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row items-center">
            <div className="border-2 border-white bg-white flex items-center justify-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-grow p-2 mb-2 sm:mb-0 sm:mr-2 text-gray-800 w-56 md:w-80 focus:outline-none"
              />
              <button
                type="submit"
                className="border text-black bg-secondary font-semibold p-2 hover:bg-orange-500 transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="order-1 md:order-1">
            <h3 className="text-xl font-bold text-secondary mb-4 ">
              Snipe Labs Private Limited
            </h3>
            <div className="flex flex-col items-center md:flex-row md:items-start md:gap-4">
              <Image src={LocationImageSvg} alt="Location Svg" />
              <div>
                <p className="mb-2">
                  Krishna Deepam, Vinayak Nagar, Doddanekudi
                </p>
                <p>Bangalore, Karnataka - 560037</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mt-4">
              <Image src={MailSvg} alt="Mail Svg" height={15} />
              <p className="hidden md:block md:ml-2">Email:</p>{" "}
              {/* Show on larger devices */}
              <p className="md:ml-2">support@snipe.in</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center mt-4 order-3 md:order-3">
              <h1 className="font-semibold text-secondary mb-2 lg:mr-2">
                Social Media:
              </h1>
              <div className="flex  space-x-4 items-center">
                <Link href="#" className="hover:text-orange-300">
                  <div className="bg-secondary text-[#2F2F2F] hover:text-orange-300 rounded-full p-3 flex items-center justify-center">
                    <Facebook size={24} />
                  </div>
                </Link>
                <Link href="#" className="hover:text-orange-300">
                  <div className="bg-secondary text-[#2F2F2F] hover:text-orange-300 rounded-full p-3 flex items-center justify-center">
                    <Instagram size={24} />
                  </div>
                </Link>
                <Link href="#" className="hover:text-orange-300">
                  <div className="bg-secondary text-[#2F2F2F] hover:text-orange-300 rounded-full p-3 flex items-center justify-center">
                    <Twitter size={24} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Quick Links and Useful Links */}
          <div className="flex flex-col md:flex-row md:ml-auto gap-8 order-2 md:order-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4 underline">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Impact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    SNIPE Olympiad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Ranking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4 underline">
                Useful Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    Olympiad Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
