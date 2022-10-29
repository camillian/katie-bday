import * as React from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import { Calendar } from "react-modern-calendar-datepicker";
import "./css.css";
import { Grid, Button } from "@mui/material/";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailer from "./emailer";
import emailjs from "@emailjs/browser";

export default function DatePage() {
  const [selectedDays, setSelectedDays] = React.useState([]);
  console.log(selectedDays);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#035956",
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.send(
      "service_8h1ptdc",
      "template_6g2kvr7",
      {
        message: selectedDays.map((i) => {
          console.log([i["month"], i["day"], i["year"]]);
          return ["date " + i, i["month"], i["day"], i["year"]];
        }),
      },
      "kkP-WtvJpT06Avn4G"
    );
    alert("gcal submission sent!");
  };

  return (
    <Grid container justifyContent="center" display="flex">
      <Grid item xs={2}>
        <img
          src={require("./3-32993_jungle-vines-png.png")}
          alt=""
          width="100%"
        />
      </Grid>
      <Grid
        item
        xs={10}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 1 }}
        display="flex"
      >
        <div>
          <head>
            <link href="css.css" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <h1> let's put it in the gcal!</h1>
            <h3> select a date and we'll make it happen </h3>
          </body>
        </div>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item xs={8} display="flex">
            <Calendar
              value={selectedDays}
              onChange={setSelectedDays}
              inputPlaceholder="Select a day"
              shouldHighlightWeekends
            />
          </Grid>
          <Grid item xs={4} classStyle="gcal">
            <ThemeProvider theme={theme}>
              <Button variant="contained" onClick={handleSubmit}>
                gcal request woo
              </Button>
            </ThemeProvider>
            <p>(this should email me your choice, fingers crossed lol)</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
