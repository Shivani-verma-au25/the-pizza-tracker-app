import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        userData : null,
        userLoading : false,
        isAuthenticated : false,
    }

const usersSlice = createSlice({
    name : 'auth',
    initialState : {
        userData : null,
        userLoading : false,
    },

    reducers:{
        setusersLoading : (state ,action) =>{
            state.userLoading = action.payload;
        },
        setUsersData : (state ,action) =>{
            console.log(action.payload,"redux");
            state.userData = action?.payload;
            state.isAuthenticated = true;
        },
        logOut : (state ,action) =>{
            state.userData = null,
            state.isAuthenticated = false
        }
    }
})


export const {setUsersData,setusersLoading ,logOut} = usersSlice.actions;
export default usersSlice.reducer;