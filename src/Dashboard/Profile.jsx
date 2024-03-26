import useUserInfo from "../Hooks/useUserInfo";



const Profile = () => {
    const [userInfo, isPending] = useUserInfo();
    console.log(isPending);
    // const isLoading = true;
    if (!isPending) {
        return <div className="flex w-full items-center justify-center min-h-screen">
            <span className="loading  loading-lg loading-spinner text-[#dc0202]"></span>
        </div>
    }
    return (
        <div className="min-h-screen">
            <div className="m-32">
                <div className="flex">
                    <img className="rounded-full h-[400px] mb-20" src={userInfo?.imageURL} alt="" />
                </div>
                <h1 className="text-5xl font-bold">Name: {userInfo?.name || userInfo?.email}</h1>
                <h1 className="text-2xl font-bold">Email: {userInfo?.displayName || userInfo?.email}</h1>
            </div>
        </div>
    );
};

export default Profile;