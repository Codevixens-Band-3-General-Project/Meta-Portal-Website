import React, { useState,useEffect,useRef} from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import metalogo from '../images/metalogo.png';
import WalletSidebar from './WalletSidebar';

const Navbar = () => {
  const [walletSidebarOpen, setWalletSidebarOpen] = useState(false)


  const buttonRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        walletSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setWalletSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [walletSidebarOpen]);


  const handleWalletSidebar = () => {
    setWalletSidebarOpen(!walletSidebarOpen);
  };

  return (
    <nav className="bg-[#00000032] p-4">
      <div className="container mx-auto flex justify-between items-center">
      <img src={metalogo}/>
        <div className="mx-auto flex justify-center items-center">
          <ul className='flex justify-center space-x-4 text-white'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Collection</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        {/* ... */}
        <div>
          <Button ref={buttonRef} onClick={handleWalletSidebar} className="ml-4">
            CONNECT TO WALLET
          </Button>
          {walletSidebarOpen && (
            <div ref={sidebarRef} className="fixed top-0 bottom-0 right-0 w-1/4 bg-[#1b121d] p-4 text-white z-50 flex flex-col items-center justify-center">
              <WalletSidebar isOpen={true} onClose={() => setWalletSidebarOpen(false)} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

