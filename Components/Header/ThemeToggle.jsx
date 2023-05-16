import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";




export default function ThemeToggle({ toggleDark, settoggleDark }) {
  const handelToggle = () => settoggleDark(!toggleDark);
  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={handelToggle}
      // color={toggleDark ? "warning" : "#bebebe"}
    >
      {toggleDark ? (
        <Brightness7Icon color="warning" />
      ) : (
        <Brightness4Icon
          // style={{ color: "#bebebe" }}
        />
      )}
    </IconButton>
  );
}
