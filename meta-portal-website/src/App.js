import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
// import WalletSidebar from "./components/WalletSidebar";

// import Blog from './components/Blog';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <PageDivider />
        <Collections />
        <PageDivider />
        {/* <Divider/> */}

        <Roadmap />
        <PageDivider />
        <Article />
        <PageDivider />
        <Contact/>
        {/* <WalletSidebar/> */}
        <ScrollToTop/>
        <Footer />
       
        <Routes>
          <Route></Route>

          {/* <Route path="/about" element={<About />}/> */}
          {/* <Route path="/" element={<Home />} />

    <Route path="/" element={<About />}/>
    <Route path="/" element={<Collection/>} /> 
    <Route path="/" element={<Blog/>} /> 
    <Route path="/" element={<Contact />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
