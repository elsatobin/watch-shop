"use client"
import React from "react";
import TopBar from "./TopBar";
import NavAppBar from "./NavAppBar";

function Header() {
  return (
    <header>
      {/* <TopBar /> */}
      <NavAppBar />
    </header>
  );
}
export default Header;
// export default React.memo(Header);