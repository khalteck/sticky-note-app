import { Link } from "react-router-dom";
import Header from "./Header";

const Notes = (props) => {
  return (
    <>
      <Header />
      <div className="w-full px-4 sm:px-[100px] pt-[100px]">
        <h1 className="text-[2.5rem] mb-[50px] font-[700] tracking-wider">
          Notes
        </h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-[20px] text-[#252525]">
          {props.note?.map((item, index) => {
            return (
              <div
                key={item.id}
                onMouseOver={() => props.handleNoteHover(index)}
                onMouseOut={() => props.handleNoteOut(index)}
                className="p-4 sm:p-[24px] bg-rose-400 cursor-pointer even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg relative"
              >
                <Link to={`/note/${item.id}`}>
                  <div className="overlay w-full h-full absolute top-0 left-0"></div>
                </Link>
                <div
                  className={`w-[18px] h-[18px] rounded-full absolute top-2 ${
                    item.hover ? "right-[47%]" : "right-2"
                  } bg-[#252525] transition-all duration-500`}
                ></div>
                <h2 className="text-[1.5rem] font-[700] mb-[10px]">
                  {item.title}
                </h2>
                <h3>{item.date}</h3>
              </div>
            );
          })}
          {/* {eachNote} */}
        </div>
      </div>
    </>
  );
};

export default Notes;
