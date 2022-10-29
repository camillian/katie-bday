import * as React from "react";
import "./css.css";
import Grid from "@mui/material/Grid";

export default function CelebPage() {
  return (
    <Grid container spacing={2} display="flex">
      <Grid item xs={2}>
        <img
          src={require("./3-32993_jungle-vines-png.png")}
          alt=""
          width="100%"
        />
      </Grid>
      <Grid
        item
        xs={8}
        justifyContent="center"
        alignItems="center"
        sx={{ p: 2 }}
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
          <body className="bday">
            <h1>happy birthday katie !</h1>
            <p>
              according to google, if we use your 19th bday as a reference for
              around the time we met, we've known each other for somewhere
              around 1,459 days. that's pretty sick. writing good bday cards is
              not a particularly strong skill of mine, but coding is, so why not
              a bday web app?? i hope you are having an amazing time with your
              pup in the woods. since i can't be with you on the day you turn
              23, i figured i would plan us something to celebrate on a later
              date. click through the icons on the top to see the plan, and go
              to the "put it in the gcal" tab to select a date :)
            </p>
            <p class="signature">mucho mucho love!! -cam</p>
          </body>
        </div>
      </Grid>
    </Grid>
  );
}
