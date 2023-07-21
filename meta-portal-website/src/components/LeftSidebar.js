import React,{useState} from "react";
import { WalletCard } from "./Cards";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";




const LeftSidebar = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState("");

  const handleWalletSelection = () => {
    onClose();
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    isOpen && (
      <div className="walletbox text-white">
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
            <Link
              to="/"
              className={`${
                activeItem === "Home" ? "border-b-4 border-purple-600" : ""
              }`}
              onClick={() => handleItemClick("Home")}
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="https://preview.themeforest.net/item/metaportal-nft-portfolio-and-landing-page/full_screen_preview/38941507?_ga=2.268939377.1894052259.1687766924-1039897364.1682896096"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                activeItem === "Mint Page" ? "border-b-4 border-purple-600" : ""
              }`}
              onClick={() => handleItemClick("Mint Page")}
            >
              Mint Page
            </a>
          </li>

          <li>
            <a
              href="https://preview.themeforest.net/item/metaportal-nft-portfolio-and-landing-page/full_screen_preview/38941507?_ga=2.268939377.1894052259.1687766924-1039897364.1682896096"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                activeItem === "Collection" ? "border-b-4 border-purple-600" : ""
              }`}
              onClick={() => handleItemClick("Collection")}
            >
              Collection
            </a>
          </li>

          
          <li>
            <a
              href="https://preview.themeforest.net/item/metaportal-nft-portfolio-and-landing-page/full_screen_preview/38941507?_ga=2.268939377.1894052259.1687766924-1039897364.1682896096"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                activeItem === "Pages" ? "border-b-4 border-purple-600" : ""
              }`}
              onClick={() => handleItemClick("Pages")}
            >
              Pages
            </a>
          </li>

          
          <li>
            <a
              href="https://preview.themeforest.net/item/metaportal-nft-portfolio-and-landing-page/full_screen_preview/38941507?_ga=2.268939377.1894052259.1687766924-1039897364.1682896096"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                activeItem === "Blog" ? "border-b-4 border-purple-600" : ""
              }`}
              onClick={() => handleItemClick("Blog")}
            >
              Blog
            </a>
          </li>

          
          <li>
            <a
              href="https://preview.themeforest.net/item/metaportal-nft-portfolio-and-landing-page/full_screen_preview/38941507?_ga=2.268939377.1894052259.1687766924-1039897364.1682896096"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                activeItem === "BlogSingle" ? "border-b-4 border-purple-600" : ""
              }`}
              onClick={() => handleItemClick("BlogSingle")}
            >
             Blog Single
            </a>
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