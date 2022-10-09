//import { useParams } from "react-router-dom";

const Detail = (props) => {
    //const { id } = useParams()

    //const eachTitle = props.note?.map((item, index) => {
      //  return (
        //    index.title
        //)
    //})
    return (
        <div className="pt-[100px] px-[100px]">
            <div className="w-[fit-content] p-[30px] border-2 border-rose-500 rounded-lg">
                <h1 className="text-[2rem] font-[700] text-white">Title goes here</h1>
                <h2 className="text-[1.25rem] mt-[20px]">date created</h2>
            </div>
            <div className="w-full p-[30px] mt-[60px] border-2 border-[#ffab91] rounded-lg">
                <p className="">bodyyyyyy</p>
            </div>
        </div>
    );
}
 
export default Detail;