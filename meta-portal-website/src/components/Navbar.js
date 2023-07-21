import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import Button from "./Button";
import { MenuBar } from "./Cards.js";
import metalogo from "../images/metalogo.png";
import WalletSidebar from "./WalletSidebar";
import LeftSidebar from "./LeftSidebar";

const Navbar = () => {
  const [walletSidebarOpen, setWalletSidebarOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const walletSidebarRef = useRef(null);
  const leftSidebarRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (leftSidebarRef.current && !leftSidebarRef.current.contains(event.target)) ||
        (walletSidebarRef.current && !walletSidebarRef.current.contains(event.target))
      ) {
        setLeftSidebarOpen(false);
        setWalletSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const handleWalletSidebar = (event) => {
    event.stopPropagation();
    setWalletSidebarOpen(!walletSidebarOpen);
  };

  const handleLeftSidebar = (event) => {
    event.stopPropagation();
    setLeftSidebarOpen(!leftSidebarOpen);
  };
  return (
    <nav className="bg-[#00000032] px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <MenuBar onClick={handleLeftSidebar} className="mr-6" />
          {leftSidebarOpen && (
            <div
              ref={leftSidebarRef}
              className="fixed top-0 min-h-screen bottom-0 left-0 w-1/4 bg-[#1b121d] p-4 text-white z-50 flex flex-col items-center justify-center"
            >
              <LeftSidebar isOpen={true} onClose={handleLeftSidebar} />
            </div>
          )}
        </div>
        <img src={metalogo} />
        <div className="mx-auto flex justify-center items-center">
        <ul className="flex justify-center space-x-4 text-white">
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="collection" smooth={true} duration={500}>Collection</Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500}>Blog</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
        {/* <div className="mx-auto flex justify-center items-center">
          <ul className="flex justify-center space-x-4 text-white">             
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
               <Link to="/collection">Collection</Link>
             </li>
             <li>
               <Link to="/blog">Blog</Link>
             </li>
             <li>
               <Link to="/contact">Contact</Link>
             </li>
           </ul>
        </div> */}

        <div>
          <Button onClick={handleWalletSidebar} className="ml-4">
            CONNECT TO WALLET
          </Button>
          {walletSidebarOpen && (
            <div
              ref={walletSidebarRef}
              className="fixed top-0 bottom-0 right-0 w-1/4 bg-[#1b121d] p-4 text-white z-50 flex flex-col items-center justify-center"
            >
              <WalletSidebar isOpen={true} onClose={handleWalletSidebar} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
