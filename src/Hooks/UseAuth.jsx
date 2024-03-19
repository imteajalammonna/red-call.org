import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const UseAuth = () => {
    const auth = useContext(AuthContext);
    // console.log(auth);
    return auth;
};

export default UseAuth;