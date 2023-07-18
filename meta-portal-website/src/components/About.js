import React from "react";
import Leaf from "../images/aboutImg.jpg";
import Button from "./Button";
// import Divider from './Divider';
import HeaderCar from "./header-carousel";
// import PictureCard from './picture-card';
import { MintCard, PictureCard, PictureCardsmall } from "./Cards";
import avt7 from "../images/avt7.png";
import videoImg from "../images/video.jpg";
import { useState } from "react";

function About() {

  const [isVideoPlaying,setVideoPlaying] = useState(false)

  const handlePlayVideo = () =>{
    setVideoPlaying(true)
    
  }

  const handleStopVideo = () => {
    setVideoPlaying(false);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2 relative">
            <img src={Leaf} alt="Leaf Image" className="w-full" />

            <div className="absolute inset-y-0 right-12 flex items-center">
                <PictureCard img={require("../images/avt5.jpg")} className="w-[90%]" />
            </div>
        </div>
   

        <div className="w-1/2 flex flesx-col justify-center ssm:p-8 sm:w-4/5 text-center sm:mx-auto">
          <div className="right_in">
            <h1
              className="text-[#eff0f5] text-center sm:text-5xl drop-shadow-[0_2px_2px_#cc00ff] font-[300]"
              data-text="The Rise of Legends"
            >
              The Rise of Legends
            </h1>

            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="flex flex-col justify-center sm:p-8 sm:w-4/5 text-center sm:mx-auto">
              <div className="text-[#9ba0b8] text-center text-base p-3 sm:p-10 sm:text-xl">
                <p>
                  {" "}
                  As the first hero of the Meta Legends, collection has over
                  9,999 unique skins drawn from the different missions and
                  challenges he faced throughout his life.
                </p>
                <p>
                  The artwork has been hand-drawned by Robert Green in the
                  traditional anime style and composited by Layla Efiyo.
                </p>
                <p>
                  Curabitur pharetra velit eget dignissim varius. In vulputate
                  elit at tortor pellentesque, non pulvinar neque consequat.
                  Aenean tristique odio in libero tincidunt maximus. Nulla
                  pharetra viverra dolor ut blandit. Cras finibus vel tortor
                  eget lacinia. Pellentesque interdum elit non lacinia faucibus.
                  Morbi nec felis auctor, tincidunt lacus sit amet, iaculis
                  ipsum. Phasellus tempus sit amet justo et feugiat. Duis
                  blandit semper lorem, egestas euismod ligula pharetra ac. Sed
                  porta lorem eget neque bibendum, eget euismod justo mollis.
                </p>
                <p>
                  Donec tristique porttitor sem, eget fermentum elit varius nec.
                  Donec ut orci ipsum. Morbi efficitur felis eget dapibus
                  fermentum. Phasellus sed tellus volutpat, hendrerit leo non,
                  sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl
                  tellus, at congue odio commodo at. Cras ante enim, sodales at
                  pretium et, tempus at libero.
                </p>
              </div>
            </div>
            <Button
              onClick={() => console.log("Button clicked!")}
              className="ml-4"
            >
              Find us On Discord
            </Button>
            {/* <a href="https://discord.com/" className="metaportal_fn_button" target="_blank"><span>Find us On Discord</span></a> */}
          </div>
        </div>
      </div>


  
<div className="flex justify-center py-10 px-6 sm:px-12 sm:py-12 gap-y-3 ">
<div className="flex flex-col-1 gap-y-5 w-[50%] ">
    <div className="right_in">
      <h1 className="text-[#eff0f5] text-5xl drop-shadow-[0_2px_2px_#cc00ff] font-light" data-text="The Rise of Legends">How to Mint</h1>
      <br/>
      <div className="fn_cs_divider">
        <div className="divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="text-[#9ba0b8] text-base p-3 sm:p-10 sm:text-xl">
      <p>As the first hero of the Meta Legends, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
        <p>The artwork has been hand-drawn by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
        <p>Curabitur pharetra velit eget dignissim varius. In vulputate elit at tortor pellentesque, non pulvinar neque consequat. Aenean tristique odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat. Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget neque bibendum, eget euismod justo mollis.</p>
        <p>Donec tristique porttitor sem, eget fermentum elit varius nec. Donec ut orci ipsum. Morbi efficitur felis eget dapibus fermentum. Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue odio commodo at. Cras ante enim, sodales at pretium et, tempus at libero.</p>
      </div>
      <Button onClick={() => console.log('Button clicked!')} className="mt-4">HOW TO MINT</Button>
      {/* <a href="https://discord.com/" className="metaportal_fn_button" target="_blank"><span>Find us On Discord</span></a> */}
    </div>
  </div>

  <div className="flex flex-col-1 gap-y-5 w-[50%] ">
  <div className="grid grid-cols-2 gap-12">
    <MintCard
    num={`${0}${1}`}
    text={"CONNECT YOUR WALLET"}
    />

            <MintCard num={`${0}${2}`} text={"SELECT YOUR QUANTITY"} />

            <div className="mt-12">
              <MintCard num={`${0}${3}`} text={"CONFIRM THE TRANSACTION"} />
            </div>

            <div className="mt-12">
              <MintCard num={`${0}${4}`} text={"RECEIVE YOUR NFT'S"} />
            </div>

    {isVideoPlaying ? (
        <div className="video-container">
          <iframe
            width="700"
            height="315"
            src="https://www.youtube.com/embed/7e90gBu4pas"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <button onClick={handleStopVideo} className="absolute bottom-2 right-2 px-4 py-2 bg-red-600 text-white rounded">
            X
          </button>
        </div>
      ) : (
<div className="awt-tv relative col-span-2">
  <div className="explore-area">
    <img src={videoImg} alt="Video Image" className="img-fluid w-full h-auto"/>
    <div className="explore-btn absolute inset-0 flex justify-center items-center" id="button1">
      <span data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={handlePlayVideo}>
        <svg width={100} height={60} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.3958 0C10.027 0 0 10.027 0 22.3958C0 34.7647 10.027 44.7917 22.3958 44.7917C34.7647 44.7917 44.7917 34.7647 44.7917 22.3958C44.7917 10.027 34.7647 0 22.3958 0ZM3.125 22.3958C3.125 11.7528 11.7528 3.125 22.3958 3.125C33.0388 3.125 41.6667 11.7528 41.6667 22.3958C41.6667 33.0388 33.0388 41.6667 22.3958 41.6667C11.7528 41.6667 3.125 33.0388 3.125 22.3958Z" fill="white" />
          <path d="M27.607 21.5013L19.1325 17.2641C18.3346 16.8651 17.3958 17.4453 17.3958 18.3374V26.4541C17.3958 27.3462 18.3346 27.9264 19.1325 27.5274L27.607 23.2902C28.344 22.9217 28.344 21.8698 27.607 21.5013Z" fill="white" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>  
  </div>
</div>
 )}
</div>

  </div>
</div>

</>)
  }

export default About;
