import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";

// scroll animation libray
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />

        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
