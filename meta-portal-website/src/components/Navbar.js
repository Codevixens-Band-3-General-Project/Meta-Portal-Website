import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import metalogo from '../images/metalogo.png'
import WalletSidebar from './WalletSidebar';

const Navbar = () => {
  const[walletSidebarOpen,setWalletSidebarOpen] = useState(false)

  const walletSidebar = () => {
    setWalletSidebarOpen(!walletSidebarOpen)

  }
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
        <div>
        <Button onClick={walletSidebar} className="ml-4">CONNECT TO WALLET</Button>

        </div>
      </div>
      {walletSidebarOpen && <WalletSidebar/>}

    </nav>
   
  );
}

export default Navbar;




