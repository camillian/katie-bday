import * as React from "react";

import "./css.css";
import Grid from "@mui/material/Grid";

export default function FoodPage() {
  return (
    <Grid container spacing={2}>
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
            <h1>the fuel</h1>
            <p>
              although not necessarily wine-focused, this old-timey speakeasy
              gives me wine bar vibes, and wine bars are simply the best.
              there's many other options to fuel our day if this isn't
              preferred, but wherever we end up choosing, i'll make a
              reservation, we'll get dressed up, and hopefully we can
              tipsy-flirt with the bartender like we did in boston.
            </p>
          </body>
          <a href="https://raisedxwolves.com/gallery/">
            <img
              src={require("./raisedbywolves.png")}
              alt=""
              width="80%"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </Grid>
    </Grid>
  );
}
