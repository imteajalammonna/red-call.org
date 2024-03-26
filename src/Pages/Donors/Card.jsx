

const Card = ({ data }) => {
    const { role, email, imageURL, name, BloodGroup,upazila, district,status } = data;
    return (
        <div className="md:w-[45rem] md:h-[15rem] w-full h-full rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col items-center justify-center ease-linear duration-300 md:flex-row">
            <div className="h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className=" text-white z-10 bg-[#ff2121] absolute px-4 py-2 rounded-tl-2xl rounded-br-2xl font-semibold">
                    <h1>{BloodGroup}</h1>
                </div>
                <div className="h-full w-full relative rounded-2xl">
                    <img
                        src={imageURL}
                        alt="thumbnail"
                        className="rounded-2xl object-cover h-80 md:h-full w-full"
                    />
                </div>
            </div>

            <div className="h-full w-full text-left ml-5 space-y-1 py-2">
                <p className="my-2 font-bold text-lg text-[#ff2121] capitalize">{role} Details</p>
                <h1 className="text-2xl font-bold dark:text-white">Name : {name} </h1>
                <h1 className="dark:text-white text-xl">Email: {email}</h1>
                <h1 className="dark:text-white text-xl md:text-2xl">District: { district}</h1>
                <h1 className="dark:text-white text-xl md:text-2xl">Upazila: {upazila}</h1>
                <h1 className="dark:text-white text-xl md:text-2xl capitalize">Status: {status}</h1>

                <div className="flex flex-row justify-around flex-wrap">

                </div>
            </div>
        </div>
    );
};

export default Card;