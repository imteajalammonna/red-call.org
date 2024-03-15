import Title from "../../Shared/Title";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";


const Features = () => {
    return (
        <div className="container my-14">
            <Title head={'Our'} heading={'Features!'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="">
                    <h1 className="text-4xl font-bold text-center mb-5">Blood Campaign</h1>
                    <img className="h-[400px] w-[500px] rounded-xl hover:scale-105 duration-1000" src={img1} alt="" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold text-center mb-5">Blood Campaign</h1>
                    <img className="h-[400px] w-[500px] rounded-xl hover:scale-105 duration-1000" src={img2} alt="" />
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold text-center mb-5">Blood Campaign</h1>
                    <img className="h-[400px] w-[500px] rounded-xl hover:scale-105 duration-1000" src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;