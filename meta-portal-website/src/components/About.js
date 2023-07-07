import React from 'react'
import Leaf from '../images/aboutImg.jpg'
import Button from './Button';

function About() {
  return (
    <>
    <div class="flex">
        <div className="w-1/2">
            <img src={Leaf} alt="Leaf Image" class="w-full"/>
        </div>
        {/* <div className="w-1/2">
            <p>Your content goes here</p>
        </div> */}

<div className="w-1/2 flex flex-col justify-center sm:p-8 sm:w-4/5 text-center sm:mx-auto">
<div className="right_in">
  <h1 className="text-[#eff0f5] text-center sm:text-5xl drop-shadow-[0_2px_2px_#cc00ff] font-[300]" data-text="The Rise of Legends">The Rise of Legends</h1>

  <div className="fn_cs_divider">
    <div className="divider">
      <span />
      <span />
    </div>
  </div>
  <div className="flex flex-col justify-center sm:p-8 sm:w-4/5 text-center sm:mx-auto">
    <div className="text-[#9ba0b8] text-center text-base p-3 sm:p-10 sm:text-xl">
    <p> As the first hero of the Meta Legends, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
    <p>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
    <p>Curabitur pharetra velit eget dignissim varius. In vulputate elit at tortor pellentesque, non pulvinar neque consequat. Aenean tristique odio in libero tincidunt maximus. Nulla pharetra viverra dolor ut blandit. Cras finibus vel tortor eget lacinia. Pellentesque interdum elit non lacinia faucibus. Morbi nec felis auctor, tincidunt lacus sit amet, iaculis ipsum. Phasellus tempus sit amet justo et feugiat. Duis blandit semper lorem, egestas euismod ligula pharetra ac. Sed porta lorem eget neque bibendum, eget euismod justo mollis.</p>
    <p>Donec tristique porttitor sem, eget fermentum elit varius nec. Donec ut orci ipsum. Morbi efficitur felis eget dapibus fermentum. Phasellus sed tellus volutpat, hendrerit leo non, sollicitudin neque. Etiam ac lacus quam. Vivamus suscipit nisl tellus, at congue odio commodo at. Cras ante enim, sodales at pretium et, tempus at libero.</p>
  </div>
  </div>
    <Button onClick={() => console.log('Button clicked!')} className="ml-4">Find us On Discord</Button>
  {/* <a href="https://discord.com/" className="metaportal_fn_button" target="_blank"><span>Find us On Discord</span></a> */}
</div>

				</div>

</div>
</>

  )
}

export default About



