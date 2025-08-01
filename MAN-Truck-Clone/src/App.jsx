// import React from "react";
import "./App.css";
import { AboutCompany } from "./components/About";
import { CallToAction } from "./components/Careers";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductsServices } from "./components/Product&Services";

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <Header />
      <HeroSection />
      <ProductsServices />
      <AboutCompany />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
