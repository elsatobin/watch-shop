import React, { Fragment, useState } from "react";
import {
  Badge,
  IconButton,
  Paper,
  Stack,
  SwipeableDrawer,
  Typography,
  Button,
  Tooltip,
} from "@mui/material";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import DrawerCartProducts from "./DrawerCartProducts";

export default function DrawerShopping() {
  const drawerWidth = 350;
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  // const list = () => (
  //   <Stack component="ul" spacing={2}>
  //   </Stack>
  // );

  return (
    <Fragment>
      <Tooltip title="Shopping Cart" arrow>
        <IconButton
          size="large"
          aria-label="Shopping Cart"
          color="inherit"
          onClick={toggleDrawer(true)}
        >
          <Badge badgeContent={4} color="primary">
            <ShoppingBagIcon />
          </Badge>
        </IconButton>
      </Tooltip>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Stack
          justifyContent="space-between"
          height="100%"
          width={drawerWidth}
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* drawer header */}
          <Paper elevation={3} square>
            <Stack direction="row" p="15px">
              <IconButton
                aria-label="delete"
                size="small"
                onClick={toggleDrawer(false)}
              >
                <CloseIcon />
              </IconButton>
              <Stack
                direction="row"
                spacing={2}
                flexGrow={1}
                justifyContent="center"
                alignItems="center"
              >
                <ShoppingBagIcon />

                <Typography variant="h6" align="center">
                  Shopping Cart
                </Typography>
              </Stack>
            </Stack>
          </Paper>

          {/* drawer items */}
          <Stack flexGrow={1} overflow="auto" p={1}>
            <DrawerCartProducts open={open} />
          </Stack>

          {/* drawer footer */}
          <Paper elevation={3} square>
            <Stack p="15px" spacing={2} className="d_footer_shadow">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="body1">Sub Total</Typography>
                <Typography variant="h6">3 items :</Typography>
                <Typography variant="h6">$ 300.00</Typography>
              </Stack>
              <Stack direction="row" width="100%" justifyContent="space-evenly">
                <Button variant="contained"> Check Out </Button>
                <Button variant="contained" color="error">
                  {"Clear"}
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>
      </SwipeableDrawer>
    </Fragment>
  );
}
