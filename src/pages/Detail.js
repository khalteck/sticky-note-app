import { useParams } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Header from "../Header";

const Detail = ({ note, user, logout, currentUserFromDb }) => {
  const { id } = useParams();
  const eachNote = note.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <Header
        user={user}
        logout={logout}
        currentUserFromDb={currentUserFromDb}
      />
      <div className="py-[100px] px-3 sm:px-[100px]">
        <div className="w-[fit-content] p-5 sm:p-[30px] border-2 border-rose-500 rounded-lg">
          <h1 className="text-[1.5rem] sm:text-[2rem] font-[700] text-white">
            {eachNote?.title}
          </h1>
          <h2 className="text-[1rem] mt-[20px] text-[#ffab91]">
            <span className="text-[#ffab91]">Created :</span> {eachNote?.date}
          </h2>
        </div>
        <div className="w-full p-5 sm:p-[30px] mt-[60px] border-2 border-[#ffab91] rounded-lg">
          <p className="text-[1.25rem]">{eachNote?.body}</p>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Detail;
