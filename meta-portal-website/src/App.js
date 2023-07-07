import "./App.css";
import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Collection from './components/Collection';
// import Blog from './components/Blog';


const App = () => {
  return (
<BrowserRouter>
<Navbar />


<Footer/>
  <Routes>
    <Route></Route>
    {/* <Route path="/" element={<Home />} />
    <Route path="/" element={<About />}/>
    <Route path="/" element={<Collection/>} /> 
    <Route path="/" element={<Blog/>} /> 
    <Route path="/" element={<Contact />} />  */}
  </Routes>
  </BrowserRouter>
  );
}

export default App;


