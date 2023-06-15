import "./App.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProductsPage from "./Pages/ProductsPage";
import IndustryPage from "./Pages/IndustryPage";
import ContactPage from "./Pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/industry' element={<IndustryPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
