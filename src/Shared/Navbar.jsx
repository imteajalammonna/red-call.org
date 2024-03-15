import  { useState, useEffect } from 'react';
import logoWhite from "../assets/white-logo.png";
import logoRed from "../assets/logo-red.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const link = <>
    <NavLink to="/" className="text-xl font-bold transition-colors duration-300">Home</NavLink>
    <NavLink to="/donors" className="text-xl font-bold transition-colors duration-300">Donors</NavLink>
    <NavLink to="/" className="text-xl font-bold transition-colors duration-300">Features</NavLink>
    <NavLink to="/" className="text-xl font-bold transition-colors duration-300">Contact</NavLink>
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
        <nav className={`fixed top-0 left-0 w-full py-4 z-10 ${scrolled ? 'bg-white shadow-lg' : 'bg-[#C60000]'}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to={'/'}> <img className='w-36' src={scrolled ? logoRed: logoWhite} alt="" /> </Link>
                    <ul className={`hidden md:flex flex-1 justify-end items-center space-x-6 ${scrolled ? 'text-black': 'text-white'}`}>
                        {link}
                    </ul>
                    <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-900 font-bold focus:outline-none focus:bg-gray-200">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
