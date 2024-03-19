import { useState, useEffect, useContext } from 'react';
import logoWhite from "../assets/white-logo.png";
import logoRed from "../assets/logo-red.png";
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";
import useUserInfo from '../Hooks/useUserInfo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [userInfo] = useUserInfo();
    const links = <>
        <NavLink to="/" className="text-xl font-bold transition-colors duration-300">Home</NavLink>
        <NavLink to="/donors" className="text-xl font-bold transition-colors duration-300">Donors</NavLink>
        <NavLink to="/features" className="text-xl font-bold transition-colors duration-300">Features</NavLink>
        <NavLink to="/contact" className="text-xl font-bold transition-colors duration-300">Contact</NavLink>
        {!user ? <NavLink to="/login" className="text-xl font-bold transition-colors duration-300">Login</NavLink> : <Link className="text-xl font-bold transition-colors duration-300"><button onClick={() => logOut()}>Logout</button></Link>}
        <div to="/" className="text-xl font-bold transition-colors duration-300">
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="">{user ? <img className='w-14 p-0 rounded-[50%] m-0' src={userInfo?.imageURL} alt="" /> : <FaUserCircle className='text-4xl' />}</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu px-4 p-2 text-center shadow bg-base-100 text-black">
                    <NavLink to="/dashboard/profile" className="text-xl font-bold transition-colors duration-300">Profile</NavLink>
                    <NavLink to="/dashboard" className="text-xl font-bold transition-colors duration-300">Dashboard</NavLink>
                </ul>
            </div>
        </div>
    </>
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full py-4 z-10 shadow-sm ${scrolled ? 'bg-primary shadow-lg' : 'bg-[#C60000]'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to={'/'}> <img className='w-36' src={scrolled ? logoRed : logoWhite} alt="" /> </Link>
                    <ul className={`hidden md:flex tiro-bangla flex-1 justify-end items-center space-x-6 ${scrolled ? 'text-black' : 'text-white'}`}>
                        {links}
                    </ul>
                    <div className="">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="md:hidden inline-flex items-center justify-center p-2 cursor-pointer">
                                    <HiMenuAlt3 className={`text-3xl ${scrolled ? 'text-black' : 'text-white'}`}></HiMenuAlt3>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex-col items-center space-y-4">
                                    {links}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
