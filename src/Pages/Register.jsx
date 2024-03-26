import { Link } from "react-router-dom";
// import img from "../assets/white-logo.png";
// import  Donor  from "../assets/logo-red.png";
import {
    FormControl, InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { axiosPublic } from "../Hooks/useAxiosPublic";
// import { Bloodtype } from "@mui/icons-material";
const Register = () => {
    const [Blood, setBlood] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const { createUser, UserUpdate } = UseAuth();
    // for districts select
    const [districts, setDistricts] = useState([]);
    // for upazilla select
    const [upazila, setUpazila] = React.useState("");
    const [upazilas, setUpazilas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/upazilas.json')
                const data = await response.json();
                setUpazilas(data);
            }
            catch (error) {
                console.error("Error Fetching Data:", error);
            }
        };
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/districts.json');
                const data = await response.json();
                setDistricts(data);
            }
            catch (error) {
                console.error("Error for fetching Districts data", error);
            }
        }
        fetchData();
    }, []);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const confirmPassword = form.confirmPassword.value;
        const password = form.password.value;
        const image = form.image.files[0];
        const upaZila = upazila;
        const disTrict = district;
        const BloodGroup = Blood;
        const imageFile = { image: image };
        console.log(name, email, password, image, upaZila, disTrict, BloodGroup, imageFile);

        const imgRes = await axios.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        const imageURL = imgRes.data.data.display_url;
        const userInfo = {
            name,
            email,
            imageURL,
            upazila: upaZila,
            district: disTrict,
            BloodGroup,
            role: "donor",
            status: "active",
        };

        const specialChars = /[!@#$%^&*()_+=[\]{};':"\\|]/;
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain 1 capital letter ");
            return;
        } else if (!specialChars.test(password)) {
            toast.error("Password must contain 1 spacial  character ");
            return;
        } else if (confirmPassword != password) {
            toast.error("Password must be match with Confirm Password");
        } else {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    UserUpdate(name, imageURL)
                        .then(() => {
                            axiosPublic.post('/allUsers', userInfo)
                                .then((res) => {
                                    if (res.data.insertedId) {
                                        toast.success("You have Registered SuccessFully");
                                        // reset();
                                    }
                                })
                        })
                })
                .catch(error => {
                    console.error(error)
                });
        }
    }
    return (
        <div className="hero min-h-screen w-full bg-[#C91C1C]/5 p-1 py-24 md:p-10 lg:p-0">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                {/* <div className="hidden md:block text-center lg:text-left flex-1">
                    <Donor></Donor>
                </div> */}
                <div className="w- shadow-2xl border-4 border-[#FAE7E7] bg-white/80 space-y-10 rounded-lg backdrop-blur-lg p-10 flex-1">
                    <h3 className="text-4xl font-semibold tiro-bangla text-center py-5">অনুগ্রহ করে
                        রেজিস্টার করুন!{" "}
                        <span className="text-[#C91C1C]">
                            {/* Form <Bloodtype sx={{ mr: 1, fontSize: "40px" }} /> */}
                        </span>
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className=" flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 tiro-bangla ">
                            <TextField
                                id="outlined-basic"
                                label="নাম"
                                variant="outlined"
                                size="small"
                                name="name"
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                label="ইমেল"
                                variant="outlined"
                                size="small"
                                name="email"
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                label="পাসওয়ার্ড"
                                variant="outlined"
                                size="small"
                                name="password"
                                type="password"
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                label="নিশ্চিত পাসওয়ার্ড"
                                variant="outlined"
                                size="small"
                                name="confirmPassword"
                                type="password"
                                required
                            />
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">উপজেলা *</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={upazila}
                                    label="upazila"
                                    onChange={(event) => setUpazila(event.target.value)}
                                >
                                    {upazilas?.map((upzila) => (
                                        <MenuItem key={upzila.id} value={`${upzila.name}`}>
                                            {upzila.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">জেলা *</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={district}
                                    label="District"
                                    onChange={(event) => setDistrict(event.target.value)}
                                >
                                    {districts?.map((district) => (
                                        <MenuItem key={district.id} value={`${district.name}`}>
                                            {district.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ minWidth: 120 }} size="small">
                                <InputLabel id="demo-select-small-label">
                                    রক্তের গ্রুপ *
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={Blood}
                                    label="Blood"
                                    onChange={(event) => setBlood(event.target.value)}
                                >
                                    <MenuItem value={"A+"}>A+</MenuItem>
                                    <MenuItem value={"A-"}>A-</MenuItem>
                                    <MenuItem value={"B+"}>B+</MenuItem>
                                    <MenuItem value={"B-"}>B-</MenuItem>
                                    <MenuItem value={"AB+"}>AB+</MenuItem>
                                    <MenuItem value={"AB-"}>AB-</MenuItem>
                                    <MenuItem value={"O+"}>O+</MenuItem>
                                    <MenuItem value={"O-"}>O-</MenuItem>
                                </Select>
                            </FormControl>
                            <input
                                name="image"
                                type="file"
                                required
                                className="file-input  file:text-white  text-black file-input-bordered file:border-[#dc0202] file:bg-[#dc0202] w-full max-w-xs"
                            />
                            <div>
                                <p className="tiro-bangla">
                                    {" "}
                                    পূর্বের অ্যাকাউন্ট আছে ?{" "}
                                    <Link
                                        to="/login"
                                        className="text-[#dc0202] font-semibold border-b-2 border-[#dc0202]"
                                    >
                                        লগ ইন করুন।
                                    </Link>
                                </p>
                            </div>
                            <input
                                className="col-span-2 button"
                                type="submit"
                                value="রেজিষ্টার করুন"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;