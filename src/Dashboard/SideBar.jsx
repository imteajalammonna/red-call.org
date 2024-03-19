import logo from "../assets/logo-red.png"
import { NavLink } from "react-router-dom";


const SideBar = () => {
    const links = <>
        <li> <NavLink to="/" className="p-1 m-4 space-y-5 hover:text-black duration-300">Dashboard</NavLink></li>
        <li> <NavLink to="/dashboard/profile" className="p-1 m-4 space-y-5 hover:text-black duration-300">Profile</NavLink></li>
        <li> <NavLink to="/" className="p-1 m-4 space-y-5 hover:text-black duration-300">Team</NavLink></li>
        <li> <NavLink to="/" className="p-1 m-4 space-y-5 hover:text-black duration-300">Settings</NavLink></li>
    </>
    return (
        <div className="h-screen bg-[#C60000] text-white w-64 flex flex-col">
            <div className="p-5"><img src={logo} alt="" /></div>
            <ul className="flex-1 flex flex-col space-y-5 text-xl mt-10 ">
                {links}
                {/* <li className="p-4 hover:bg-red-800">Dashboard</li>
                <li className="p-4 hover:bg-red-800">Projects</li>
                <li className="p-4 hover:bg-red-800">Team</li>
                <li className="p-4 hover:bg-red-800">Settings</li> */}
                <div className="divider">----------------------------</div>
                <li> <NavLink to="/" className="p-1 m-4 space-y-5 hover:text-black duration-300">Home</NavLink></li>
            </ul>
            <div className="p-4 bg-[#C60000]">Footer</div>
        </div>
    );
};

export default SideBar;