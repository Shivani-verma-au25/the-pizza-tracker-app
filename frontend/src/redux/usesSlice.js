import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        userData : null,
        userLoading : false,
        isAuthenticated : false,
        isLoading : false
    }

const usersSlice = createSlice({
    name : 'auth',
    initialState,

    reducers:{
        setusersLoading : (state ,action) =>{
            state.userLoading = action.payload;
        },
        setUsersData : (state ,action) =>{
            console.log(action.payload,"redux");
            state.userData = action?.payload;
            state.isAuthenticated = true;
        },
        logOut : (state ) =>{
            state.userData = null,
            state.isAuthenticated = false
        }
    }
})


export const {setUsersData,setusersLoading ,logOut} = usersSlice.actions;
export default usersSlice.reducer;