import {createSlice} from '@reduxjs/toolkit';

const initialState={
    value:{
         isLogIn:true
        }
};
const logInSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        setLogIn:(state,action)=>{
            state.value.isLogIn= !state.value.isLogIn;
        },
        setLogOut:(state,action)=>{
            state.isLogIn=false;
        },
 
    },
});

// console.log(logInSlice.actions.setLogIn(),"logInSlice");
export default logInSlice.reducer;
export const {setLogIn,setLogOut} = logInSlice.actions;
