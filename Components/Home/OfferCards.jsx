import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
  Container,
  Box,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

import style from "../../styles/Home.module.css"

import watch_img_1 from "../../images/watch-1.png";
import watch_img_2 from "../../images/watch-2.png";
import watch_img_3 from "../../images/watch-3.png";

// const Item = styled(Paper)(({ theme }) => ({
//    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//    ...theme.typography.body2,
//    padding: theme.spacing(2),
//    textAlign: "center",
//    color: theme.palette.text.secondary,
// }));

export default function OfferCards() {
  console.log(watch_img_1);
  return (
    <>
      <Grid2 container spacing={{ xs: 2, md: 3 }} py={8}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid2 xs={12} sm={6} md={4} key={index}>
            <Card
              className={style.OfferCard}
              sx={{
                position: "relative",
                background: "transparent",
                transition: ".5s ease-out",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
                  width="100%"
                  image={watch_img_1.src}
                  alt="green iguana"
                />
                {/* <CardContent sx={{position:"absolute", top:0}}>
                           <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                           >
                              Lizard
                           </Typography>
                           <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                           </Typography>
                        </CardContent> */}
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
