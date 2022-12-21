import { useParams } from "react-router-dom";
import Header from "./Header";

const Detail = ({ note }) => {
  const { id } = useParams();
  const eachNote = note.filter((item) => item.id === Number(id))[0];

  return (
    <>
      <Header />
      <div className="pt-[100px] px-[100px]">
        <div className="w-[fit-content] p-[30px] border-2 border-rose-500 rounded-lg">
          <h1 className="text-[2rem] font-[700] text-white">
            {eachNote?.title}
          </h1>
          <h2 className="text-[1rem] mt-[20px] text-[#ffab91]">
            <span className="text-[#ffab91]">Created :</span> {eachNote?.date}
          </h2>
        </div>
        <div className="w-full p-[30px] mt-[60px] border-2 border-[#ffab91] rounded-lg">
          <p className="text-[1.25rem]">{eachNote?.body}</p>
        </div>
      </div>
    </>
  );
};

export default Detail;
