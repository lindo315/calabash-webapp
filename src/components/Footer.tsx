
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-calabash-obsidian text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold text-calabash-baobab">
              Calabash Beauty
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Premium hair extensions that bring out confidence and elevate looks.
              Join the glow-up movement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-calabash-shea transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-calabash-shea transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-calabash-shea transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-calabash-shea transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-calabash-shea transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-calabash-shea transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-calabash-shea transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-calabash-shea transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Join Our Community</h3>
            <p className="text-sm text-gray-300 mb-3">
              Subscribe for updates on new products, sales, and hair care tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 flex-grow bg-white bg-opacity-10 text-white rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-calabash-shea px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white border-opacity-10 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Calabash Beauty. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <p className="italic">"Sis, go get your hair done."</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
