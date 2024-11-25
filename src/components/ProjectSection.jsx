import SwiperComponent from "./SwiperComponent";

// Import gambar
import Manggarai1 from "../assets/projects/manggarai.jpg";
import Manggarai2 from "../assets/projects/bukitduri.jpg";
import Manggarai3 from "../assets/projects/KCI_DEPOK.jpg";
import Bukitduri1 from "../assets/projects/bukitduri.jpg";
import Bukitduri2 from "../assets/projects/KCI_DEPOK.jpg";
import Bukitduri3 from "../assets/projects/manggarai.jpg";
import Depok1 from "../assets/projects/KCI_DEPOK.jpg";
import Depok2 from "../assets/projects/bukitduri.jpg";
import Depok3 from "../assets/projects/manggarai.jpg";

const ProjectSection = () => {
  const projectData = [
    {
      title: "Manggarai Station",
      location: "Jakarta, Indonesia",
      images: [
        { src: Manggarai1, alt: "Manggarai Image 1" },
        { src: Manggarai2, alt: "Manggarai Image 2" },
        { src: Manggarai3, alt: "Manggarai Image 3" },
      ],
    },
    {
      title: "Bukit Duri Station",
      location: "Padang, Indonesia",
      images: [
        { src: Bukitduri1, alt: "Bukit Duri Image 1" },
        { src: Bukitduri2, alt: "Bukit Duri Image 2" },
        { src: Bukitduri3, alt: "Bukit Duri Image 3" },
      ],
    },
    {
      title: "Depok Station",
      location: "West Java, Indonesia",
      images: [
        { src: Depok1, alt: "Depok Image 1" },
        { src: Depok2, alt: "Depok Image 2" },
        { src: Depok3, alt: "Depok Image 3" },
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
