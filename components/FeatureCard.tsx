import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  imgSrc: StaticImageData | string;
  imgAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
}) => {
  return (
    <div className="text-center max-w-72">
      <Image
        src={imgSrc}
        alt={imgAlt}
        className="mx-auto mb-4"
        width={64}
        height={64}
      />
      <h2 className="font-bold text-black">{title}</h2>
      <p className="mt-2 text-gray-500 ">{description}</p>
    </div>
  );
};

export default FeatureCard;
