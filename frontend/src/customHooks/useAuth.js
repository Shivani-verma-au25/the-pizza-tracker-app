import { logOut, setUsersData, setusersLoading } from '@/redux/usesSlice';
import { baseUrl } from '@/utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const useAuth = () => {
    // user signup 
    const navigate = useNavigate()
    const disptach = useDispatch()

  const signUp = async (userData) => {    
    disptach(setusersLoading(true))
    try {
      const res = await baseUrl.post('v1/users/signup', userData);
      toast.success(res?.data?.message)
      // return res.data; // ✅ return response
      disptach(setUsersData(res?.data?.user))
      // set to redux this data
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
      // throw error; // ✅ important
    }finally{
      setusersLoading(false)
    }
  };

  // use login 
  const userLogin = async(userData) =>{
    disptach(setusersLoading(true))
    try {
        const res = await baseUrl.post('v1/users/signin',userData);
        toast.success(res?.data?.message)
        disptach(setUsersData(res?.data?.user))
        navigate('/')
        // store data in redux
        
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
    }finally{
      disptach(setusersLoading(false))
    }
  }


  // user logout 
  const userLogout = async () =>{
    disptach(setusersLoading(true))
    try {
      const resp = await baseUrl.post('v1/users/signout');
      disptach(logOut())
      toast.success(resp?.data?.message)
    } catch (error) {
      console.error(
        "Error while signup:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data || error.message)
    }finally{
      disptach(setusersLoading(false))
    }
  }

  return {
    signUp, 
    userLogin,
    userLogout
  };
};

export default useAuth;
