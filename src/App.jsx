/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/App.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import moment from "moment";
import "moment/locale/ar.js";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/slices/weatherApiSlice.jsx";
import WeatherCard from "./components/WeatherCard";

moment.locale("ar");
const theme = createTheme({
  typography: {
    fontFamily: ["ibm"],
  },
});

function App() {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.weather.weather);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const { t, i18n } = useTranslation();
  
  const [time, setTime] = useState("");
  const [lang, setLang] = useState("ar");
  const icon = `https://openweathermap.org/img/wn/${temp.icon}@2x.png`;
  
  function handleLanguageClick() {
    if (lang === "ar") {
      setLang("en");
      i18n.changeLanguage("en");
    } else if (lang === "en") {
      setLang("ar");
      i18n.changeLanguage("ar");
    }
  }
  
  useEffect(() => {
    dispatch(fetchWeather());
    i18n.changeLanguage(lang);
  }, []);
  
  useEffect(() => {
    setTime(moment().format("LL"));
  }, []);
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ textAlign: "center" }}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <WeatherCard 
              temp={temp} 
              isLoading={isLoading} 
              time={time} 
              lang={lang} 
              icon={icon} 
            />
            
            <div
              dir={"rtl"}
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Button
                style={{ color: "white" }}
                variant="text"
                onClick={handleLanguageClick}
              >
                {lang === "en" ? "Arabic" : "انجليزي"}
              </Button>
            </div>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
