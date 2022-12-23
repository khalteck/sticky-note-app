import ScrollToTop from "../ScrollToTop";
import Header from "../Header";
import { Link } from "react-router-dom";

const Create = ({
  user,
  logout,
  currentUserFromDb,
  handleNewNoteChange,
  handleCreate,
}) => {
  return (
    <>
      <Header
        user={user}
        logout={logout}
        currentUserFromDb={currentUserFromDb}
      />
      <div className="py-16 mt-4 sm:mt-0 sm:py-[100px] px-3 sm:px-[100px]">
        <Link to="/notes">
          <button className="bg-rose-500/80 font-[700] text-[0.90rem] mb-8 px-[20px] py-[5px] rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
            Back to notes
          </button>
        </Link>
        <h1 className="text-[1.75rem] sm:text-[2.5rem] mb-8 sm:mb-10 font-[700] tracking-wider">
          Create new sticky note
        </h1>
        <form>
          <div className="w-full sm:w-2/3 p-5 sm:p-[30px] border-2 border-rose-500 rounded-lg">
            <h1 className="text-[1.5rem] sm:text-[1.75rem] font-[700] text-white">
              Title here
            </h1>
            <input
              type="text"
              id="title"
              onChange={handleNewNoteChange}
              placeholder="Note title"
              className="w-full bg-rose-400/20 text-[1.5rem] my-4 p-3 outline-none rounded-lg"
              required
            />
            <h2 className="text-[1rem] mt-[20px] text-[#ffab91]">
              <span className="text-[#ffab91]">Time of creation :</span>{" "}
              {new Date().toLocaleString() + ""}
            </h2>
          </div>
          <div className="w-full p-5 sm:p-[30px] mt-8 sm:mt-[60px] border-2 border-[#ffab91] rounded-lg">
            <p className="text-[1.25rem]">Body here</p>
            <textarea
              type="text"
              id="body"
              onChange={handleNewNoteChange}
              placeholder="Note body"
              className="w-full h-[180px] bg-[#ffab91]/20 text-[1.5rem] my-4 p-3 outline-none rounded-lg"
              required
            />
          </div>
          <button
            onClick={handleCreate}
            className="w-full sm:w-2/3 bg-rose-500 my-8 sm:my-16 p-5 outline-none rounded-lg"
          >
            Create note
          </button>
        </form>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Create;
