import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../components/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("Newest");

  // Muat data proyek secara asinkron
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectsData();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Filter projects berdasarkan kategori
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(project.category)
  );

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
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <Filter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-end mb-4">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
