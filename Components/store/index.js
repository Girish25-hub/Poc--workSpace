import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/userSlice';
//import productsApi from './slices/apiSlice';
import logInSlice from './slices/logInSlice';
import filterSlice from './slices/filterSlice';
import brandSlice from './slices/brandSlice';
import typeSlice from './slices/typeSlice'
import userReducer from './slices/apiSlice';

const store = configureStore({
    reducer:{
        users:userSlice, 
        userApi:userReducer,
        loginLogout:logInSlice,
        filter:filterSlice,
        brands:brandSlice,
        types:typeSlice,
    },

});

export default store;
