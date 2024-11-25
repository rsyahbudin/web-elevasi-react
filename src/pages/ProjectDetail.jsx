import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import projectsData from "../components/ProjectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await projectsData();
      const foundProject = data.find((proj) => proj.id === parseInt(id));
      setProject(foundProject);
    };
    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header Gambar Full Lebar */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </div>

      {/* Detail Project */}
      <div className="container mx-auto  px-6 space-y-12">
        {/* Title */}
        <div className="text-center lg:text-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {project.title}
          </h1>
        </div>

        {/* Informasi Project */}
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10 lg:items-start lg:gap-10">
          {/* Left Column - Category & Year */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Category:
              </p>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                {project.category}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Year:
              </p>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                {project.year}
              </p>
            </div>
          </div>

          {/* Right Column - Location & Client */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Location:
              </p>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                {project.location}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Client:
              </p>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                {project.client}
              </p>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
