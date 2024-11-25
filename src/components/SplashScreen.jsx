import { useState, useEffect } from "react";
import logo from "../assets/projects/logo.png"; // Ganti dengan path logo Anda

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulasi loading selama 3 detik
  }, []);

  return (
    loading ? (
      <div className="flex items-center justify-center w-full h-screen bg-gray-900">
        <img
          src={logo}
          alt="Logo"
          className="w-80 h-80 object-contain animate-pulse" // Menggunakan efek pulse dari Tailwind CSS
        />
      </div>
    ) : null
  );
};

export default SplashScreen;
