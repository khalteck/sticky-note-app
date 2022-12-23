import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Header from "../Header";
import empty from "../images/icons8-empty-box-64.png";
import close from "../images/icons8-cancel-48.png";

const Notes = ({
  note,
  userNote,
  user,
  handleNoteHover,
  handleNoteOut,
  handleClick,
  logout,
  currentUserFromDb,
  handleHideWelcome,
  welcomeMessage,
}) => {
  // console.log(userNote);
  return (
    <>
      <Header
        user={user}
        logout={logout}
        currentUserFromDb={currentUserFromDb}
      />
      <div className="w-full px-4 sm:px-[100px] py-[100px]">
        {welcomeMessage && (
          <div className="w-full px-5 py-3 sm:p-5 mt-4 mb-6 sm:mb-16 border-2 border-[#ffab91] rounded-lg relative">
            <p className="text-[1rem] sm:text-[1.25rem]">
              Hi {currentUserFromDb?.displayName}, welcome to your library.
            </p>
            <img
              className="w-[35px] h-[35px] cursor-pointer mr-[25px] absolute top-1/2 right-0 translate-y-[-50%]"
              alt=""
              src={close}
              onClick={handleHideWelcome}
            />
          </div>
        )}
        <h1 className="text-[2.5rem] mb-8 sm:mb-[50px] font-[700] tracking-wider">
          {currentUserFromDb?.displayName}'s notes
        </h1>
        {user && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-[20px] text-[#252525]">
            {userNote.length > 0 ? (
              userNote?.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    onMouseOver={() => handleNoteHover(index)}
                    onMouseOut={() => handleNoteOut(index)}
                    onClick={() => handleClick(index)}
                    className="p-4 sm:p-[24px] bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg relative"
                  >
                    <Link to={`/note/${item.id}`}>
                      <div className="overlay w-full h-full absolute top-0 left-0"></div>
                    </Link>
                    <div
                      className={`w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full absolute top-2 ${
                        item?.hover ? "right-[47%]" : "right-2"
                      } bg-[#252525] transition-all duration-500`}
                    ></div>
                    <h2 className="text-[1.1rem] sm:text-[1.5rem] font-[700] mb-[10px]">
                      {item?.title}
                    </h2>
                    <h3>{item?.date}</h3>
                  </div>
                );
              })
            ) : (
              <div className="w-full col-span-2 text-center py-10 border-2 border-rose-400 rounded-xl text-gray-500">
                <img
                  alt="empty"
                  src={empty}
                  className="w-1/3 h-auto mb-4 mx-auto"
                />
                <p className="font-bold text-[2rem]">No notes yet...</p>
                <Link to="/create">
                  <button className="bg-rose-500 text-[0.90rem] mt-8 text-white sm:mt-[50px] px-[20px] py-[10px] rounded-sm hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">
                    Create new note
                  </button>
                </Link>
              </div>
            )}
            {/* {eachNote} */}
          </div>
        )}

        {!user && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-[20px] text-[#252525]">
            {note?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onMouseOver={() => handleNoteHover(index)}
                  onMouseOut={() => handleNoteOut(index)}
                  onClick={() => handleClick(index)}
                  className="p-4 sm:p-[24px] bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg relative"
                >
                  <Link to={`/note/${item.id}`}>
                    <div className="overlay w-full h-full absolute top-0 left-0"></div>
                  </Link>
                  <div
                    className={`w-3 h-3 sm:w-[18px] sm:h-[18px] rounded-full absolute top-2 ${
                      item?.hover ? "right-[47%]" : "right-2"
                    } bg-[#252525] transition-all duration-500`}
                  ></div>
                  <h2 className="text-[1.1rem] sm:text-[1.5rem] font-[700] mb-[10px]">
                    {item?.title}
                  </h2>
                  <h3>{item?.date}</h3>
                </div>
              );
            })}
            {/* {eachNote} */}
          </div>
        )}
        <Link to="/create">
          <div className="w-12 h-12 sm:w-[70px] sm:h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 fixed right-8 bottom-8">
            +
          </div>
        </Link>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Notes;
