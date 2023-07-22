import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/homepage";
import About from "./components/About";
import Contact from "./components/Contact";
import Article from "./components/Articles";
import Collections from "./components/collections";
import Roadmap from "./components/roadmap";
import { PageDivider } from "./components/Divider";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <div className="blob w-[50%] sm:w-[50%] h-[400px] rounded-full fixed top-0 right-0 left-0 bottom-0 -z-[1] blur-3xl bg-opacity-10 grad mx-auto  "></div>
      <Navbar />
      <section id="home">
        <Home />
      </section>

      <PageDivider />

      <section id="about">
        <About />
      </section>

      <PageDivider />

      <section id="collection">
        <Collections />
      </section>

      <PageDivider />

      <Roadmap />


      <section id="blog">
        <Article />
      </section>

      <PageDivider />

      <section id="contact">
        <Contact />
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
