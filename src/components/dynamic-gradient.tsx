const DynamicGradient = () => {
  return (
    <>
      <div className="absolute top-1/6 left-1/3 w-full h-full blob blur-[250px] bg-blue-500" />
      <div className="absolute z-10 top-1/3 left-1/3 w-full h-full blob blur-[250px] bg-[#000114]" />
      <div className="absolute z-10 -top-1/2 -left-1/2 w-full h-full blob blur-[250px] bg-[#000114]" />
    </>
  );
};

export default DynamicGradient;
