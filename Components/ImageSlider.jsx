import React from "react";
import { useState } from "react";
// import { Carousel } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Image from "next/image";
import image_1 from "../images/pro-watch-1.png";
import image_2 from "../images/pro-watch-2.png";
import image_3 from "../images/pro-watch-3.png";
import image_4 from "../images/pro-watch-4.png";
import image_5 from "../images/pro-watch-5.png";
// import image_6 from "../images/pro-watch-6.jpg";

import {
   Box,
   Button,
   Card,
   CardActionArea,
   CardActions,
   CardContent,
   CardMedia,
   Grid,
   Stack,
   Typography,
} from "@mui/material";
import Link from "next/link";

export default function ImageSlider() {
   const [activeStep, setActiveStep] = useState(0);

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
   };

   const images = [
      {
         url: image_1,
         caption: "Image 1",
      },
      {
         url: image_2,
         caption: "Image 2",
      },
      {
         url: image_3,
         caption: "Image 3",
      },
      {
         url: image_4,
         caption: "Image 3",
      },
      {
         url: image_5,
         caption: "Image 3",
      },
      {
         url: image_4,
         caption: "Image 3",
      },
      {
         url: image_5,
         caption: "Image 3",
      },
   ];

   return (
      <>
         <Button variant="outlined" onClick={handleBack}>
            Prev{" "}
         </Button>
         <Stack direction="row" flexWrap="nowrap" spacing={3} overflow="auto">
            {images.map((image, index) => (
               <Card key={index} sx={{ flex: "1 0 25%", background: "#242424", color: "white" }}>
                  <CardMedia
                     component="img"
                     alt={image.caption}
                     // height="140"
                     image={image.url.src}
                  />
                  <CardContent>
                     <Typography gutterBottom component="p">
                        Watch, Accessories
                     </Typography>
                     <Link href="#">
                        Black &amp; gold michael kors watch ver 2018
                     </Link>
                     <Typography variant="body2" >
                        Lizards are a widespread group of squamate reptiles,
                     </Typography>
                     <Typography gutterBottom variant="h6">
                        $260.00
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Stack direction="row" justifyContent="center" spacing={2}>
                        <Button variant="contained" size="small">
                           <FavoriteBorderIcon />
                        </Button>
                        <Button
                           variant="contained"
                           size="small"
                           startIcon={<ShoppingBagIcon />}
                        >
                           Add To Cart
                        </Button>
                     </Stack>
                  </CardActions>
               </Card>
            ))}
         </Stack>

         {/* <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
         >
            {images.map((image, index) => (
               <Grid xs={2} sm={4} md={4} gap={3} spacing={3} key={index}>
                  <Card
                     sx={{ position: "relative", background: "transparent" }}
                  >
                     <CardActionArea>
                        <CardMedia
                           component="img"
                           // height="140"
                           width="100%"
                           src={image.url.src}
                           alt={image.caption}
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
                        </CardContent> 
                     </CardActionArea>
                  </Card>
               </Grid>
            ))}
         </Grid> */}
         <Button variant="outlined" onClick={handleNext}>
            {" "}
            Next{" "}
         </Button>

         {/* <Card
                  key={index}
                  sx={{
                     background: "transparent",
                     flex: "1 0 25%",
                  }}
               >
                  <CardMedia
                     component="img"
                     // height="140"
                     width="100%"
                     src={image.url.src}
                     alt={image.caption}
                  />
                  <CardContent>
                     <Typography gutterBottom component="span">
                        Watch, Accessories
                     </Typography>
                     <Link href="#">
                        Black &amp; gold michael kors watch ver 2018
                     </Link>
                     {/* <Typography variant="body2" color="text.secondary">
                           Lizards are a widespread group of squamate reptiles,
                        </Typography> 
                     <Typography gutterBottom component="span">
                        $260.00
                     </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small"><FavoriteBorderIcon/></Button>
                     <Button size="small">
                        <ShoppingBagIcon />
                     </Button>
                  </CardActions>
               </Card> */}
      </>
   );
}
