import backgroundPng from "../Public/assets/MessageBackground.png";

export default function MessageSection() {
  return (
    <div
      className="w-full  text-white p-6 md:p-12 relative overflow-hidden h-[30rem] flex flex-col justify-center items-center bg-[#2F2F2F]"
      style={{
        backgroundImage: `url(${backgroundPng})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-4xl text-center">
        {" "}
        {/* Center text */}
        <p className="text-sm md:text-base mb-2">
          India faces a critical challenge in education.
        </p>
        <p className="text-secondary text-lg md:text-xl mb-4">
          But here's the good news:
        </p>
        <h1 className="text-6xl md:text-6xl font-light mb-6">
          <span className="font-thin text-secondary">Change is</span>{" "}
          <span className="text-secondary font-extrabold">POSSIBLE!</span>
        </h1>
        <p className="text-sm md:text-base mb-6">
          SNIPE can equip your child with the knowledge and skills to navigate
          roads safely. Our engaging program empowers them to become responsible
          road users, building a safer future for everyone.
        </p>
        <a
          href="#join-movement"
          className="inline-block text-secondary underline font-semibold transition-transform hover:scale-105"
        >
          Join the SNIPE Movement Today
        </a>
        <a href="" className="text-secondary ml-2">
          →
        </a>
      </div>
    </div>
  );
}
