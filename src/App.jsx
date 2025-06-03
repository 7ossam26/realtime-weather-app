/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Test from "./Test";
import "./App.css";
// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

// libraries
import axios from "axios";
import moment from "moment";
import "moment/locale/ar.js";
import { useTranslation } from "react-i18next";

// redux
import { useDispatch, useSelector } from "react-redux";
import { changeResult } from "./weatherApiSlice.jsx";
import { fetchWeather } from "./weatherApiSlice.jsx";
moment.locale("ar");
const theme = createTheme({
  typography: {
    fontFamily: ["ibm"],
  },
});

let cancelAxios = null;
function App() {
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.weather.weather);
  const isLoading = useSelector((state) => state.weather.isLoading);
  const response = useSelector((state) => state.weather.response);
  const { t, i18n } = useTranslation();
  // ===states===
  const [time, setTime] = useState("");
  const [lang, setLang] = useState("ar");
  const icon = `https://openweathermap.org/img/wn/${temp.icon}@2x.png`;
  // === handlers ===
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
    // dispatch(changeResult());
    console.log(response);
    dispatch(fetchWeather());
    i18n.changeLanguage(lang);
  }, []);
  useEffect(() => {
    setTime(moment().format("LL"));
    // return () => {
    //   cancelAxios();
    // };
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm" style={{ textAlign: "center" }}>
          {/*Content Container*/}
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/*card*/}
            <div
              dir={lang === "en" ? "ltr" : "rtl"}
              style={{
                width: "100%",
                backgroundColor: "rgba(28, 52, 91, 36%)",
                color: "#fff",
                padding: "10px",
                borderRadius: "15px",
                boxShadow:
                  "0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 6px rgba(0, 0, 0, 0.12)",
              }}
            >
              {/*content*/}
              <div>
                {/*city&time*/}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir={lang === "en" ? "ltr" : "rtl"}
                >
                  <Typography
                    variant="h2"
                    style={{ marginRight: "20px", fontWeight: "600" }}
                  >
                    {t("cairo")}
                  </Typography>
                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    {time}
                  </Typography>
                </div>
                {/*==city&time==*/}

                <hr />
                {/*degree + icon*/}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "",
                  }}
                >
                  {/*Degree description*/}
                  <div>
                    {/*temp*/}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isLoading ? (
                        <CircularProgress style={{ color: "#fff" }} />
                      ) : (
                        ""
                      )}
                      {/*<CircularProgress style={{ color: "#fff" }} />*/}
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {temp.number}
                      </Typography>
                      <img src={icon} alt={"state"} />
                    </div>
                    {/*==tmp==*/}
                    <Typography variant="h6">{t(temp.description)}</Typography>
                    {/*min & max*/}
                    <div
                      style={{
                        display: "flex",
                        direction: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h5>
                        {" "}
                        {t("max")} : {temp.max}
                      </h5>
                      <h5>|</h5>
                      <h5>
                        {" "}
                        {t("min")}:{temp.min}{" "}
                      </h5>
                    </div>
                    {/*===min & max===*/}
                  </div>
                  {/*===Degree description===*/}

                  <CloudIcon style={{ fontSize: "200px", color: "white" }} />
                </div>
                {/*==degree + icon==*/}
              </div>
              {/*==content==*/}
            </div>
            {/*==card==*/}
            {/*translate button*/}
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
            {/*==translate button==*/}
          </div>
          {/*===Content Container==*/}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
