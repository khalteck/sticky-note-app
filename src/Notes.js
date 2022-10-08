//import { useState } from "react";

const Notes = () => {

    /*const[note, setNote] = useState([
        {
            title: "Step to take on how to look, smile, code and live like Khalid",
            date: "may 15, 2022",
            body: "Blah blah.. make your own note :)"
        },
        {
            title: "12 eye catching mobile wallpapers",
            date: "june 16, 2022",
            body: "Blah blah.. make your own note :)"
        },
        {
            title: "How to make your brand stand out online",
            date: "sept 2, 2022",
            body: "Blah blah.. make your own note :)"
        },
        {
            title: "How to code like Khalid",
            date: "may 15, 2022",
            body: "Blah blah.. make your own note :)"
        },
        {
            title: "10 great React coding practices",
            date: "may 15, 2022",
            body: "Blah blah.. make your own note :)"
        },
    ])*/

    return (
        <div className="w-full px-[100px] pt-[100px]">
            <h1 className="text-[2.5rem] mb-[50px] font-[700] tracking-wider">Notes</h1>
            <div className="w-full grid grid-cols-4 gap-[20px] text-[#252525]">
                <div className="p-[20px] bg-rose-400 even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg">
                    <h2 className="text-[1.5rem] font-[700]">This is the Note title of this particular note</h2>
                    <h3>Date created</h3>
                </div>
                <div className="p-[20px] bg-rose-400 even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg">
                    <h2 className="text-[1.5rem] font-[700]">This is the Note title of this particular note</h2>
                    <h3>Date created</h3>
                </div>
                <div className="p-[20px] bg-rose-400 even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg">
                    <h2 className="text-[1.5rem] font-[700]">This is the Note title of this particular note</h2>
                    <h3>Date created</h3>
                </div>
                <div className="p-[20px] bg-rose-400 even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg">
                    <h2 className="text-[1.5rem] font-[700]">This is the Note title of this particular note</h2>
                    <h3>Date created</h3>
                </div>
                <div className="p-[20px] bg-rose-400 even:bg-[#ffab91] first:bg-[#e7ed9b] last:bg-[#cf94da] first:row-span-2 rounded-lg">
                    <h2 className="text-[1.5rem] font-[700]">This is the Note title of this particular note</h2>
                    <h3>Date created</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Notes;