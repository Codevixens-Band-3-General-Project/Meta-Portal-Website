import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/homepage";
import About from './components/About';
// import Contact from './components/Contact';
// import Collection from './components/Collection';
// import Blog from './components/Blog';
// import PictureCard from "./components/picture-card";
// import HeaderCar from "./components/header-carousel";


// import About from "./pages/About";



const App = () => {
  return (
<div className="App">
<BrowserRouter>
<Navbar />
<Home/>
<About/>

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
