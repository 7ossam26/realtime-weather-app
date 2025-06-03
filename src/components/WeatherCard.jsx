import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import CircularProgress from "@mui/material/CircularProgress";
import { useTranslation } from "react-i18next";

function WeatherCard({ temp, isLoading, time, lang, icon }) {
  const { t } = useTranslation();

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      style={{
        width: "100%",
        backgroundColor: "rgba(28, 52, 91, 36%)",
        color: "#fff",
        padding: "10px",
        borderRadius: "15px",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 6px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "start",
          }}
          dir={lang === "en" ? "ltr" : "rtl"}
        >
          <Typography variant="h2" style={{ marginRight: "20px", fontWeight: "600" }}>
            {t("cairo")}
          </Typography>
          <Typography variant="h5" style={{ marginRight: "20px" }}>
            {time}
          </Typography>
        </div>

        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isLoading ? <CircularProgress style={{ color: "#fff" }} /> : ""}
              <Typography variant="h1" style={{ textAlign: "right" }}>
                {temp.number}
              </Typography>
              <img src={icon} alt={"state"} />
            </div>
            <Typography variant="h6">{t(temp.description)}</Typography>
            <div
              style={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5> {t("max")} : {temp.max}</h5>
              <h5>|</h5>
              <h5> {t("min")}:{temp.min} </h5>
            </div>
          </div>

          <CloudIcon style={{ fontSize: "200px", color: "white" }} />
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;