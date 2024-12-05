import SwiperComponent from "./SwiperComponent";

// Import gambar
import Mako1 from "../assets/projects/MakoCoffeeShop/1.webp";
import Mako2 from "../assets/projects/MakoCoffeeShop/2.webp";
import Mako3 from "../assets/projects/MakoCoffeeShop/3.webp";
import Mako4 from "../assets/projects/MakoCoffeeShop/4.webp";
import IsCenter1 from "../assets/projects/IslamicCenter/24.jpg";
import IsCenter2 from "../assets/projects/IslamicCenter/25.jpg";
import IsCenter3 from "../assets/projects/IslamicCenter/26.jpg";
import IsCenter4 from "../assets/projects/IslamicCenter/27.jpg";
import Cluster1 from "../assets/projects/DesainRumahCluster/drCluster.webp";
import Cluster2 from "../assets/projects/DesainRumahCluster/drCluster2.webp";
import Cluster3 from "../assets/projects/DesainRumahCluster/drCluster3.webp";
import Cluster4 from "../assets/projects/DesainRumahCluster/drCluster4.webp";

const ProjectSection = () => {
  const projectData = [
    {
      title: "Mako Coffee Shop",
      location: "Jambi",
      images: [
        { src: Mako1, alt: "Mako Image 1" },
        { src: Mako2, alt: "Mako Image 2" },
        { src: Mako3, alt: "Mako Image 3" },
        { src: Mako4, alt: "Mako Image 4" },
      ],
    },
    {
      title: "Islamic Center",
      location: "Bekasi",
      images: [
        { src: IsCenter1, alt: "Bukit Duri Image 1" },
        { src: IsCenter2, alt: "Bukit Duri Image 2" },
        { src: IsCenter3, alt: "Bukit Duri Image 3" },
        { src: IsCenter4, alt: "Bukit Duri Image 3" },
      ],
    },
    {
      title: "Rumah Cluster",
      location: "Cilangkap, Depok",
      images: [
        { src: Cluster1, alt: "Cluster Image 1" },
        { src: Cluster2, alt: "Cluster Image 2" },
        { src: Cluster3, alt: "Cluster Image 3" },
        { src: Cluster4, alt: "Cluster Image 4" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-thin text-center sm:text-left mb-10">Higlighted Project</h2>
      {/* Flex container untuk responsive layout */}
      <div className="flex sm:flex-nowrap flex-wrap gap-8 justify-center overflow-x-auto sm:overflow-hidden">
        {projectData.map((project, index) => (
          <div key={index} className="w-full sm:w-80 md:w-1/3 flex-none">
            <SwiperComponent
              images={project.images}
              title={project.title}
              location={project.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
