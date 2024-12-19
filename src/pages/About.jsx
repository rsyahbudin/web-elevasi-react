import { Link } from "react-router-dom";
import HeadImg from "../assets/hero/hero.webp";
import Client from "../components/Client";
import Services from "../components/Services";

const AboutPage = () => {
  return (
    <div className="py-16 px-6 lg:px-24 mt-20 bg-gray-50">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          We Build with Passion
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Elevasi Contractor merupakan general contractor yang bergerak
          dibidang sipil, arsitektur (3D), interior, taman, dan lainnya yang
          masih berhubungan dengan kontraktor. Dengan segudang pengalaman, kami
          selalu memperhatikan aspek estetika, keakuratan, dan fungsional dalam
          pekerjaan kami.
        </p>
      </div>


      {/* About Us Section */}
      <div className="mt-20">
        <div
          className="hero h-80 rounded-3xl shadow-xl overflow-hidden"
          style={{
            backgroundImage: `url(${HeadImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-overlay bg-opacity-30 bg-black"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-4xl">
              <h1 className="mb-5 text-3xl sm:text-5xl font-sans text-white">
                Harmony of Nature in Shaping Design for Humanity and Environment
              </h1>
              <Link to="/contact">
                <button className="btn btn-primary text-white rounded-3xl px-10 py-3 shadow-lg hover:scale-105 transition-transform duration-300">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <Services />
    </div>
  );
};

export default AboutPage;
