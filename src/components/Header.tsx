import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Heart, Search } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-calabash-obsidian text-white py-4 shadow-md"
          : "bg-transparent text-calabash-obsidian py-6"
      }`}
    >
      <div className="container-custom">
        {/* Promotional banner */}
        {/* {!isScrolled && (
          <div className="bg-calabash-shea text-white text-center py-2 px-4 rounded-full text-sm mb-4 font-medium animate-pulse hidden md:block">
            Free shipping on orders over R200 • Limited time offer
          </div>
        )} */}

        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`font-display text-2xl md:text-3xl font-bold transition-all ${
              isScrolled ? "text-calabash-baobab" : "text-calabash-obsidian"
            }`}
          >
            Calabash Beauty
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative nav-link ${isActive ? "active-nav-link" : ""} ${
                    isScrolled ? "text-white hover:text-calabash-rose" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center space-x-6">
            {/* Search Icon - New */}
            <button className="hidden sm:block relative">
              <Search
                size={22}
                className={`transition-colors ${
                  isScrolled ? "text-white" : "text-calabash-obsidian"
                } hover:text-calabash-shea`}
              />
            </button>

            {/* Wishlist Icon - New */}
            <button className="hidden sm:block relative">
              <Heart
                size={22}
                className={`transition-colors ${
                  isScrolled ? "text-white" : "text-calabash-obsidian"
                } hover:text-calabash-shea`}
              />
            </button>

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <ShoppingCart
                size={24}
                className={`transition-colors ${
                  isScrolled ? "text-white" : "text-calabash-obsidian"
                } hover:text-calabash-shea`}
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-calabash-shea text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle Button - Enhanced */}
            <button
              className="md:hidden flex flex-col justify-between w-6 h-5 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-full bg-current rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-current rounded-full transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-0.5 w-full bg-current rounded-full transition-transform duration-300 ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-calabash-obsidian absolute top-full left-0 w-full shadow-lg animate-fade-in-down">
          <nav className="container-custom py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-3 px-4 rounded-md transition-all ${
                    isActive
                      ? "bg-calabash-rose bg-opacity-20 text-calabash-shea font-medium"
                      : "hover:bg-gray-50"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
