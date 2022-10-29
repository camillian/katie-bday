import * as React from "react";

import "./css.css";
import Grid from "@mui/material/Grid";

export default function Activity() {
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
            <h1>the activity</h1>
            <p>
              you put me on gold jewelry, and since neither of us ever take our
              jewelry off, and both don't really have a signature bracelet yet,
              what do you say we go get permanent bracelets zapped on?
            </p>
          </body>
          <a href="https://www.fuze-jewelry.com/get-fuzed">
            <img
              src={require("./fuze.png")}
              alt=""
              width="100%"
              target="_blank"
            />
          </a>
        </div>
      </Grid>
    </Grid>
  );
}
