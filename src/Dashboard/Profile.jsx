import useUserInfo from "../Hooks/useUserInfo";



const Profile = () => {
    const [userInfo, isLoading] = useUserInfo();
    console.log([isLoading]);
    // const isLoading = true;
    if (!isLoading) {
        return <div className="flex w-full items-center justify-center min-h-screen">
            <span className="loading  loading-lg loading-spinner text-[#dc0202]"></span>
        </div>
    }
    return (
        <div className="min-h-screen">
            <div className="flex">
                <img src={userInfo?.imageURL} alt="" />
            </div>
            <h1 className="text-5xl font-bold uppercase">{userInfo?.displayName || userInfo?.email}</h1>
        </div>
    );
};

export default Profile;