import { PictureCard, PictureCardsmall } from "./Cards";
import Button from "./Button";
function Collections(props) {
  return (
    <div className="py-12">
      <h1 className="text-[#eff0f5] text-2xl text-center sm:text-4xl drop-shadow-[0_1px_1.3px_#cc00ff] font-[300] sm:py-12">
        OUR COLLECTION
      </h1>
      {/* // NFT COLLECTIONS */}
      <div className=" py-10 px-6 sm:px-8 sm:py-12 gap-y-3">
        <div className="card flex gap-y-4 sm:items-end flex-col sm:flex-row justify-around sm:px-12 gap-x-6 sm:py-3 ">
          <PictureCard img={require("../images/nft.png")} />
          <PictureCardsmall img={require("../images/nft.png")} />
          <PictureCard img={require("../images/nft.png")} />
          <PictureCardsmall img={require("../images/nft.png")} />
        </div>
        <div className="card flex gap-y-4 sm:items-start flex-col sm:flex-row justify-around sm:px-12 sm:gap-x-6 py-3">
          <PictureCardsmall img={require("../images/nft.png")} />
          <PictureCard img={require("../images/nft.png")} />
          <PictureCardsmall img={require("../images/nft.png")} />
          <PictureCard img={require("../images/nft.png")} />
        </div>
      </div>
      <div className="flex flex-col justify-evenly gap-y-4 items-center sm:p-8 sm:w-4/5 text-center sm:mx-auto">
        <p className="text-[#9ba0b8] text-center text-base p-3 sm:p-10 sm:text-xl">
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </p>
        <Button onClick={() => console.log("Button clicked!")}>
          SEE ALL COLLECTION
        </Button>
      </div>
    </div>
  );
}
export default Collections;
