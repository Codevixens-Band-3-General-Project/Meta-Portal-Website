import {PictureCard} from "./Cards";
function HeaderCar(props) {
  return (
    <div className="card flex flex-col sm:flex-row justify-around p-10">
      <PictureCard img={require("../images/nft.png")} />
      <PictureCard img={require("../images/nft.png")} />
      <PictureCard img={require("../images/nft.png")} />
    </div>
  );
}
export default HeaderCar;
