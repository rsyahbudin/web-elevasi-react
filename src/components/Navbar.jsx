import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { useState, useEffect } from "react";
import logo from "../assets/projects/lognbg.png"; // Ganti dengan path logo Anda


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
      ? "bg-slate-800 shadow-lg text-white" // Scroll past Hero -> bg slate-800
      : "bg-transparent text-white" // Transparent on Home
    : "bg-slate-800 text-white"; // Slate-800 on other pages

  // Determine the hamburger button color based on the page (Home or not)
  const hamburgerButtonClass = isHomePage
    ? "text-white" // White text on Home page (transparent background)
    : "bg-slate-800 text-white"; // Slate background on other pages

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
            <Link to="/">Elevasi Kontraktor</Link> {/* Link ke Home */}
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className=" hidden md:flex space-x-8 font-medium items-center justify-center ">
          <li>
            <Link to="/" className="hover:text-slate-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-slate-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-slate-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-slate-400">
              Contact
            </Link>
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
        className={`fixed inset-0 bg-gray-900 transform  ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col justify-between h-full px-6 py-8">
          <div>
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="text-xl font-bold">
                Elevasi <span className="text-gray-800">Kontraktor</span>
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
                to="#"
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
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-400 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-400 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-slate-400 transition"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
            </div>
            <div className="text-sm text-white">
              <p>PT. Sinergi Ruang Hijau</p>
              <p>Jalan Pulolaut No 27</p>
              <p>Bandung, West Java, Indonesia</p>
              <p>+62 88102 2020 380</p>
            </div>
            <button className="mt-6 w-full py-3 bg-green-400 text-gray-900 rounded-lg font-medium hover:bg-green-500">
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;