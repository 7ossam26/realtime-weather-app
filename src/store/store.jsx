import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReducer from "./slices/weatherApiSlice.jsx";

export default configureStore({
  reducer: {
    weather: weatherApiSliceReducer,
  },
});