import React from "react";
import { WalletCard } from "./Cards";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram,faFacebook,faTwitter} from '@fortawesome/free-solid-svg-icons';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook} from '@fortawesome/free-solid-svg-icons';
import { faBehance, faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";



const LeftSidebar = ({ isOpen, onClose }) => {
  const handleWalletSelection = () => {
    onClose();
  };
  return (
    isOpen && (
      <div className="walletbox text-white">
        {/* <div className="title_holder">
          <h1 className="pb-8 sm:textl md:text-2xl">Connect Wallet</h1>
          <p>Connect with one of our available wallet</p>
          <p className="pb-8">providers or create a new one.</p>
        </div> */}
        <div className="list_holder flex flex-col items-center justify-between gap-y-6 pb-8">
          <div>
            <WalletCard
              img={require("../images/opensea.png")}
              text={"OPENSEA"}
              onClick={handleWalletSelection}
            />
          </div>
          <div>
            <WalletCard
              img={require("../images/discord.png")}
              text={"DISCORD"}
              onClick={handleWalletSelection}
            />
          </div>
        </div>
        <ul className="text-white gap-y-6 pb-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Mint Page</Link>
            </li>
            <li>
              <Link to="/">Collection</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Blog Single</Link>
            </li>
          </ul>
        <div className="gap-y-6 pb-8">
        <p>Copyright 2022-Designed &</p>
          <p>Developed by Frnify</p>
        </div>

          <div className="mx-auto flex justify-center items-center px-12">
          <ul className="flex justify-center space-x-4 text-white">
            <li>
              <Link to="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter}/>
		          </Link>
            </li>
            <li>
            <Link to="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />

            </Link>
            </li>
            <li>
            <Link to="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            </Link>
            </li>
            <li>
            <Link to="https://www.pinterest.com/your_pinterest_page" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterestP} />            
            </Link>
            </li>
            <li>
            <Link to="https://www.behance.com/your_behance_page" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBehance}/>
            </Link>
            </li>
          </ul>




          </div>
      </div>
    )
  );
};

export default LeftSidebar;