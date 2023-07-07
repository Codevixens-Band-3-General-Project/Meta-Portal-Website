// import PictureCard from "./picture-card";
import HeaderCar from "./header-carousel";
import Statistics from "./statistics";
import Button from "./Button";


function Home(props) {
  return (
    <div className="py-12">
      <h1 className="text-[#eff0f5] text-center py-2 sm:py-8 sm:text-4xl drop-shadow-[0_1px_1.3px_#cc00ff] font-[300]">
        META LEGENDS
      </h1>
      <HeaderCar />
      {/* Description section */}
      <div className="flex flex-col justify-center items-center sm:p-8 sm:pb-5 sm:w-4/5 text-center sm:mx-auto">
        <p className="text-[#9ba0b8] text-center text-base p-3 sm:p-10 sm:text-xl">
          Meta Legends represent a collection of 17,000 legends categorized by
          level of rarity and generated with hundreds of elements. The Legends
          are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
          IPFS.
        </p>

      </div>
      <Statistics />
    </div>
  );
}
export default Home;
