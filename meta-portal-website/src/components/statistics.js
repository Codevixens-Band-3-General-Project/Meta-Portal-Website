import { Divider } from "./Divider";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger'
import React,{useState} from "react";


function Statistics(props) {
  const [counterOn,setCounterOn]= useState(false)

  return (
    <ScrollTrigger onEnter={() =>setCounterOn(true)} onExit={() =>setCounterOn(false)}>
    <div className="card flex flex-col sm:flex-row justify-around my-10 sm:px-12 sm:my-12 sm:py-12 border-t border-b border-[#ffffff21] bg-[#00000026]">
      <div className="card flex flex-col gap-2 py-12">
        <h1 className="text-4xl font-[800] text-[#17091d] text-center stats">
          {counterOn &&<CountUp start={1000} end ={9999} duration={2} delay={0}/>}
          
        </h1>
        <p className="text-[#9ba0b8] text-center">Total items</p>
      </div>
      <Divider />
      <div className="card flex flex-col py-12 gap-2">
        <h1 className="text-4xl font-bold text-[#17091d] text-center stats">
        {counterOn &&<CountUp start={0.01} end ={3.9} duration={2} delay={0}/>}
          K+
        </h1>
        <p className="text-[#9ba0b8] text-center">Total Owners</p>
      </div>
      <Divider />
      <div className="card flex flex-col gap-2 py-12">
        <h1 className="text-4xl font-bold text-[#17091d] text-center stats">
        {counterOn &&<CountUp start={0.1} end ={2.4} duration={2} delay={0}/>}
        </h1>
        <p className="text-[#9ba0b8] text-center">Floor price (ETH)</p>
      </div>
      <Divider />
      <div className="card flex flex-col py-12 gap-2">
        <h1 className="text-4xl font-bold text-[#17091d] text-center stats">
        {counterOn &&<CountUp start={0} end ={144} duration={2} delay={0}/>}
          K+
        </h1>
        <p className="text-[#9ba0b8] text-center">Volume traded (ETH)</p>
      </div>
    </div>
    </ScrollTrigger>
  );
}
export default Statistics;
