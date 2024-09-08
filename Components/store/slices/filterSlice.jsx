import {createSlice} from '@reduxjs/toolkit';
const filterSlice=createSlice({
    name:'color',
    initialState:[],
    reducers:{
        setColor(state,action){
            state.push(action.payload);
        },
    }
});

// console.log(filterSlice.actions.setColor(),"filterSlice");
export default filterSlice.reducer;
export const {setColor} = filterSlice.actions;
