const images = import.meta.glob("../assets/projects/**/*.{png,jpg,jpeg,avif,webp}");
const metadataFiles = import.meta.glob("../assets/projects/**/metadata.json");

const resolveFiles = async (setLoading) => {
  const loadedImages = {};
  const loadedMetadata = {};

  try {
    // Mulai memuat gambar
    setLoading(true); // Tampilkan loading
    for (const path in images) {
      loadedImages[path] = (await images[path]()).default;
    }

    // Memuat metadata
    for (const path in metadataFiles) {
      loadedMetadata[path] = await metadataFiles[path]();
    }

    return { loadedImages, loadedMetadata };
  } catch (error) {
    console.error("Error loading files:", error);
    return { loadedImages, loadedMetadata };
  } finally {
    setLoading(false); // Selesai memuat
  }
};

const projectsData = async (setLoading) => {
  const { loadedImages, loadedMetadata } = await resolveFiles(setLoading);
  const projects = [];

  // Iterasi metadata dan gambar
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
