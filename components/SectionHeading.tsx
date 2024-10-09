const SectionHeading = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center">
      <div className="w-1 h-8 bg-accent mr-2"></div>
      <h1
        className="text-4xl font-bold text-black"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        {text}
      </h1>
    </div>
  );
};

export default SectionHeading;
