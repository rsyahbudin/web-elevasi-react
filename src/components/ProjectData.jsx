const images = import.meta.glob("../assets/projects/**/*.{png,jpg,jpeg,avif,webp}");
const metadataFiles = import.meta.glob("../assets/projects/**/metadata.json");

const resolveFiles = async () => {
  const loadedImages = {};
  for (const path in images) {
    loadedImages[path] = (await images[path]()).default;
  }

  const loadedMetadata = {};
  for (const path in metadataFiles) {
    loadedMetadata[path] = await metadataFiles[path]();
  }

  return { loadedImages, loadedMetadata };
};

const projectsData = async () => {
  const { loadedImages, loadedMetadata } = await resolveFiles();
  const projects = [];

  // Iterasi metadata
  for (const path in loadedMetadata) {
    const folderName = path.match(/\/projects\/([^/]+)\/metadata\.json$/)[1];
    const metadata = loadedMetadata[path];
    const gallery = [];

    // Cari semua gambar dalam folder
    for (const imgPath in loadedImages) {
      if (imgPath.includes(`/projects/${folderName}/`)) {
        gallery.push(loadedImages[imgPath]);
      }
    }

    // Tambahkan proyek ke daftar
    projects.push({
      id: projects.length + 1,
      ...metadata,
      image: gallery[0], // Gambar utama (pertama dalam folder)
      gallery,
    });
  }

  return projects;
};

export default projectsData;
