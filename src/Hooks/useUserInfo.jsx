import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
    const axiosSecure = useAxiosSecure();

    // Fetching user information using the UseAuth hook
    const { user } = UseAuth();

    // Using useQuery to fetch user data
    const { data: UserInfo, refetch, isPending, isLoading } = useQuery({
        queryKey: ["SingleUser", user?.email], // Query key based on user email
        queryFn: async () => {
            try {
                // Fetch user data from the API using axiosSecure instance
                const res = await axiosSecure.get(`/user?email=${user?.email}`);
                console.log(res.data);
                // Check if data is available, return null if not
                return  res?.data[0] || null;
            } catch (error) {
                console.error('Error fetching user information:', error);
                // Return null or throw error depending on your error handling strategy
                return null;
            }
        },
        enabled: !!user, // Enable query when user is available
    });

    // Return user data, refetch function, and loading states
    return [UserInfo, refetch, isPending, isLoading];
};

export default useUserInfo;
