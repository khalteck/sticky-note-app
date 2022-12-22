const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-black/90 flex justify-center items-center z-50">
      <div className="bg-[#252525] text-white text-[1.2rem] md:text-[2rem] font-bold w-[80%] md:w-[40%] py-[25px] md:py-[50px] rounded-lg flex justify-center items-center">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
