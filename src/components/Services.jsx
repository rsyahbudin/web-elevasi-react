import { FaRegBuilding } from "react-icons/fa6";
import { FiHome } from "react-icons/fi"; // Import outline React Icons
import { LiaCogSolid } from "react-icons/lia";
import { RiSofaLine } from "react-icons/ri";

// Array of services data
const services = [
  {
    title: "Contractor",
    icon: <LiaCogSolid className="w-16 h-16 mx-auto mt-4 text-primary" />,
  },
  {
    title: "Desain 3D",
    icon: <FiHome className="w-16 h-16 mx-auto mt-4 text-primary" />,
  },
  {
    title: "Interior",
    icon: <FaRegBuilding className="w-16 h-16 mx-auto mt-4 text-primary" />,
  },
  {
    title: "Furniture",
    icon: <RiSofaLine className="w-16 h-16 mx-auto mt-4 text-primary" />,
  },
];

const Services = () => (
  <div className="container mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-12 text-primary font-serif">
      Our Services
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="card glass w-full bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform rounded-xl"
        >
          <figure>{service.icon}</figure>
          <div className="card-body text-center items-center">
            <h3 className="card-title text-2xl font-semibold text-gray-800 text-center">
              {service.title}
            </h3>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-outline btn-light">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
