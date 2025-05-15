
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

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
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display text-2xl md:text-3xl font-bold"
          style={{ 
            color: isScrolled ? "#EDE6D8" : "#332619"
          }}
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
                `nav-link ${isActive ? "active-nav-link" : ""} ${
                  isScrolled ? "text-white hover:text-calabash-rose" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Cart and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart
              size={24}
              className={`${isScrolled ? "text-white" : "text-calabash-obsidian"}`}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-calabash-shea text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className={`${isScrolled ? "text-white" : "text-calabash-obsidian"}`} />
            ) : (
              <Menu size={24} className={`${isScrolled ? "text-white" : "text-calabash-obsidian"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-calabash-obsidian text-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 px-4 ${isActive ? "bg-calabash-shea bg-opacity-20 font-medium" : ""}`
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
