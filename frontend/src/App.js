import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import SustainabilityPage from "@/pages/SustainabilityPage";
import GlobalNetworkPage from "@/pages/GlobalNetworkPage";
import WhyChooseUsPage from "@/pages/WhyChooseUsPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <div className="grain">
      <BrowserRouter>
        <SmoothScroll>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/global-network" element={<GlobalNetworkPage />} />
              <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </SmoothScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
