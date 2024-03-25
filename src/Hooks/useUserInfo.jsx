import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserInfo = () => {
    const axiosSecure = useAxiosSecure();

    const { user } = UseAuth();
    const { data: UserInfo, refetch, isPending, isLoading } = useQuery({
        queryKey: ["SingleUser", user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/user?email=${user?.email}`);
                console.log(res.data);
                return res?.data[0];
            }
            catch (error) {
                console.error('Error fetching user Information:', error);
                throw error;
            }
        },
        enabled: !!user,
    });


    return [UserInfo, refetch, isPending, isLoading]
};

export default useUserInfo;