import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/homepage";
import About from './components/About';
import Collections from './components/collections';
// import Contact from './components/Contact';
// import Blog from './components/Blog';


const App = () => {
  return (
<div className="App">
<BrowserRouter>
<Navbar />
<Home/>
<About/>
<Collections/>

<Footer/>
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
