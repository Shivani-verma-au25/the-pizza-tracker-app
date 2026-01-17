import { baseUrl } from '@/utils/api'
import { useEffect } from 'react'


const useGetCurrentUser = () => {
        useEffect(() => {
            const getCurrentUser = async() =>{
        try {
            const resp = await baseUrl.get('v1/users/get-current-user');   
            console.log(resp.data);
            
            if (resp.data?.success) {
                console.log("current users data",resp);
                // todo: set user data in global state
            }
        } catch (error) {
            console.log("error in getting current user",error); 
        }
    }

        getCurrentUser() 
    } ,[])   
}

export default useGetCurrentUser