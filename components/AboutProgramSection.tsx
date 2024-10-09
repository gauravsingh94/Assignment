import Image from "next/image";
import GroupSvg from "../Public/assets/GroupImage.svg";
import SchoolSvg from "../Public/assets/School.svg";

const AboutProgramSection = () => {
  return (
    <div className="w-full mx-auto p-6 text-black">
      <p className="text-lg mb-4">
        The SNIPE program empowers children to be safe on the roads. Our
        interactive lessons teach them the skills they need to navigate as
        pedestrians, cyclists, and passengers. With fun activities and
        age-appropriate learning, SNIPE helps kids become confident and
        responsible road users.
      </p>
      <h2 className="text-xl font-bold mb-2">Benefits</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Aligns with UN SDGs for safety and education</li>
        <li>
          Based on guidelines issued by the National Highway Authority of India
          (NHAI) and the Ministry of Road Transport & Highways (MORTH)
          initiatives
        </li>
        <li>Reaches over 10 million students across 8,000+ schools</li>
      </ul>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-80 border-2 border-secondary rounded-lg p-6 flex items-center justify-center space-x-4">
          <Image src={SchoolSvg} alt="School svg" height={50} />
          <div className="text-center">
            <p className="text-2xl font-bold">8,000+</p>
            <p>Schools</p>
          </div>
        </div>
        <div className="w-80 border-2 border-secondary rounded-lg p-6 flex items-center justify-center space-x-4">
          <Image src={GroupSvg} alt="Group svg" height={50} />
          <div className="text-center">
            <p className="text-2xl font-bold">1,000,000+</p>
            <p>Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProgramSection;
