import React, { Fragment, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
  Paper,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2

import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CoffeeIcon from "@mui/icons-material/Coffee";
import MoodIcon from "@mui/icons-material/Mood";

import Image from "next/image";
import about_us_img from "../../images/about-us.jpg";
import banner_img1 from "../../images/banner-10.jpg";
import banner_img2 from "../../images/banner-11.jpg";

import TeamMembers from "./TeamMembers";
import SwipperArticales from "./SwipperArticales";

export default function AboutUs() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  return (
    <Fragment>
      <Container>
        <Box py={8}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            flexBasis="50%"
          >
            <Stack spacing={4} height="100%" lineHeight={2}>
              <Typography
                variant="h4"
                sx={{
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "120%",
                    width: "80px",
                    height: "2px",
                    backgroundColor: "#dddddd",
                    transition: "0.4s ease",
                  },
                }}
              >
                WELCOME TO DEVITA STORE !
              </Typography>

              <Typography
                variant="body1"
                fontWeight={700}
                lineHeight="inherit"
                textAlign="justify"
              >
                Devita Shop is a premium HTML template designed and develoved
                from the ground up with the sole purpose of helping you create
                an astonishing, the beautiful and user friendly website that
                will boost your product’s sales.
              </Typography>

              <Typography
                variant="body1"
                lineHeight="inherit"
                textAlign="justify"
              >
                The theme design package provides a complete Magento theme set
                for your online store according to your desired theme. This
                includes all Magento themes that are required for your online
                store &apos;s successful implementation.
              </Typography>

              <Button variant="contained">Shop Now</Button>
            </Stack>

            <Stack height="100%">
              <Image src={about_us_img} alt="About us" />
            </Stack>
          </Stack>
        </Box>
      </Container>
      <Box bgcolor="action.selected" py={6}>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            flexWrap="wrap"
            rowGap={8}
            textTransform="capitalize"
          >
            <Stack
              flexBasis={{ xs: "100%", sm: "50%", md: "25%" }}
              textAlign="center"
              alignItems="center"
              spacing={3}
            >
              <LocalMallIcon fontSize="large" color="primary" />
              <Typography variant="h4" fontWeight={700}>
                765
              </Typography>
              <Typography variant="h6" color="primary">
                Product Seald
              </Typography>
            </Stack>
            <Stack
              flexBasis={{ xs: "100%", sm: "50%", md: "25%" }}
              textAlign="center"
              alignItems="center"
              spacing={3}
            >
              <AccountBalanceIcon fontSize="large" color="primary" />
              <Typography variant="h4" fontWeight={700}>
                112
              </Typography>
              <Typography variant="h6" color="primary">
                Branding
              </Typography>
            </Stack>
            <Stack
              flexBasis={{ xs: "100%", sm: "50%", md: "25%" }}
              textAlign="center"
              alignItems="center"
              spacing={3}
            >
              <CoffeeIcon fontSize="large" color="primary" />
              <Typography variant="h4" fontWeight={700}>
                375
              </Typography>
              <Typography variant="h6" color="primary">
                Cups Of Coffee
              </Typography>
            </Stack>
            <Stack
              flexBasis={{ xs: "100%", sm: "50%", md: "25%" }}
              textAlign="center"
              alignItems="center"
              spacing={3}
            >
              <MoodIcon fontSize="large" color="primary" />
              <Typography variant="h4" fontWeight={700}>
                549
              </Typography>
              <Typography variant="h6" color="primary">
                Happy Clients
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <TeamMembers />
      <Container>
        {/* offer bunner */}
        <Grid2 container spacing={3} my={4} direction="row">
          <Grid2 Item xs={12} md={8} overflow="hidden">
            <Box overflow="hidden">
              <Image className="images" src={banner_img1} alt="offer bunner" />
            </Box>
          </Grid2>
          <Grid2 Item xs={12} md={4} overflow="hidden">
            <Box>
              <Image className="images" src={banner_img2} alt="offer bunner" />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      {/* Swipper Articales component */}
      <SwipperArticales />
    </Fragment>
  );
}
