import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Image from "next/image";
import image_1 from "../../images/pro-watch-1.png";
import image_2 from "../../images/pro-watch-2.png";
import image_3 from "../../images/pro-watch-3.png";
import image_4 from "../../images/pro-watch-4.png";
import image_5 from "../../images/pro-watch-5.png";

// Import Swiper styles
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/swiper-bundle.css";

// import required modules
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Link from "next/link";
import { ArrowBack, KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

SwiperCore.use([Navigation]);

const useSwiperRef = () => {
  const [wrapper, setWrapper] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current)
    }
  }, [])

  return [wrapper, ref]
}

export default function ProductsSwiper() {
  const images = [
    { src: image_1, alt: "" },
    { src: image_2, alt: "" },
    { src: image_3, alt: "" },
    { src: image_4, alt: "" },
    { src: image_5, alt: "" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

    const swipers = useSwiper();
    console.log(swipers);
    // swiper.on("slideChange", (e) => {
    //   setSlideProgress(e.progress);
    // });

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <Box py={8}>
      <Typography variant="h4" mb={5} mt={8} align="center">
        Featured Top
      </Typography>

      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        loop
        navigation={{ prevEl, nextEl }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
          console.log(prevRef.current);
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          991: {
            slidesPerView: 3.5,
          },
        }}
      >
        <Button
          variant="contained"
          color="shift"
          sx={{
            minWidth: "35px",
            height: 35,
            p: 0,
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          ref={prevElRef}
        >
          <KeyboardArrowLeft />
        </Button>

        <Button
          variant="contained"
          color="shift"
          sx={{
            minWidth: "35px",
            height: 35,
            p: 0,
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          ref={nextElRef}
        >
          <KeyboardArrowRight />
        </Button>
        {images.map((image, i) => (
          <SwiperSlide key={`slide_${i}`}>
            <Card>
              {/* <CardMedia component="img" alt="green iguana" image={image.src} /> */}
              <Image src={image.src} alt="" className="images" />
              <CardContent>
                {/* product Type */}
                <Typography gutterBottom variant="h5" component="div">
                  Watch, Accessories
                </Typography>
                <Link href="#">The Original Unisex leather ver 2018</Link>
                {/* product price */}
                <Stack direction="row" justifyContent="space-evenly">
                  <Typography
                    variant="h5"
                    sx={{ textDecoration: "line-through" }}
                  >
                    $150.00
                  </Typography>
                  <Typography variant="h5">$120.00</Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <Stack direction="row" justifyContent="center" spacing={3}>
                  <IconButton aria-label="Add to Favorite List" color="error">
                    <FavoriteBorderIcon />
                    {/* <FavoriteIcon /> */}
                  </IconButton>

                  <Button
                    variant="contained"
                    startIcon={<ShoppingBagIcon />}
                    onClick={() => console.log("clicked")}
                  >
                    Add To Basket
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
