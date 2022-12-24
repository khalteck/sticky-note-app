import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Header from "../Header";

const Detail = ({
  note,
  user,
  logout,
  currentUserFromDb,
  notesDataFromDb,
  handleDelete,
}) => {
  const { id } = useParams();
  const eachNote = note.filter((item) => item.id === Number(id))[0];
  const eachUserNote = notesDataFromDb.filter((item) => item.id === id)[0];

  return (
    <>
      <Header
        user={user}
        logout={logout}
        currentUserFromDb={currentUserFromDb}
      />
      <div className="py-[100px] px-3 sm:px-[100px]">
        <div className="w-full flex justify-between items-start">
          <Link to="/notes">
            <button className="bg-rose-500/80 font-bold text-[0.90rem] mb-8 px-5 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
              Back
            </button>
          </Link>
          <div className="flex gap-4 justify-between items-center">
            <button className="bg-rose-500/80 font-bold text-[0.90rem] mb-8 px-5 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
              Edit
            </button>
            <button
              onClick={() =>
                handleDelete(
                  currentUserFromDb.displayName,
                  id,
                  eachUserNote?.title
                )
              }
              className="bg-rose-500/80 font-bold text-[0.90rem] mb-8 px-5 py-1 rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[fit-content] p-5 sm:p-8 border-2 border-rose-500 rounded-lg">
          <div>
            {!user && (
              <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-white">
                {eachNote?.title}
              </h1>
            )}
            {user && (
              <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-white">
                {eachUserNote?.title}
              </h1>
            )}
          </div>
          <div>
            {!user && (
              <h2 className="text-[1rem] mt-5 text-[#ffab91]">
                <span className="text-[#ffab91]">Created :</span>{" "}
                {eachNote?.date}
              </h2>
            )}
            {user && (
              <h2 className="text-[1rem] mt-5 text-[#ffab91]">
                <span className="text-[#ffab91]">Created :</span>{" "}
                {eachUserNote?.date}
              </h2>
            )}
          </div>
        </div>
        <div className="w-full min-h-[200px] p-5 sm:p-8 mt-16 border-2 border-[#ffab91] rounded-lg">
          {!user && <p className="text-[1.25rem]">{eachNote?.body}</p>}
          {user && <p className="text-[1.25rem]">{eachUserNote?.body}</p>}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Detail;
