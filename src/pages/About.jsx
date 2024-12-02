import { Link } from "react-router-dom";
import HeadImg from "../assets/projects/hero.svg";
import Client from "../components/Client";

const AboutPage = () => {
  return (
    <div className="py-16 px-6 lg:px-24 mt-20 bg-gray-50">

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">We Build with Passion</h1>
        <p className="mt-4 text-lg text-gray-700">
          Kami adalah perusahaan konstruksi yang berdedikasi untuk menciptakan proyek-proyek berkualitas tinggi yang berfokus pada inovasi, keberlanjutan, dan kepuasan pelanggan.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <p className="text-gray-600">
            Di Elevasi Konstruksi, kami mengutamakan kualitas dalam setiap proyek yang kami tangani. Kami memiliki pengalaman bertahun-tahun dalam membangun rumah, gedung komersial, dan infrastruktur lainnya dengan standar tertinggi.
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            Kami percaya bahwa setiap proyek adalah kesempatan untuk mewujudkan impian klien kami. Tim ahli kami bekerja dengan teknologi terbaru dan praktik konstruksi terbaik untuk menghasilkan hasil yang tahan lama dan estetis.
          </p>
          <p className="mt-4 text-gray-600">
            Dari desain awal hingga penyelesaian akhir, kami memastikan setiap tahap pekerjaan dilakukan dengan cermat dan tepat waktu. Komitmen kami terhadap keberlanjutan membuat kami selalu mempertimbangkan solusi ramah lingkungan dalam setiap langkah pembangunan.
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            Kami bangga dengan tim kami yang terampil dan berdedikasi. Setiap anggota tim kami adalah profesional yang berpengalaman dan ahli di bidangnya, yang memungkinkan kami untuk memberikan hasil yang luar biasa dan solusi konstruksi yang inovatif.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
        {[
          { number: "2005", label: "Tahun Perusahaan Didirikan" },
          { number: "300+", label: "Proyek yang Diselesaikan" },
          { number: "500+", label: "Pekerja Ahli" },
          { number: "Rp 100M+", label: "Nilai Proyek yang Telah Diselesaikan" },
        ].map((stat, index) => (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</h2>
            <p className="text-lg text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <Client />
      {/* Client Section End */}

      {/* About Us Section */}
      <div className="mx-auto container mt-20">
        <div
          className="hero h-80 rounded-3xl shadow-xl overflow-hidden"
          style={{
            backgroundImage: `url(${HeadImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-4xl">
              <h1 className="mb-5 sm:text-5xl text-3xl font-sans text-white">
                Harmony of Nature in Shaping Design for Humanity and Environment
              </h1>
              <Link to="/contact">
                <button className="btn btn-primary text-white rounded-3xl px-10 py-3 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 mt-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Values</h2>
        <p className="mt-4 text-lg text-gray-600">
          Kami percaya bahwa keberhasilan perusahaan kami didorong oleh nilai-nilai yang kami pegang teguh. Nilai-nilai ini membentuk setiap aspek dari pekerjaan kami, dari hubungan kami dengan klien hingga cara kami berkolaborasi dalam tim.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: "🚀",
            color: "text-blue-500",
            title: "Excellence in Every Project",
            description:
              "Kami selalu berusaha memberikan kualitas terbaik dalam setiap proyek yang kami kerjakan, memastikan bahwa setiap detil diperhatikan dengan seksama.",
          },
          {
            icon: "📘",
            color: "text-purple-500",
            title: "Continuous Innovation",
            description:
              "Kami selalu mencari cara baru dan lebih baik untuk membangun, menggunakan teknologi terbaru untuk menciptakan solusi konstruksi yang lebih efisien dan efektif.",
          },
          {
            icon: "🖐",
            color: "text-indigo-500",
            title: "Integrity and Responsibility",
            description:
              "Kami berkomitmen untuk bekerja dengan integritas, selalu transparan dan jujur dalam setiap interaksi dengan klien dan rekan bisnis kami.",
          },
          {
            icon: "✨",
            color: "text-yellow-500",
            title: "Sustainability First",
            description:
              "Kami mengutamakan keberlanjutan dalam setiap langkah pembangunan, memilih solusi yang ramah lingkungan dan berkelanjutan untuk masa depan yang lebih baik.",
          },
          {
            icon: "🐾",
            color: "text-pink-500",
            title: "Teamwork and Collaboration",
            description:
              "Kami percaya bahwa kekuatan tim kami adalah kunci keberhasilan kami. Kami bekerja sama dengan klien dan rekan kami untuk mencapai tujuan bersama.",
          },
          {
            icon: "🌟",
            color: "text-cyan-500",
            title: "Client Satisfaction",
            description:
              "Kami selalu mendengarkan dan mengutamakan kepuasan klien. Setiap proyek adalah peluang untuk mewujudkan visi mereka dan melebihi harapan mereka.",
          },
        ].map((value, index) => (
          <div key={index} className="flex items-start space-x-4 hover:scale-105 transition-all duration-200 ease-in-out">
            <span className={`${value.color} text-3xl`}>{value.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
