import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "./Components/PreLoader/Preloader";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer/Footer";
import ScrollUpButton from "./Components/UI components/ScrollUpButton";

// scroll animation library
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the desired delay time for the Preloader

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='App'>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
          <ScrollUpButton />
        </>
      )}
    </div>
  );
}

export default App;
