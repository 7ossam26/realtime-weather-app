/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchWeather = createAsyncThunk("myThunkFun", async () => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?lat=28.76&lon=29.23&appid=c51db6ddebd925d3e545d9a543ac5033",
    // {
    //   cancelToken: new axios.CancelToken((c) => {
    //     let cancelAxios = c;
    //   }),
    // },
  );
  const resTemp = Math.round(response.data.main.temp - 272.15);
  const min = Math.round(response.data.main.temp_min - 272.15);
  const max = Math.round(response.data.main.temp_max - 272.15);
  const description = response.data.weather[0].description;
  const icon = response.data.weather[0].icon;
  return { number: resTemp, min, max, description, icon, response };
});

const weatherApiSlice = createSlice({
  name: "weatherApi",
  initialState: {
    result: "empty",
    weather: {
      number: null,
      min: null,
      max: null,
      description: "",
      icon: "",
    },
    isLoading: false,
  },
  reducers: {
    changeResult: (state, action) => {
      state.result = "changed";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
        console.error("API Error:", action.error);
      });
  },
});
export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
