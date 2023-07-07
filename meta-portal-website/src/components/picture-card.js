function PictureCard(props) {
  return (
    <div className="bg-transparent rounded-lg w-2/8 border border-[#ffffff25] p-5">
      <img src={props.img} alt="nft images" className="rounded-lg" />
    </div>
  );
}
export default PictureCard;
