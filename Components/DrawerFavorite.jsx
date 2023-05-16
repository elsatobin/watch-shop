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

import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import DrawerCartProducts from "./DrawerCartProducts";
import DrawerCartFavorite from "./DrawerCartFavorite";

export default function DrawerFavorite() {
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
    <>
      <Fragment>
        <Tooltip title="Favorite List" arrow>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={toggleDrawer(true)}
          >
            <Badge badgeContent={4} color="primary">
              <FavoriteIcon />
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
                  <FavoriteIcon />

                  <Typography variant="h6" align="center">
                    Favorite List
                  </Typography>
                </Stack>
              </Stack>
            </Paper>

            {/* drawer items */}
            <Stack flexGrow={1} overflow="auto" p={1}>
              <DrawerCartFavorite open={open} />
            </Stack>

            {/* drawer footer */}
            <Paper elevation={3} square>
              <Stack p="15px" spacing={2} className="d_footer_shadow">
                <Typography variant="h6" align="center">
                  3 items{" "}
                </Typography>

                <Button variant="contained" color="error">
                  {"Clear"}
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </SwipeableDrawer>
      </Fragment>
    </>
  );
}
