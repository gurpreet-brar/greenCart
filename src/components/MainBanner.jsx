import { assets } from "../assets/assets";

function MainBanner() {
  return (
    <div className="relative">
      <img src={assets.main_banner_bg} className="hidden md:block w-full" />
      <img src={assets.main_banner_bg_sm} className=" md:hidden w-full" />
    </div>
  );
}

export default MainBanner;
