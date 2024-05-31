import todoReducer from "./slices/todoslice";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        todo:todoReducer
    },
    // devTools:process.env.NODE_ENV!=="Preoduction",
})
export default store;