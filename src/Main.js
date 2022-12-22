import hero from "./images/searching-error.svg";
import crown from "./images/handy-line-line.png";
import Header from "./Header";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Main = ({ user, logout, currentUserFromDb }) => {
  return (
    <>
      <Header
        user={user}
        logout={logout}
        currentUserFromDb={currentUserFromDb}
      />
      <main className="bg-home bg-repeat min-h-screen">
        <section className="w-full min-h-screen bg-[#252525]/95 relative px-3 sm:px-[100px] sm:pt-[130px] pt-20 pb-8">
          {user && (
            <div className="w-[fit-content] px-5 py-2 sm:p-5 mb-4 sm:mb-16 border-2 border-[#ffab91] rounded-lg relative">
              <p className="text-[0.85rem] sm:text-[1rem]">
                Logged in, {currentUserFromDb?.displayName}.
              </p>
            </div>
          )}
          <div className="block sm:flex items-center">
            <div className="w-full sm:w-1/2 sm:mr-auto mb-10 sm:mb-0">
              <img alt="" src={hero} className="w-[70%] mx-auto h-auto swing" />
            </div>
            <div className="w-full sm:w-[50%] text-center relative">
              <div className="relative">
                <img
                  alt=""
                  src={crown}
                  className="w-[80px] h-[80px] hidden sm:block absolute left-[-5%] top-[-40px]"
                />
                <h1 className="text-[1.75rem] sm:text-[2.5rem] font-[700] mb-5 sm:mb-[30px]">
                  Create & save your sticky notes for free!
                </h1>
              </div>
              <p className="tracking-wider">
                Keeping track of your notes just got a lot easier! Create,
                organise, and store your notes with this easy-to-use free tool.
                Created notes are organized into neat rows of edittable sticky
                notes. <br />
                <br />- Built by <span className="text-rose-400">khalid</span>.
                <br /> Really, what will you all do without me. you're welcome.
              </p>
              {!user && (
                <Link to="/register">
                  <button className="bg-rose-500 text-[0.90rem] mt-8 sm:mt-[50px] px-[20px] py-[10px] rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Sign Up to get started
                  </button>
                </Link>
              )}
              {user && (
                <Link to="/create">
                  <button className="bg-rose-500 text-[0.90rem] mt-8 sm:mt-[50px] px-[20px] py-[10px] rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Create new note
                  </button>
                </Link>
              )}
            </div>
            <Link to="/create">
              <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
                +
              </div>
            </Link>
          </div>
        </section>
        <ScrollToTop />
      </main>
    </>
  );
};

export default Main;
