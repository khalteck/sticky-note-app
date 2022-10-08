import hero from "./images/searching-error.svg"
import crown from "./images/handy-line-line.png"

const Main = () => {
    return (
        <main className="px-[100px] pt-[130px] flex items-center relative">
            <img alt="" src={hero} className="w-[33%] h-auto mr-auto swing"/>
            <div className="w-[50%] text-center relative">
                <img alt="" src={crown} className="w-[80px] h-[80px] absolute left-0 top-[-40px]"/>
                <h1 className="text-[2.5rem] font-[700] mb-[30px]">Create & save your sticky notes for free!</h1>
                <p className="tracking-wider">
                    Saving your notes just got a lot easier! Create, organise, and store your notes with this easy-to-use free tool.
                    Created notes are organized into neat rows of edittable sticky notes. <br/><br/>
                    - Built by <span className="text-rose-400">khalid</span>.<br/> Really, what will you all do without me.
                    you're welcome.
                </p>
                <button className="bg-rose-500 text-[0.90rem] mt-[50px] px-[20px] py-[10px] rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">Sign Up to get started</button>
            </div>
            <div className="w-[70px] h-[70px] leading-none pt-1 text-[40px] flex justify-center items-center rounded-full cursor-pointer bg-rose-500 hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300 absolute bottom-[-100px] right-[100px]">+</div>
        </main>
    );
}
 
export default Main;