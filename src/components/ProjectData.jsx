const images = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,avif}");

const resolveImages = async () => {
  const loadedImages = {};
  for (const path in images) {
    loadedImages[path] = (await images[path]()).default;
  }
  return loadedImages;
};

const projectsData = async () => {
  const loadedImages = await resolveImages();

  return [
    {
      id: 1,
      title: "Modern House",
      category: "Architecture",
      image: loadedImages["../assets/projects/modernhouse.jpg"],
      year: 2022,
      location: "New York, USA",
      client: "John Doe Architects",
      gallery: [
        loadedImages["../assets/projects/modernhouse.jpg"],
        loadedImages["../assets/projects/kitchen.avif"],
      ],
    },
    {
      id: 2,
      title: "Interior Kitchen",
      category: "Interior Design",
      image: loadedImages["../assets/projects/kitchen.avif"],
      year: 2024,
      location: "San Francisco, USA",
      client: "Elite Interior Designs",
      gallery: [
        loadedImages["../assets/projects/kitchen.avif"],
        loadedImages["../assets/projects/garden.jpg"],
      ],
    },
    {
      id: 3,
      title: "Garden Landscape",
      category: "Garden Design",
      image: loadedImages["../assets/projects/garden.jpg"],
      year: 2024,
      location: "Los Angeles, USA",
      client: "Nature Scapes Ltd.",
      gallery: [
        loadedImages["../assets/projects/garden.jpg"],
        loadedImages["../assets/projects/officebuild.jpg"],
      ],
    },
    {
      id: 4,
      title: "Office Building",
      category: "Commercial",
      image: loadedImages["../assets/projects/officebuild.jpg"],
      year: 2025,
      location: "Chicago, USA",
      client: "Urban Developers Inc.",
      gallery: [loadedImages["../assets/projects/officebuild.jpg"]],
    },
  ];
};

export default projectsData;
