import { setUsersData, setusersLoading } from "@/redux/usesSlice";
import { baseUrl } from "@/utils/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const useGetCurrentUser = () => {
  const disptach = useDispatch();
  useEffect(() => {
    const getCurrentUser = async () => {
        disptach(setusersLoading(true))
      try {
        const resp = await baseUrl.get("v1/users/get-current-user");
        console.log(resp?.data);
        if (resp.data?.success) {
          console.log("current users data", resp?.data);
          disptach(setUsersData(resp?.data?.user));
          // todo: set user data in global state
        }
      } catch (error) {
        console.log("error in getting current user", error);
        toast.error(error?.response?.message || 'Failed to get details !')
      }finally{
        disptach(setusersLoading(false))
      }
    };
    getCurrentUser();
  }, []);
};

export default useGetCurrentUser;
