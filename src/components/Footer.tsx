import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-calabash-obsidian text-white pt-20 pb-10 border-t border-white border-opacity-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and About */}
          <div>
            <Link
              to="/"
              className="font-display text-3xl font-bold text-calabash-baobab block mb-4"
            >
              Calabash Beauty
            </Link>
            <p className="text-gray-300 mb-6">
              Premium hair extensions that bring out confidence and elevate your
              looks. Join the glow-up movement.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-calabash-shea transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-calabash-shea transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-calabash-shea transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-calabash-shea"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>Shop</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Customer Service
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-calabash-shea"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>Shipping & Returns</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-calabash-shea transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 h-0.5 bg-calabash-shea transition-all group-hover:w-2"></span>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-calabash-shea"></span>
            </h3>

            <ul className="space-y-4 text-gray-300 mb-6">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-calabash-shea mt-1 flex-shrink-0"
                />
                <span>
                  123 Beauty Boulevard
                  <br />
                  Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-calabash-shea flex-shrink-0" />
                <span>hello@calabashbeauty.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-calabash-shea flex-shrink-0" />
                <span>+27 11 234 5678</span>
              </li>
            </ul>

            <form className="flex">
              <input
                type="email"
                placeholder="Join our newsletter"
                className="px-4 py-3 w-full bg-white bg-opacity-10 text-white rounded-l-md focus:outline-none border border-transparent focus:border-calabash-rose"
              />
              <button
                type="submit"
                className="bg-calabash-shea flex items-center justify-center px-4 py-3 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white border-opacity-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Calabash Beauty. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">"Sis, go get your hair done."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
