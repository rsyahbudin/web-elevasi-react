import { FaRegBuilding } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { RiSofaLine } from "react-icons/ri";
import { LiaCogSolid } from "react-icons/lia";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 rounded-xl shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1500x800')",
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are a leading company providing comprehensive services in
            construction, 3D design, interior architecture, and custom
            furniture. Our team is committed to creating innovative,
            sustainable, and functional spaces for our clients.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="text-center my-16">
        <h2 className="text-3xl font-semibold text-primary mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          To be a global leader in construction and design, known for our
          excellence in quality, innovation, and sustainability, transforming
          spaces for future generations.
        </p>

        <h2 className="text-3xl font-semibold text-primary mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our mission is to deliver top-notch construction services while
          focusing on innovative designs and sustainability. We aim to exceed
          our clients expectations and create spaces that foster growth,
          comfort, and creativity.
        </p>
      </div>

      {/* Services Section */}
      <h2 className="text-4xl font-semibold text-center text-primary mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Service 1: Contractor */}
        <div className="card bg-gradient-to-r from-slate-700 via-gray-800 to-black hover:scale-105 transition-all duration-300 ease-in-out shadow-xl rounded-xl">
          <figure>
            <LiaCogSolid className="w-24 h-24 text-white mx-auto mt-6" />
          </figure>
          <div className="card-body text-center text-white">
            <h3 className="card-title text-2xl font-semibold">Contractor</h3>
            <p className="text-lg mb-4">
              Providing full-scale contracting services for residential and
              commercial projects.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-outline btn-light">Learn More</button>
            </div>
          </div>
        </div>

        {/* Service 2: Design 3D */}
        <div className="card bg-gradient-to-r from-indigo-600 via-blue-700 to-indigo-800 hover:scale-105 transition-all duration-300 ease-in-out shadow-xl rounded-xl">
          <figure>
            <FiHome className="w-24 h-24 text-white mx-auto mt-6" />
          </figure>
          <div className="card-body text-center text-white">
            <h3 className="card-title text-2xl font-semibold">Design 3D</h3>
            <p className="text-lg mb-4">
              We provide detailed 3D designs to help visualize your space before
              construction begins.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-outline btn-light">Learn More</button>
            </div>
          </div>
        </div>

        {/* Service 3: Interior */}
        <div className="card bg-gradient-to-r from-purple-800 via-indigo-900 to-black hover:scale-105 transition-all duration-300 ease-in-out shadow-xl rounded-xl">
          <figure>
            <FaRegBuilding className="w-24 h-24 text-white mx-auto mt-6" />
          </figure>
          <div className="card-body text-center text-white">
            <h3 className="card-title text-2xl font-semibold">
              Interior Design
            </h3>
            <p className="text-lg mb-4">
              We bring your interior spaces to life with modern, creative, and
              functional designs.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-outline btn-light">Learn More</button>
            </div>
          </div>
        </div>

        {/* Service 4: Furniture */}
        <div className="card bg-gradient-to-r from-yellow-700 via-orange-700 to-red-700 hover:scale-105 transition-all duration-300 ease-in-out shadow-xl rounded-xl">
          <figure>
            <RiSofaLine className="w-24 h-24 text-white mx-auto mt-6" />
          </figure>
          <div className="card-body text-center text-white">
            <h3 className="card-title text-2xl font-semibold">
              Furniture Design
            </h3>
            <p className="text-lg mb-4">
              Custom, high-quality furniture designs tailored to your space and
              needs.
            </p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-outline btn-light">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="my-16 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          What Our Clients Say
        </h2>
        <div className="carousel w-full rounded-xl shadow-lg">
          <div id="testimonial1" className="carousel-item relative w-full">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">
                "The team transformed our office space into something
                extraordinary! The designs are modern, functional, and
                inspiring!"
              </p>
              <p className="mt-4 font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">CEO, Example Corp</p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#testimonial4" className="btn btn-circle">
                ❮
              </a>
              <a href="#testimonial2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="testimonial2" className="carousel-item relative w-full">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 italic">
                "Their 3D design service was a game-changer for us. It made our
                decision-making process so much easier and more confident!"
              </p>
              <p className="mt-4 font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500">
                Marketing Manager, XYZ Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="text-center my-16">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Ready to start your project? Contact us today, and let's create
          something amazing together.
        </p>
        <a
          href="mailto:info@yourcompany.com"
          className="btn btn-primary text-white"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
