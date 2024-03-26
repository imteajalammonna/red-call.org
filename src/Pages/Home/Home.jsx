import { Link } from "react-router-dom";
import backgroundImg from "../../assets/bg-img.png"
import image from "../../assets//bg3.png";
import Features from "./Features";
import Button from "../../Shared/Button";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Set smooth scrolling behavior
        });
    }
    return (<>
        <div className="md:bg-cover bg-left-top md:bg-center min-h-screen bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="md:hidden pt-24 pl-8 md:pl-14 w-full">
                <img src={image} alt="" />
            </div>
            <div className="text-white absolute top-[425px] md:top-[37%]  left-7 md:left-36">
                <h1 className="text-4xl md:text-[93px] md:leading-[1.15] !font-extrabold uppercase tiro-bangla">Give a priceless <br /> donation</h1>
                <h4 className="text-xl md:text-3xl mt-6 mb-10 tiro-bangla">The most generous donation is a blood donation.</h4>
                <Link to="/register" className="md:ml-2"><Button>Join as a Donor</Button></Link>
                <Link to="/donors" className="ml-3 md:ml-5 button2"><button>Search Donors</button></Link>
            </div>
        </div>
        <Features></Features>
        {showButton && <button className="topBtn fixed bottom-2 right-2 z-50 text-2xl" onClick={scrollToTop}><IoIosArrowUp />
        </button>}
    </>
    );
};

export default Home;