import Slider from "react-slick";
import avt1 from "../images/avt1.jpg";
import avt2 from "../images/avt2.jpg";
import avt3 from "../images/avt3.jpg";
import avt4 from "../images/avt4.jpg";
import avt5 from "../images/avt5.jpg";
import avt6 from "../images/avt6.jpg";
import avt7 from "../images/avt7.png";
import { PictureCard } from "./Cards";
import { useState } from "react";

const images = [avt2, avt3, avt4, avt5, avt6];

function HeaderCar(props) {
  // const [sliderRef, setSliderRef] = useState(null);
  const [ImageIndex, setImageIndex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className=" arrow next
cursor-pointer rounded-full text-[#ffffff79] text-base"
        onClick={onClick}
      >
        <div className="flex flex-row items-center justify-between gap-x-4 ">
          <div className="bg-[#e7e5e505] rounded-full w-1/8 border-2 border-[#ffffff79] p-1"></div>
          <div className="bg-[#e7e5e505] rounded-full border-2 border-[#ffffff79] px-3 py-1">
            {">"}
          </div>
          <div className="bg-[#e7e5e505] rounded-full w-1/8 border-2 border-[#ffffff79] p-1"></div>
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev 
cursor-pointer text-[#ffffff79]"
        onClick={onClick}
      >
        <div className="flex flex-row items-center justify-between gap-x-4 ">
          <div className="bg-[#e7e5e505] rounded-full w-1/8 border-2 border-[#ffffff79] p-1"></div>
          <div className="bg-[#e7e5e505] rounded-full border-2 border-[#ffffff79] px-3 py-1">
            {"<"}
          </div>
          <div className="bg-[#e7e5e505] rounded-full w-1/8 border-2 border-[#ffffff79] p-1"></div>
        </div>
      </div>
    );
  };
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyload: true,
    centerMode: true,
    speed: 300,
    centerPadding: 0,
    slidesToShow: 3,
    // className: "carousel",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // adaptiveHeight: true,
    beforeChange: (current, next) => {
      setImageIndex(next);
    },
    responsive: [
      // {
      //   breakpoint:1024,
      //   settings:{
      //     slidesToShow:3,
      //   }
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // className="card flex flex-col sm:flex-row justify-around p-10"
  return (
    <div className="w-[95%] sm:w-[80%] mx-auto sm:py-10 min-h-[15rem] sm:min-h-[27rem]">
      <Slider {...settings}>
        {images.map((image, index) => {
          const isActive = ImageIndex === index;
          const isBefore =
            ImageIndex === index - 1 ||
            ImageIndex === images[images.length - 1];
          const isAfter = ImageIndex === index + 1;
          return (
            <div>
              <PictureCard
                img={image}
                className={`${isActive ? "activeSlide" : ""} ${
                  isBefore ? "before" : ""
                } ${isAfter ? "after" : ""} h-[18rem] sm:h-[25rem] py-6 pb-2`}
              />
              <div
                className={`${isActive ? "activeSlide" : ""} ${
                  isBefore ? "before" : ""
                } ${
                  isAfter ? "after" : ""
                }  shad`}
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
export default HeaderCar;
