import image1 from "../assets/services/architectural.jpg"
import image3 from "../assets/services/EventDesigner.jpg"
import image2 from "../assets/services/InteriorDesign.jpg"

const services = [
  {
    title: "Architecture Designer",
    description:
      "Hunian, Komersial, Industri, Fasilitas Umum, dan Fasilitas Sosial",
    image: image1, // Replace with your image path
  },
  {
    title: "Interior Designer",
    description:
      "Hunian, Komersial, Industri, Fasilitas Umum, dan Fasilitas Sosial",
    image: image2, // Replace with your image path
  },
  {
    title: "Event Designer",
    description:
      "Booth Pameran, Resepsi Pernikahan, Akad Nikah, Lamaran, dan Ulang Tahun",
    image: image3, // Replace with your image path
  },
];

const Services = () => (
  <section className="bg-white py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Our Advances</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.id}
          className="card shadow-lg bg-base-100 hover:shadow-xl transition-all"
        >
          <figure>
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-lg font-bold">{service.title}</h3>
            <p className="text-base text-gray-600">{service.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);

export default Services;
