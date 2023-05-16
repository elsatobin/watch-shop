import { Box, Stack } from "@mui/material";
import React from "react";
import TopBar from "./TopBar";
import NavAppBar from "./NavAppBar";

export default function Header({ toggleDark, settoggleDark }) {
  return (
    <header>
      {/* <TopBar /> */}
      <NavAppBar toggleDark={toggleDark} settoggleDark={settoggleDark} />
    </header>
  );
}
