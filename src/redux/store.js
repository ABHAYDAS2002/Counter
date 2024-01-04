import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
//to create store we want to install redux tool kit : we use the method configureStore
export const store = configureStore({
    //reducer can only update value of state in store
    //reducer key is predefine (its an object which can hold more than one reducer )
    

    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default

        counter:counterSlice
    }
})