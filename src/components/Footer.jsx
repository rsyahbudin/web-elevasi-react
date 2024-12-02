import { Link } from "react-router-dom";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

const Footer = () => (
  <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
      <Link to="/" className="hover:text-slate-400">
        Home
      </Link>
      <Link to="/about" className="hover:text-slate-400">
        About
      </Link>

      <Link to="/projects" className="hover:text-slate-400">
        Projects
      </Link>
      <Link to="/contact" className="hover:text-slate-400">
        Contact
      </Link>
    </nav>
    <nav>
      <div className="grid grid-flow-col gap-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/elevasi.kontraktor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <RiInstagramFill className="fill-current w-7 h-7 hover:text-pink-500 transition" />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6282231545981"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <RiWhatsappFill className="fill-current w-7 h-7 hover:text-green-500 transition" />
        </a>
      </div>
    </nav>
    <aside>
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by Elevasi
        Kontraktor
      </p>
    </aside>
  </footer>
);

export default Footer;
