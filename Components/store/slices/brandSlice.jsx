import {createSlice} from '@reduxjs/toolkit';
const brandSlice=createSlice({
    name:'brand',
    initialState:[],
    reducers:{
        setBrand:(state,action)=>{
            const selectedCheckBoxValue=action.payload.value;
            const selectCheckBoxChecked=action.payload.checked;
            if(selectCheckBoxChecked){
                // state.push({selectedCheckBoxValue, isChecked:selectCheckBoxChecked});
                state.push(selectedCheckBoxValue);
              }else{
               state.splice(state.findIndex((arrow) => arrow.id === selectedCheckBoxValue), 1);
               
              }
        },
    }
});

export default brandSlice.reducer;
export const {setBrand} =  brandSlice.actions;
