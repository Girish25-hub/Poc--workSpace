import {createSlice} from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload);
        },
        removeItem(state,action){
            let userIndexNum=state.indexOf(action.payload)
            state.splice(userIndexNum,1)
        }
    },
});

// console.log(userSlice.actions.addUser(),"userSlice");
export default userSlice.reducer;
export const {addUser,removeItem} = userSlice.actions;
