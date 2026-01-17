import { baseUrl } from '@/utils/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useAuth = () => {
    // user signup 
    const navigate = useNavigate()

  const signUp = async (userData) => {    
    try {
      const res = await baseUrl.post('v1/users/signup', userData);
      toast.success(res?.data?.message)
      return res.data; // ✅ return response
      // set to redux this data
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
      // throw error; // ✅ important
    }
  };

  // use login 
  const userLogin = async(userData) =>{
    try {
        const res = await baseUrl.post('v1/users/signin',userData);
        toast.success(res?.data?.message)
        navigate('/')
        // store data in redux
        
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
    }
  }


  // user logout 
  const userLogout = async () =>{
    try {
      const resp = await baseUrl.post('v1/users/signout');
      toast.success(resp?.data?.message)
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
      
    }
  }

  return {
    signUp, 
    userLogin,
    userLogout
  };
};

export default useAuth;
