import React, { useRef, useState } from "react";
import { Button, Grow, Paper, Popper, MenuItem, MenuList, Box, } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";





export default function Dropdown(options) {
   console.log(options);
   const [open, setOpen] = useState(false);
   const anchorRef = useRef(null);
   const [selectedIndex, setSelectedIndex] = useState(1);

   const handleClick = () => {
      console.info(`You clicked ${options.data[selectedIndex]}`);
   };

   const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setOpen(false);
   };

   const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
   };

   const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
         return;
      }

      setOpen(false);
   };

   return (
      <Box sx={{ zIndex: 1, position: "relative" }}>
         <Button
            // onClick={handleClick}
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            // aria-haspopup="menu"
            onClick={handleToggle}
            sx={{ color: "white" }}
         >
            {options.data[selectedIndex].img}
            {options.data[selectedIndex].name}
            <KeyboardArrowDownIcon />
         </Button>
         <Popper
            style={{ zIndex: 2000, position: "absolute", top:"100%", left: 0 }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            anchorOrigin={{
               vertical: "bottom",
               horizontal: "left",
            }}
         >
            <Paper>
               <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                     id="split-button-menu"
                     autoFocusItem
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}

                     // sx={{position:"absolute"}}
                  >
                     {options.data.map((option, index) => (
                        <MenuItem
                           key={option.name}
                           selected={index === selectedIndex}
                           onClick={(event) =>
                              handleMenuItemClick(event, index)
                           }
                           anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "left",
                           }}
                        >
                           {option.img} {option.name}
                        </MenuItem>
                     ))}
                  </MenuList>
               </ClickAwayListener>
            </Paper>
         </Popper>
      </Box>
   );
}
