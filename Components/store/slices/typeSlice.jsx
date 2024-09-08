import {createSlice} from '@reduxjs/toolkit';
const typeSlice=createSlice({
    name:'type',
    initialState:[],
    reducers:{
        setType:(state,action)=>{
           
            const radioValue=action.payload.value;
            const radioChecked=action.payload.checked;
            if(radioChecked){
                state.push(radioValue)
            }else{
                state.splice(state.findIndex((ele) => ele.id === radioValue), 1);
            }
        },
    }
});
// console.log( typeSlice.actions.setType(),"setBrand");
export default typeSlice.reducer;
export const {setType} =  typeSlice.actions;
