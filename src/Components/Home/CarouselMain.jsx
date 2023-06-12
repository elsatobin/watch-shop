"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material/";

import Image from "next/image";
import image_1 from "../../images/slider-24.jpg";
import image_2 from "../../images/slider-25.jpg";
import image_3 from "../../images/slider-26.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import classes from "../../styles/home.module.css";
import { motion } from "framer-motion";

import { ButtonBorder } from "../Helpers/GlobalComponents";

export default function CarouselMain() {
	const containerRef = useRef(null);
	console.log(containerRef);

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
				duration: 0.5,
			},
		},
	};
	const item = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0 },
	};

	const [change, setChange] = useState(0);
	console.log(change);

	return (
		<Carousel
			showArrows={true}
			showThumbs={false}
			// emulateTouch
			stopOnHover
			onChange={(e) => setChange(e)}
			infiniteLoop
			useKeyboardArrows={true}
			showStatus={false}
			preventMovementUntilSwipeScrollTolerance={true}
			swipeScrollTolerance={50}
		>
			<Box height="100vh">
				<Image
					src={image_1}
					alt="Exclusive Offer -10% Off This Week"
					className={classes.carousel_image}
					priority={true}
					placeholder="blur"
				/>
				<Container>
					<Stack
						position="absolute"
						top={0}
						width="100%"
						height="100%"
						flexDirection="colmun"
						alignItems="start"
						justifyContent="center"
						textAlign="start"
						spacing={4}
						component={motion.ul}
						variants={container}
						initial="hidden"
						animate={change == 0 ? "visible" : "hidden"}
						color="#fff"
					>
						<Typography
							variant="h5"
							mr={5}
							component={motion.li}
							variants={item}
							color="primary"
						>
							Exclusive Offer -10% Off This Week
						</Typography>

						<Typography
							variant="h2"
							component={motion.li}
							variants={item}
						>
							Blancpain Villeret
						</Typography>
						<Typography variant="p" component={motion.li} variants={item}>
							This elegant day-date from Villeret collection was
							introduced at Baselworld 2017.
						</Typography>
						<Stack
							direction="row"
							alignItems="end"
							component={motion.li}
							variants={item}
						>
							<Typography variant="body2" component="span"></Typography>
							Starting at &#160;
							<Typography variant="h3" color="primary">
								$16.100.99
							</Typography>
						</Stack>
						<Box component={motion.li} variants={item}>
							<ButtonBorder sx={{ py: "10px" }}>
								Shopping Now
							</ButtonBorder>
						</Box>
					</Stack>
				</Container>
			</Box>

			<Box height="100vh">
				<Image
					src={image_2}
					alt="Exclusive Offer -10% Off This Week"
					className={classes.carousel_image}
					priority={true}
					placeholder="blur"
				/>
				<Container>
					<Stack
						position="absolute"
						top={0}
						width="100%"
						height="100%"
						flexDirection="colmun"
						alignItems="start"
						justifyContent="center"
						textAlign="start"
						spacing={4}
						component={motion.ul}
						variants={container}
						initial="hidden"
						animate={change == 1 ? "visible" : "hidden"}
						color="#fff"
					>
						<Typography
							variant="h5"
							mr={5}
							component={motion.li}
							variants={item}
							color="primary"
						>
							Exclusive Offer -10% Off This Week
						</Typography>

						<Typography
							variant="h2"
							component={motion.li}
							variants={item}
						>
							Blancpain Villeret
						</Typography>
						<Typography variant="p" component={motion.li} variants={item}>
							This elegant day-date from Villeret collection was
							introduced at Baselworld 2017.
						</Typography>
						<Stack
							direction="row"
							alignItems="end"
							component={motion.li}
							variants={item}
						>
							<Typography variant="body2" component="span"></Typography>
							Starting at &#160;
							<Typography variant="h3" color="primary">
								$16.100.99
							</Typography>
						</Stack>
						<Box component={motion.li} variants={item}>
							<ButtonBorder sx={{ py: "10px" }}>
								Shopping Now
							</ButtonBorder>
						</Box>
					</Stack>
				</Container>
			</Box>

			<Box height="100vh">
				<Image
					src={image_3}
					alt="Exclusive Offer -10% Off This Week"
					className={classes.carousel_image}
					priority={true}
					placeholder="blur"
				/>
				<Container>
					<Stack
						position="absolute"
						top={0}
						width="100%"
						height="100%"
						flexDirection="colmun"
						alignItems="start"
						justifyContent="center"
						textAlign="start"
						spacing={4}
						component={motion.ul}
						variants={container}
						initial="hidden"
						animate={change == 2 ? "visible" : "hidden"}
						color="#fff"
					>
						<Typography
							variant="h5"
							mr={5}
							component={motion.li}
							variants={item}
							color="primary"
						>
							Exclusive Offer -10% Off This Week
						</Typography>

						<Typography
							variant="h2"
							component={motion.li}
							variants={item}
						>
							Blancpain Villeret
						</Typography>
						<Typography variant="p" component={motion.li} variants={item}>
							This elegant day-date from Villeret collection was
							introduced at Baselworld 2017.
						</Typography>
						<Stack
							direction="row"
							alignItems="end"
							component={motion.li}
							variants={item}
						>
							<Typography variant="body2" component="span"></Typography>
							Starting at &#160;
							<Typography variant="h3" color="primary">
								$16.100.99
							</Typography>
						</Stack>
						<Box component={motion.li} variants={item}>
							<ButtonBorder sx={{ py: "10px" }}>
								Shopping Now
							</ButtonBorder>
						</Box>
					</Stack>
				</Container>
			</Box>
		</Carousel>
	);
}
