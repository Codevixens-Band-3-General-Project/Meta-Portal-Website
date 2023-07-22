import { PictureCard, PictureCardsmall } from "./Cards";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import avt1 from "../images/avt1.jpg";
import avt2 from "../images/avt2.jpg";
import avt3 from "../images/avt3.jpg";
import avt4 from "../images/avt4.jpg";
import avt5 from "../images/avt5.jpg";
import avt6 from "../images/avt6.jpg";
import avt7 from "../images/avt7.png";
import Button from "./Button";
function Collections(props) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="py-12">
      <h1 className="text-[#eff0f5] text-2xl text-center sm:text-4xl drop-shadow-[0_1px_1.3px_#cc00ff] font-[300] sm:py-12">
        OUR COLLECTION
      </h1>
      {/* // NFT COLLECTIONS */}
      <div className=" py-10 px-2 sm:px-10 sm:py-12 md:px-12 gap-y-3">
        <div className="relative flex gap-y-4 sm:items-end flex-col sm:flex-row justify-center sm:px-12 gap-x-3 sm:py-3 ">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCard
              img={avt4}
              className="hover:cursor-pointer"
              onMouseEnter={() => setFlip(!flip)}
            />
            <PictureCard
              img={avt2}
              className="hover:cursor-pointer"
              onMouseEnter={() => setFlip(!flip)}
            />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCardsmall
              img={avt3}
              className="hover:cursor-pointer"
              onMouseDown={() => setFlip(!flip)}
            />
            <PictureCardsmall
              img={avt5}
              className="hover:cursor-pointer"
              onMouseDown={() => setFlip(!flip)}
            />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCard
              img={avt2}
              className="hover:cursor-pointer"
              onMouseLeave={() => setFlip(!flip)}
            />
            <PictureCard
              img={avt3}
              className="hover:cursor-pointer"
              onMouseLeave={() => setFlip(!flip)}
            />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCardsmall
              img={avt5}
              className="hover:cursor-pointer"
              onClick={() => setFlip(!flip)}
            />
            <PictureCardsmall
              img={avt6}
              className="hover:cursor-pointer"
              onClick={() => setFlip(!flip)}
            />
          </ReactCardFlip>
        </div>

        {/* // second collection */}
        <div className="flex gap-y-4 sm:items-start flex-col sm:flex-row justify-center sm:px-12 sm:gap-x-3 py-3">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCardsmall
              img={avt6}
              className="hover:cursor-pointer"
              onClick={() => setFlip(!flip)}
            />
            <PictureCardsmall
              img={avt4}
              className="hover:cursor-pointer"
              onClick={() => setFlip(!flip)}
            />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCard
              img={avt4}
              className="hover:cursor-pointer"
              onMouseEnter={() => setFlip(!flip)}
            />
            <PictureCard
              img={avt2}
              className="hover:cursor-pointer"
              onMouseEnter={() => setFlip(!flip)}
            />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCardsmall
              img={avt2}
              className="hover:cursor-pointer"
              onMouseDown={() => setFlip(!flip)}
            />
            <PictureCardsmall
              img={avt3}
              className="hover:cursor-pointer"
              onMouseDown={() => setFlip(!flip)}
            />
          </ReactCardFlip>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <PictureCard
              img={avt2}
              className="hover:cursor-pointer"
              onMouseLeave={() => setFlip(!flip)}
            />
            <PictureCard
              img={avt3}
              className="hover:cursor-pointer"
              onMouseLeave={() => setFlip(!flip)}
            />
          </ReactCardFlip>
        </div>
      </div>
      <div className="flex flex-col justify-evenly gap-y-4 items-center sm:p-8 sm:w-4/5 text-center sm:mx-auto">
        <p className="text-[#9ba0b8] text-center text-base p-3 sm:p-10 sm:text-xl">
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </p>
        <Button
          onClick={() => console.log("Button clicked!")}
          className="text-sm"
        >
          SEE ALL COLLECTION
        </Button>
      </div>
    </div>
  );
}
export default Collections;
