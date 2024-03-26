import Title from "../../Shared/Title";
import Search from "./Search";


const Donors = () => {
    return (
        <div className="mt-32 min-h-screen">
            <Title head={"Search"} heading={"Donors🔍"}></Title>
        <Search></Search>
        </div>
    );
};

export default Donors;