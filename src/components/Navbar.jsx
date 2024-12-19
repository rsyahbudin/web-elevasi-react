import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useState, useEffect } from "react";
import logo from "../assets/logo elevasi.webp"; // Ganti dengan path logo Anda

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track if the user has scrolled past the Hero Section
  const location = useLocation(); // Get current location path

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll event to change navbar background
  const handleScroll = () => {
    const heroSection = document.getElementById("header");
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom <= 0) {
        setIsScrolled(true); // Add background once the Hero section is passed
      } else {
        setIsScrolled(false); // Keep transparent if within the Hero section
      }
    }
  };

  // Use useEffect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current page is home or not
  const isHomePage = location.pathname === "/";

  // Determine the navbar background color based on the page (Home or not)
  const navbarClass = isHomePage
    ? isScrolled
      ? "bg-netral shadow-lg text-white" // Scroll past Hero -> bg netral
      : "bg-transparent text-white" // Transparent on Home
    : "bg-netral text-white"; // netral on other pages

  // Determine the hamburger button color based on the page (Home or not)
  const hamburgerButtonClass = isHomePage
    ? "text-white" // White text on Home page (transparent background)
    : "bg-netral text-white"; // Slate background on other pages

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center hover:scale-105 ">
          <img
            src={logo} // Ganti dengan path logo Anda
            alt="Elevasi Kontraktor Logo"
            className="w-20 h-16 object-contain" // Sesuaikan ukuran logo
          />
          <div className="text-xl font-bold">
            <Link to="/">Elevasi Contractor</Link> {/* Link ke Home */}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium items-center justify-center">
          <li className="relative group">
            <Link to="/" className="hover:text-slate-400">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/about" className="hover:text-slate-400">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/projects" className="hover:text-slate-400">
              Projects
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link to="/contact" className="hover:text-slate-400">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="block">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none hover:text-slate-400 ${hamburgerButtonClass}`} // Apply dynamic classes here
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Menu */}
      <div
        id="mobileMenu"
        className={`fixed inset-0 bg-netral transform  ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col justify-between h-full px-6 py-8">
          <div>
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-xl font-bold">
                Elevasi Contractor
              </div>
              {/* Close Button */}
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <svg
                  className="w-8 h-8 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="mt-12 space-y-6 text-xl font-medium text-white">
              <Link
                to="/"
                className="block hover:text-slate-400"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block hover:text-slate-400"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block hover:text-slate-400"
                onClick={toggleMobileMenu}
              >
                Projects
              </Link>

              <Link
                to="/contact"
                className="block hover:text-slate-400"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/elevasi.kontraktor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                  alt="Instagram"
                  className="w-5 h-5 "
                />
              </a>
            </div>
            <div className="text-sm text-white">
              <p>PT. Arunika Eunoia Selaras</p>
              <p>Muhammad Farhan Syahbudin</p>
              <p>+62 822-3154-5981</p>
              <p>pt.aes99@gmail.com</p>
            </div>
            <button
              className="mt-6 w-full py-3 bg-green-400 text-gray-900 rounded-lg font-medium hover:bg-green-500"
              onClick={() =>
                window.open(
                  "https://wa.me/6282231545981?text=Hi,%20I'm%20interested%20in%20your%20services",
                  "_blank"
                )
              }
            >
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
