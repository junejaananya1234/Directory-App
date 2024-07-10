import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./Slices/PersonSlice";

const store = configureStore({
      reducer:{
        'person' : PersonSlice
      }
})
export default store;