 export const PictureCard = (props) =>{
  return (
    <div className="bg-transparent rounded-lg w-2/8 border border-[#ffffff35] p-5">
      <img src={props.img} alt="nft images" className="rounded-lg" />
    </div>
  );
}
export const PictureCardsmall = (props)=> {
  return (
    <div className="bg-transparent rounded-lg w-2/8 sm:w-1/5 border border-[#ffffff35] p-5">
      <img src={props.img} alt="nft images" className="rounded-lg" />
    </div>
  );
}


