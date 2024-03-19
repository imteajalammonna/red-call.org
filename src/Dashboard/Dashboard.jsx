import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";


const Dashboard = () => {
    return (
        <div className="flex">
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;