import { Divider } from "./Divider";
function Statistics(props) {
  return (
    <div className="card flex flex-col sm:flex-row justify-around my-10 sm:px-12 sm:my-12 sm:py-12 border-t border-b border-[#ffffff21] bg-[#00000026]">
      <div className="card flex flex-col gap-2 py-12">
        <h1 className="text-4xl font-[800] text-[#17091d] text-center stats">
          9999
        </h1>
        <p className="text-[#9ba0b8] text-center">Total items</p>
      </div>
      <Divider />
      <div className="card flex flex-col py-12 gap-2">
        <h1 className="text-4xl font-bold text-[#17091d] text-center stats">
          3.9K+
        </h1>
        <p className="text-[#9ba0b8] text-center">Total Owners</p>
      </div>
      <Divider />
      <div className="card flex flex-col gap-2 py-12">
        <h1 className="text-4xl font-bold text-[#17091d] text-center stats">
          2.4
        </h1>
        <p className="text-[#9ba0b8] text-center">Floor price (ETH)</p>
      </div>
      <Divider />
      <div className="card flex flex-col py-12 gap-2">
        <h1 className="text-4xl font-bold text-[#17091d] text-center stats">
          144K+
        </h1>
        <p className="text-[#9ba0b8] text-center">Volume traded (ETH)</p>
      </div>
    </div>
  );
}
export default Statistics;
