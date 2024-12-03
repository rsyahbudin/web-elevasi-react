import { FaRegBuilding } from "react-icons/fa6";
import { FiHome } from "react-icons/fi"; // Import outline React Icons
import { LiaCogSolid } from "react-icons/lia";
import { RiSofaLine } from "react-icons/ri";

const features = [
  {
    name: "Desain 3D",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: FiHome,
  },
  {
    name: "Interior",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: FaRegBuilding,
  },
  {
    name: "Contractor",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: LiaCogSolid,
  },
  {
    name: "Furniture",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: RiSofaLine,
  },
];

// Array of services data
// const services = [
//   {
//     title: "Contractor",
//     icon: <LiaCogSolid className="w-16 h-16 mx-auto mt-4 text-primary" />,
//   },
//   {
//     title: "Desain 3D",
//     icon: <FiHome className="w-16 h-16 mx-auto mt-4 text-primary" />,
//   },
//   {
//     title: "Interior",
//     icon: <FaRegBuilding className="w-16 h-16 mx-auto mt-4 text-primary" />,
//   },
//   {
//     title: "Furniture",
//     icon: <RiSofaLine className="w-16 h-16 mx-auto mt-4 text-primary" />,
//   },
// ];

const Services = () => (
  <div className="py-5">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base/7 font-semibold text-slate-600">Services</h2>
        <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Everything you need to deploy your app
        </p>
        <p className="mt-6 text-lg/8 text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-slate-800">
                  <feature.icon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>

  // <div className="container mx-auto px-4 py-16">
  //   <h2 className="text-4xl font-bold text-center mb-12 text-primary font-serif">
  //     Our Services
  //   </h2>

  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
  //     {services.map((service, index) => (
  //       <div
  //         key={index}
  //         className="card glass w-full bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform rounded-xl"
  //       >
  //         <figure>{service.icon}</figure>
  //         <div className="card-body text-center items-center">
  //           <h3 className="card-title text-2xl font-semibold text-gray-800 text-center">
  //             {service.title}
  //           </h3>
  //           <div className="card-actions justify-center mt-4">
  //             <button className="btn btn-outline btn-light">Learn More</button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
);

export default Services;
