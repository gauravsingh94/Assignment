import Image from "next/image";
import HandIconSvg from "../Public/assets/HandIcon.svg";
import LensSvg from "../Public/assets/LensIcon.svg";
import PlayIconSvg from "../Public/assets/PlayIcon.svg";
import RocketSvg from "../Public/assets/RocketLogo.svg";
import FeatureCard from "./FeatureCard";

const HeroSection = () => {
  return (
    <div className="text-center py-16 px-4 bg-white flex flex-col items-center">
      <h1 className="text-5xl font-bold text-black">Snipe Assignment</h1>
      <p className="text-xl text-secondary mt-4 font-bold">
        An Initiative to Create Education for the Future!
      </p>
      <button className="mt-8 bg-secondary text-white font-bold py-2 px-6 rounded-md text-lg flex items-center justify-center mx-auto">
        <Image src={PlayIconSvg} alt="Play Icon" height={20} />
        <i className="fas fa-play mr-2"></i> Watch Intro
      </button>

      <div className="grid grid-cols-1 gap-8 mt-12 w-full max-w-6xl lg:grid-cols-3">
        <div className="flex justify-center">
          <FeatureCard
            imgSrc={RocketSvg}
            imgAlt="Rocket Svg"
            title="OUR MISSION"
            description="Empowering children (Grades 1-12) with vital education knowledge and skills."
          />
        </div>
        <div className="flex justify-center">
          <FeatureCard
            imgSrc={LensSvg}
            imgAlt="Join Our Cause"
            title="OUR MISSION"
            description="Explore our site and help create safer roads for future generations."
          />
        </div>
        <div className="flex justify-center">
          <FeatureCard
            imgSrc={HandIconSvg}
            imgAlt="What We Offer"
            title="OUR MISSION"
            description="Access free modules and activities that teach essential education skills."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
