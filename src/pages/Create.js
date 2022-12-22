import ScrollToTop from "../ScrollToTop";
import Header from "../Header";

const Create = ({ user, logout, currentUserFromDb }) => {
  return (
    <>
      <Header
        user={user}
        logout={logout}
        currentUserFromDb={currentUserFromDb}
      />
      <div className="py-[100px] px-3 sm:px-[100px]">
        <h1 className="text-[1.75rem] sm:text-[2.5rem] mb-8 sm:mb-[50px] font-[700] tracking-wider">
          Create new sticky note
        </h1>
        <div className="">
          <div className="w-[fit-content] p-5 sm:p-[30px] border-2 border-rose-500 rounded-lg">
            <h1 className="text-[1.5rem] sm:text-[2rem] font-[700] text-white">
              Title here
            </h1>
            <h2 className="text-[1rem] mt-[20px] text-[#ffab91]">
              <span className="text-[#ffab91]">Created :</span> date here
            </h2>
          </div>
          <div className="w-full p-5 sm:p-[30px] mt-[60px] border-2 border-[#ffab91] rounded-lg">
            <p className="text-[1.25rem]">body here</p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Create;
