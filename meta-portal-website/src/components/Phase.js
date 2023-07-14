import Slider from "react-slick";
function Phase() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    lazyload: true,
    centerMode: true,
    speed: 300,
    centerPadding: 0,
    slidesToShow: 4,
  };

  // className="flex justify-evenly sm:p-5 sm:gap-x-7 sm:mx-8"

  return (
    <div className="w-[90%] sm:p-5 mx-auto">
      <Slider {...settings} className="">
        <RoadmapCards
          phase={`PHASE ${0}${1}`}
          date={`October ${0}${9}, ${2022}`}
          heading={"Mini Game Launch For Community"}
        />
        <RoadmapCards
          phase={`PHASE ${0}${2}`}
          date={`October ${17}, ${2022}`}
          heading={"New Set #20 is Coming Up"}
        />
        <RoadmapCards
          phase={`PHASE ${0}${3}`}
          date={`October ${28}, ${2022}`}
          heading={"Metaverse 3.0 Launch"}
        />
        <RoadmapCards
          phase={`PHASE ${0}${4}`}
          date={`November ${11}, ${2022}`}
          heading={"Female Set #20 is Coming Up"}
        />
        <RoadmapCards
          phase={`PHASE ${0}${4}`}
          date={`November ${11}, ${2022}`}
          heading={"Female Set #20 is Coming Up"}
        />
        <RoadmapCards
          phase={`PHASE ${0}${4}`}
          date={`November ${11}, ${2022}`}
          heading={"Female Set #20 is Coming Up"}
        />

        <RoadmapCards
          phase={`PHASE ${0}${4}`}
          date={`November ${11}, ${2022}`}
          heading={"Female Set #20 is Coming Up"}
        />
      </Slider>
    </div>
  );
}

function RoadmapCards(props) {
  return (
    <div className="bg-transparent rounded-lg w-2/8 sm:w-3/12 border border-[#ffffff35] pb-5 text-[#88888a]">
      <p className="text-[#9ba0b8] bg-[#ffffff1a] w-[60%] px-[2rem] py-2 rounded-tl-lg rounded-br-lg">
        {props.phase}
      </p>
      <div className="flex flex-col gap-y-3 py-8 px-8 text-left">
        <p>{props.date}</p>
        <h4 className="text-white ">{props.heading}</h4>
        <p>
          Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel
          orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere
          nibh a mi molestie, sit amet ornare lectus interdum.
        </p>
      </div>
    </div>
  );
}

function Footsteps() {
  return (
    <div className="rounded-lg border-dashed border-2 sm:mx-auto my-4 border-[#ffffff35] px-8 py-8 w-[91%]">
      <div className="px-12 mx-2 py-6 bg-[url('./images/roadmap.png')] bg-repeat-x bg-center overflow-hidden"></div>
    </div>
  );
}

function Phaseindicator() {
  return (
    <div className="relative">
      <div className="w-[99%] py-8 px-12 mx-2">
        <hr className="border-t border-slate-50/10"></hr>
      </div>
      <div className="absolute inset-x-0 top-6 flex justify-between px-12 w-[83%]">
        <div className="bg-[#140311b4] border-4 rounded-full w-2 p-1 border-t-fuchsia-600 border-r-fuchsia-600 border-b-fuchsia-600 border-l-fuchsia-600 ml-10"></div>
        <div className="bg-[#140311b4] border-4 rounded-full w-2 p-1 border-t-fuchsia-600 border-r-fuchsia-600 border-b-fuchsia-600 border-l-fuchsia-600 ml-8"></div>
        <div className="bg-[#140311b4] border-4 rounded-full w-2 p-1 border-t-fuchsia-600 border-r-fuchsia-600 border-b-fuchsia-600 border-l-fuchsia-600 ml-8"></div>
        <div className="bg-[#140311b4] border-4 rounded-full w-2 p-1 border-t-fuchsia-600 border-r-fuchsia-600 border-b-fuchsia-600 border-l-fuchsia-600 ml-8"></div>
      </div>
    </div>
  );
}

export { Phase, Footsteps, Phaseindicator };
