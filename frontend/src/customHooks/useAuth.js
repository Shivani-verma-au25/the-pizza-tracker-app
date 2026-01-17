import { baseUrl } from '@/utils/api';
import { toast } from 'sonner';

const useAuth = () => {

  const signUp = async (userData) => {    
    try {
      const res = await baseUrl.post('v1/users/signup', userData);
      console.log("user data:", res.data);
      toast.success(res?.data?.message)
      console.log("data",res.data);
      
      return res.data; // ✅ return response
      // set to redux this data
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
      throw error; // ✅ important
    }
  };

  return {
    signUp, // ✅ RETURN IT
  };
};

export default useAuth;
