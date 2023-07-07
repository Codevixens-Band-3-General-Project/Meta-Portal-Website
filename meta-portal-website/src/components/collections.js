import PictureCard from "./picture-card";
function Collections(props) {
  return (
    <div className="py-10">
      <h1 className="text-[#eff0f5] text-center sm:text-4xl drop-shadow-[0_2px_2px_#cc00ff]">
        OUR COLLECTION
      </h1>
      <div className="card flex flex-col sm:flex-row justify-around p-10">
        <PictureCard img={require("../images/nft.png")} />
        <PictureCard img={require("../images/nft.png")} />
        <PictureCard img={require("../images/nft.png")} />
      </div>
      <div className="flex flex-col justify-center sm:p-8 sm:w-4/5 text-center sm:mx-auto">
        <p className="text-[#9ba0b8] text-center text-base p-3 sm:p-10 sm:text-xl">
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </p>
      </div>
    </div>
  );
}
export default Collections;