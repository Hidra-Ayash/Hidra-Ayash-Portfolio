import React, { useEffect, useState } from "react";
import StarryBackground from "./components/partciles";
import Navbar from "./files/Navbar";
import "./App.css";
import Home from "./files/Home";
import About from "./files/About";
//Router
import { Routes, BrowserRouter, Route } from "react-router-dom";
//External Import
import LoadProgress from "./files/LoadProgress";
import Footer from "./files/Footer";
import Projects from "./files/Projects";
import Alert from "./files/Alert";
import PageNotFound from "./PageNotFound";
export default function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);
  if (load) {
    return <LoadProgress />;
  }
  return (
    <>
      {" "}
      <BrowserRouter>
        {" "}
        <div className="particles">
          <StarryBackground />
        </div>{" "}
        <div className="component">
          <Navbar />
        </div>
        {/* Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}
