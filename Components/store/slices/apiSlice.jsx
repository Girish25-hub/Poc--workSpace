import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchApi= createAsyncThunk('fetchApi', async()=>{
    const response= await fetch('https://6332cfeda54a0e83d25909d3.mockapi.io/api/v1/products')
    const jsonData =await response.json();
    return jsonData;
});

const apiSlice=createSlice({
    name:'api',
    initialState:{
        loading: false,
        data:null,
        error: null 
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
});
export default apiSlice.reducer;

