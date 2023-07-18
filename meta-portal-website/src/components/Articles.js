import { TextCard, } from "./Cards";
import Button from "./Button";
function Article() {
  return (
    <div className="py-12 px-3 sm:px-12">
      <h1 className="text-[#eff0f5] text-2xl text-center py-8 sm:py-12 sm:text-4xl drop-shadow-[0_1px_1.3px_#cc00ff] font-[300]">
        LATEST ARTICLES
      </h1>

      {/*ARTICLES */}

      <div className="flex flex-col sm:flex-row justify-center py-6 sm:px-8 sm:py-12 md:py-12 gap-y-3 ">
        <div className="flex sm:flex-col-1 gap-y-5 sm:w-[50%] pt-6 ">
          <TextCard
            num={`${0}${1}`}
            date={"August 09, 2022 / MetaVerse / 4 Comment"}
            heading={"Reasons Why People Use Discord"}
            img={require("../images/avt5.jpg")}
            borderRadius={"8px"}
          />
        </div>
        <div className="flex flex-col sm:items-end gap-y-5 sm:w-[50%]">
          <TextCard
            num={`${0}${2}`}
            date={"August 09, 2022 / MetaVerse / 4 Comment"}
            heading={"Reasons Why People Use Discord"}
          />
          <TextCard
            num={`${0}${3}`}
            date={"August 09, 2022 / MetaVerse / 4 Comment"}
            heading={"Graffiti Racer Research Center #10"}
          />
          <TextCard
            num={`${0}${4}`}
            date={"August 09, 2022 / MetaVerse / 4 Comment"}
            heading={"Reasons Why People Use Discord"}
          />
        </div>
      </div>

      {/* Button to read */}
      <div className="flex flex-col sm:flex-row justify-between gap-y-3 sm:px-12 sm:gap-x-8 pb-12 ">
        <Button
          onClick={() => console.log("Button clicked!")}
          className="sm:w-[50%] py-3 sm:py-2 text-sm"
        >
          READ ALL ARTICLES
        </Button>
        <p className="text-[#9ba0b8] text-base sm:px-4 text-left sm:w-[50%]">
          We’re a team of creatives who are excited about unique ideas and
          create consectetur adipiscing elit. Etiam vitae purus a lectus semper.
        </p>
      </div>
    </div>
  );
}
export default Article;
