import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../components/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("Newest");
  const [searchTerm, setSearchTerm] = useState(""); // State baru untuk pencarian

  // Muat data proyek secara asinkron
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectsData();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Filter projects berdasarkan kategori dan pencarian
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(project.category);

    const matchesSearch =
      project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Urutkan projects berdasarkan tahun
  const sortedProjects = filteredProjects.sort((a, b) => {
    if (sortOrder === "Newest") {
      return b.year - a.year; // Dari yang terbaru
    } else {
      return a.year - b.year; // Dari yang lama
    }
  });

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-700 mb-6 max-w-4xl">
        At <strong>Elevasi Kontraktor</strong>, we take pride in delivering
        exceptional craftsmanship and innovative solutions for every project we
        undertake. Explore our portfolio to see how we bring ideas to life.
      </p>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <label className="input input-bordered flex items-center md:w-1/4">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <select
          className="select select-bordered ml-4"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <Filter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProjects.length > 0 ? (
              sortedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
                No projects found matching your search criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
