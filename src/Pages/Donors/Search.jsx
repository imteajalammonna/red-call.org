import { useEffect } from 'react';
import { useState } from 'react';
import Card from "./Card";
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import img from "../../assets/download (3).jpeg"
const Search = () => {
    //   const theme = useTheme();
    // for upazila select
    const [upazila, setUpazila] = useState("");
    const [upazilas, setUpazilas] = useState([]);

    const [Districts, setDistricts] = useState([]);
    const [District, setDistrict] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./upazilas.json");
                const data = await response.json();
                setUpazilas(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("./districts.json");
                const data = await response.json();
                setDistricts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const [blood, setBlood] = useState('');

    // axios hook 
    const axiosPublic = useAxiosPublic()

    //   handle Submit 
    const [searchData, setSearchData] = useState()
    const handleSubmit = async (e) => {

        e.preventDefault()
        const yourUpazila = upazila;
        const yourDistrict = District;
        const BloodGroup = blood;
        const filterOBJ = { yourUpazila, yourDistrict, BloodGroup };
        console.log(filterOBJ);
        const encodedBloodGroup = encodeURIComponent(`${BloodGroup}`);
        try {
            const response = await axiosPublic.get(
                `/searchUser?upazila=${yourUpazila}&district=${yourDistrict}&bloodGroup=${encodedBloodGroup}`
            );
            setSearchData(response.data);
            console.log('Search success:', response.data);
        } catch (error) {
            console.error('Error during search:', error);
        }



    }
    return (
        <div className="text-center pb-2  mb-[62.5px]">
            <form onSubmit={handleSubmit}>
                <div className="join w-full items-center justify-center flex md:flex-row flex-col py-2">
                    <div className="join join-item">
                        <select
                            className="select w-32 md:w-full select-bordered join-item"
                            onChange={(event) => setDistrict(event.target.value)}
                            value={District}
                            placeholder='District'
                        >
                            {Districts?.map((item, idx) => (
                                <option key={idx} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <select
                            className="select select-bordered join-item"
                            onChange={(event) => setBlood(event.target.value)}
                            value={blood}
                        >
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O-</option>
                            <option value="O-">O-</option>
                        </select>
                        <select
                            className="select select-bordered join-item !rounded-r-md md:!rounded-r-none"
                            onChange={(event) => setUpazila(event.target.value)}
                            value={upazila}
                        >
                            {upazilas?.map((item, idx) => (
                                <option key={idx} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="">
                        <input
                            type="submit"
                            value="Search"
                            className="btn md:join-item my-5 md:m-0 bg-red-600 text-white hover:bg-red-500"
                        />
                    </div>
                </div>
            </form>
            {/* card elements */}
            {searchData ? <div className="grid grid-cols-1 md:grid-cols-2 md:p-8 m-5 place-items-center justify-center items-center gap-8 container mx-auto">
                {searchData?.map((data) => (
                    <Card data={data} key={data.email}></Card>
                ))}
            </div> : <div className='flex flex-col items-center justify-center mt-20'>
                <img src={img} alt="" />
                <h1 className="text-4xl font-bold mt-10"><span className='text-red-600'>Sorry! </span> No Donor available as your Information.</h1>
            </div>}

        </div>
    );
};

export default Search;