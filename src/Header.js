import logo from "./images/note app logo.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="w-full bg-[#252525] px-[100px] fixed top-0 left-0 border-b border-slate-600 flex items-center z-[100]">
            <Link to="/" className="mr-auto">
                <div className="flex items-center gap-[0px] ml-[-10px] cursor-pointer">
                    <img alt="logo" src={logo} className="w-[60px] h-[60px]"/>
                    <p className="font-dyna text-[1.5rem] text-rose-300 tracking-widest">Note app</p>
                </div>
            </Link>
            <nav className="w-[65%] flex items-center">
                <div className="flex items-center gap-[60px] mr-auto">
                    <Link to="/" className="cursor-pointer px-[10px] py-[5px] rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">Home</Link>
                    <Link to="/notes" className="cursor-pointer px-[10px] py-[5px] rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">Notes</Link>
                    <Link to="/" className="cursor-pointer px-[10px] py-[5px] rounded-md hover:bg-rose-400 hover:translate-y-[6px] transition-all duration-300">Create</Link>
                </div>
                <div>
                    <button className="bg-[#ffab91] font-[700] text-[0.90rem] mr-[20px] px-[20px] py-[5px] rounded-md hover:bg-rose-500 hover:translate-y-[6px] transition-all duration-300">Sign In</button>
                    <button className="bg-rose-400 font-[700] text-[0.90rem] px-[20px] py-[5px] rounded-md hover:bg-rose-500 hover:translate-y-[6px] transition-all duration-300">Sign Up</button>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;