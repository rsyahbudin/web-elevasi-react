import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen"; // Impor SplashScreen
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Menunggu beberapa detik untuk splash screen sebelum menampilkan konten lainnya
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Splash screen muncul selama 3 detik
  }, []);

  return (
    <Router>
      <div>
        {loading ? <SplashScreen /> : null} {/* Menampilkan splash screen saat loading */}
        {!loading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
