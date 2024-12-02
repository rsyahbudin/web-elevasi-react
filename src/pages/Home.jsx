import ProjectSection from "../components/ProjectSection";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import { IoArrowForwardCircle } from "react-icons/io5";
import HeadImg from "../assets/projects/hero.svg";
import Client from "../components/Client";

const Home = () => {
  return (
    <div>
      <>
        {/* Hero Section */}
        <div
          id="header"
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${HeadImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-4xl">
              <h1 className="mb-5 text-5xl font-thin font-sans text-white">
                Harmony of Nature in Shaping Design for Humanity and Environment
              </h1>
              <p className="mb-5 text-white">#Elevasiaja</p>
              <Link to="/projects">
                <button className="btn btn-outline text-white rounded-3xl px-10">
                  Last Project{" "}
                  <span>
                    <IoArrowForwardCircle />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Hero Section End */}

        {/* Projects Section */}
        <ProjectSection />
        {/* Projects Section End */}

        {/* About Us Section */}
        <div className="mx-auto container px-6">
          <div
            className="hero h-80 rounded-[40px] shadow-xl overflow-hidden"
            style={{
              backgroundImage: `url(${HeadImg})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-4xl">
                <h1 className="mb-5 sm:text-5xl text-3xl font-sans">
                  Harmony of Nature in Shaping Design for Humanity and
                  Environment
                </h1>
                <Link to="/about">
                  <button className="btn btn-primary text-white rounded-3xl px-10">
                    More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* About Us Section End */}

        {/* Clients Section */}
        <Client />
        {/* Clients Section End */}

        {/* Services Section */}
        <Services />
        {/* Services Section End */}
      </>
    </div>
  );
};

export default Home;
