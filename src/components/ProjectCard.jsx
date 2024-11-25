import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.id}`); // Navigasi ke halaman detail
  };

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {/* Gambar */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay dengan Gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-800 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-bold">{project.title}</h2>
        <p className="text-gray-300 text-sm">{project.category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
