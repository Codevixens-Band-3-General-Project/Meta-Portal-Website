import Slider from "react-slick";
import avt1 from "../images/avt1.jpg";
import avt2 from "../images/avt2.jpg";
import avt3 from "../images/avt3.jpg";
import avt4 from "../images/avt4.jpg";
import avt5 from "../images/avt5.jpg";
import avt6 from "../images/avt6.jpg";
import { PictureCard } from "./Cards";
import { useState } from "react";

const images = [avt1, avt2, avt3, avt4, avt5, avt6];
// const slider = React.useRef(null);

function HeaderCar(props) {
  // const [sliderRef, setSliderRef] = useState(null);
  const [ImageIndex, setImageIndex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next bg-white cursor-pointer rounded-full p-1"
        onClick={onClick}
      >
        {">"}
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev bg-white cursor-pointer rounded-full p-1"
        onClick={onClick}
      >
        {"<"}
      </div>
    );
  };
  const settings = {
    // dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    centerMode: true,
    // className:"center",
    // arrows:true,
    speed: 300,
    centerPadding: "10px",
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // adaptiveHeight: true,
    beforeChange: (current, next) => setImageIndex(next),
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
          arrows: false,
        },
      },
    ],
  };

  // className="card flex flex-col sm:flex-row justify-around p-10"
  return (
    <div className="w-[100%] sm:w-[80%] mx-auto sm:py-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <PictureCard
            img={image}
            className={index === ImageIndex ? "slide activeSlide" : "slide"}
          />
        ))}
      </Slider>
      {/* <div className="flex">
        <PrevArrow /> <NextArrow />
      </div> */}
    </div>
  );
}
export default HeaderCar;
