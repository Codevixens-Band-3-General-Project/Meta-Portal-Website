// BLOG CARD
export const TextCard = (props) => {
  const { num, date, img, heading, text, borderRadius } = props;
  return (
    <div className="text-[#9ba0b8] flex flex-col gap-y-4 text-left px-10 py-10 bg-transparent rounded-lg w-[96%] border border-[#ffffff35] shadow-[0_5px_20px_rgba(0,0,0,0.25)">
      <div className="border-2 rounded-full p-1 w-10 border-t-fuchsia-600 border-r-fuchsia-600 border-b-fuchsia-600 border-l-fuchsia-600">
        <p className="px-[0.33rem] py-[0.20rem] text-[1rem] text-center">
          {num}
        </p>
      </div>
      <p>{date}</p>
      <h3 className="text-[#eff0f5] text-2xl hover:text-fuchsia-600 hover:cursor-pointer">
        {heading}
      </h3>
      <img src={img} style={{ borderRadius }} />
      <p>{text}</p>
      <hr className="border-t w-[25%] border-slate-100/50"></hr>
    </div>
  );
};

// PICTURE CARD
export const PictureCard = ({ img }) => {
  return (
    <div className="bg-transparent rounded-lg w-2/8 border border-[#ffffff35] p-5">
      <img src={img} alt="nft images" className="rounded-lg" />
    </div>
  );
};
export const PictureCardsmall = ({ img }) => {
  return (
    <div className="bg-transparent rounded-lg w-2/8 sm:w-1/5 border border-[#ffffff35] p-5">
      <img src={img} alt="nft images" className="rounded-lg" />
    </div>
  );
};

// PICTURE CARD
export const MintCard = ({ num, text }) => {
  return (
    <div className="text-[#9ba0b8] flex flex-col gap-y-4 text-left p-6 bg-transparent rounded-lg w-[96%] border border-[#ffffff35] shadow-[0_5px_20px_rgba(0,0,0,0.25)">
      <div className="bg-[#d3d2d209] rounded-lg p-12 space-y-3">
        <h1 className="text-4xl font-[800] text-[#17091d] stats ">
        {num}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
