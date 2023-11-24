import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeNew from "/components/HomeNew.jsx";
import Footer from "/components/Footer.jsx";
import About from "/components/About.jsx";
import SinglePlace from "/components/SinglePlace.jsx";
import BlogDetails from "/components/BlogDetails.jsx";
import ContactUs from "../components/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdevs" element={<About />} />
        <Route path="/imprint" element={<About />} />
        <Route path="/place/:id" element={<SinglePlace />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
