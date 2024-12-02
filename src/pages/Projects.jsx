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
      false ||
      project.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false ||
      project.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false ||
      project.client?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false;

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
      <p className="text-gray-700 mb-6">
        At <strong>Elevasi Kontraktor</strong>, we take pride in delivering
        exceptional craftsmanship and innovative solutions for every project we
        undertake. Explore our portfolio to see how we bring ideas to life.
      </p>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          className="input input-bordered w-full md:w-1/4"
          placeholder="Search projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
