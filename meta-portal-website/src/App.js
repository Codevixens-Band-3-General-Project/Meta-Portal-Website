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
