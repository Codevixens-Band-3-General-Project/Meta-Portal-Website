import { Link } from 'react-router-dom';
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
export const PictureCard = ({ img, style }) => {
  return (
    <div className={`bg-transparent rounded-2xl w-2/8 border border-[#ffffff35] p-5 ${style}`}>
      <img src={img} alt="nft images" className="rounded-2xl" />
    </div>
  );
};
export const PictureCardsmall = ({ img }) => {
  return (
    <div className="bg-transparent rounded-2xl w-2/8 sm:w-2/5 border border-[#ffffff35] p-3">
      <img src={img} alt="nft images" className="rounded-2xl" />
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
}
export const WalletCard = ({img,text}) =>{
  return (
    <div className='border-2 border-purple-600 flex flex-col items-center gap-y-3 py-8 px-3 w-48'>
      <img src={img} alt="img"/>
      <p>{text}</p>
      
    </div>
  )
}

// export const WalletCard = ({img,text}) =>{
//   return (
//     <div className="absolutew-200 mx-auto px-23 py-17 bg-gray-900 flex items-center flex-col ">
//     <Link to="/" className="absolute block top-0 left-0 right-0 bottom-0 z-15" />
//     <span className="icon w-50 h-50 bg-black flex items-center justify-center rounded-full relative mb-9">
//       <img src={img} alt="" className="z-5" />
//     </span>
//     <span className="text text-base font-medium uppercase text-gray-100">
//       {text}
//     </span>
//   </div>

//   )


//   }

;

