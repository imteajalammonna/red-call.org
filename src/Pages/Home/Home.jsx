import { Link } from "react-router-dom";
import backgroundImg from "../../assets/bg-img.png"
import image from "../../assets//bg3.png";
import Features from "./Features";
import Button from "../../Shared/Button";

const Home = () => {
    return (<>
        <div className="md:bg-cover bg-left-top md:bg-center min-h-screen bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="md:hidden pt-24 pl-14 w-full">
                <img src={image} alt="" />
            </div>
            <div className=" poppins-thin text-white absolute top-[410px] md:top-[35%]  left-10 md:left-36">
                <h1 className="text-4xl md:text-8xl leading-[1.15] font-extrabold uppercase">Give a priceless <br /> donation</h1>
                <h4 className="text-xl md:text-3xl mt-6 mb-10">The most generous donation
                    is a blood donation.</h4>
                <Link to="/register" className="md:ml-2"><Button>Join as a Donor</Button></Link>
            </div>
        </div>
        <Features></Features>
    </>
    );
};

export default Home;