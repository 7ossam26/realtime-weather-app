import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReducer from "./weatherApiSlice.jsx";
export default configureStore({
  reducer: {
    weather: weatherApiSliceReducer,
  },
});
