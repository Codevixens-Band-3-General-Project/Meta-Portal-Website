import React from 'react';
import { Link } from "react-router-dom";
import Button from './Button';
import metalogo from '../images/metalogo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <img src='assets/images/logo.png' alt='logo'/> */}
        <img src={metalogo}/>
        <div className="mx-auto flex justify-center items-center">
        <ul className='flex justify-center space-x-4 text-white'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
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
        <Button onClick={() => console.log('Button clicked!')} className="ml-4">CONNECT TO WALLET</Button>

        </div>
      </div>
    </nav>
   
  );
}

export default Navbar;




