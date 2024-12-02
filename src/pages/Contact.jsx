import { IoArrowForwardCircle } from "react-icons/io5";
import Image from "../assets/projects/bgabu.jpg";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Buat pesan untuk dikirim ke WhatsApp
    const whatsappMessage = `Hi, my name is ${name}. My email is ${email}. Here's my message: ${message}`;
    const whatsappUrl = `https://wa.me/6282231545981?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Buka URL WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-20 md:mt-0">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-500  p-8 text-white flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Image})`, // Sesuaikan dengan path gambar Anda.image`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="text-left  bg-opacity-50 p-8 rounded-md z-10">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="mb-4">
            Reach out to us using the contact form or details below.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Our Office</h2>
          <p>123 Business St., Suite 456, City, Country</p>
          <h2 className="text-2xl font-semibold mt-4">Contact Details</h2>
          <ul>
            <li>Email: contact@company.com</li>
            <li>Phone: +62 822-3154-5981</li>
            <li>Website: www.company.com</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-center justify-center z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-700">Send Us Messages</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Fill out the form below to get in touch.
          </p>
        </div>

        <form className="w-full max-w-lg" onSubmit={handleFormSubmit}>
          <label className="input input-bordered flex items-center gap-2 bg-white mb-4">
            Name
            <input
              type="text"
              name="name"
              className="grow"
              placeholder=""
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 bg-white mb-4">
            Email
            <input
              type="email"
              name="email"
              className="grow "
              placeholder=""
              required
            />
          </label>

          <label className="block text-gray-700 mb-4 textarea textarea-bordered bg-white">
            Message
            <textarea
              name="message"
              className="textarea grow w-full mt-2 h-32 resize-none bg-white"
              placeholder=""
              required
            ></textarea>
          </label>

          {/* Custom Button */}
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="flex items-center  btn btn-success bg-green-600 hover:bg-green-800 text-white  text-md font-medium"
            >
              Send Messages{" "}
              <span>
                <IoArrowForwardCircle />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
