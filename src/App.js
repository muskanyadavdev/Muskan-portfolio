import React from "react";
import Home from "./Pages/Home";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hero" element={<Hero />} />

        </Routes>

      </BrowserRouter>
     

    </>
  );
}

export default App;
