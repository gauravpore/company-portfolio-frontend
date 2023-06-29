import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer/Footer";
import ScrollUpButton from "./Components/UI components/ScrollUpButton";

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
      <ScrollUpButton />
    </div>
  );
}

export default App;
