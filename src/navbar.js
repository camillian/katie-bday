import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CakeIcon from "@mui/icons-material/Cake";
import WineBarIcon from "@mui/icons-material/WineBar";
import DiamondIcon from "@mui/icons-material/Diamond";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CelebPage from "./celeb_page";
import DatePage from "./date_page";
import ActivityPage from "./activity_page";
import FoodPage from "./food_page";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("celebration");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);

  let item;
  if (value === "date") {
    item = <DatePage></DatePage>;
  } else if (value === "fuel") {
    item = <FoodPage></FoodPage>;
  } else if (value === "activity") {
    item = <ActivityPage></ActivityPage>;
  } else {
    item = <CelebPage></CelebPage>;
  }

  return (
    <div>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          style={{ color: "#00917C" }}
          label="celebration!"
          value="celebration"
          icon={<CakeIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#00917C" }}
          label="the activity"
          value="activity"
          icon={<DiamondIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#00917C" }}
          label="the fuel"
          value="fuel"
          icon={<WineBarIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#00917C" }}
          label="put it in the gcal"
          value="date"
          icon={<CalendarMonthIcon />}
        />
      </BottomNavigation>
      <Container maxWidth="md">
        <Box
          display="flex"
          sx={{
            bgcolor: "#BDE99E",
            height: "80vh",
            borderRadius: "2%",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {item}
        </Box>
      </Container>
    </div>
  );
}
