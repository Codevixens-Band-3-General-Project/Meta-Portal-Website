import { Phase, Footsteps, Phaseindicator } from "./Phase";
function Roadmap() {
  return (
    <div className="py-12 sm:px-12">
      <h1 className="text-[#eff0f5] text-2xl text-center py-6 sm:py-12 sm:text-5xl drop-shadow-[0_1px_1.3px_#cc00ff] font-[300]">
        ROADMAP
      </h1>
      <Footsteps />
      <Phaseindicator />
      <Phase />
    </div>
  );
}
export default Roadmap;
