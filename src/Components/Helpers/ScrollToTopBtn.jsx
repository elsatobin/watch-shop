"use client";
import React, { useEffect, useState } from "react";
import {
	Stack,
	IconButton,
	Box,
	Zoom,
	createTheme,
	Button,
} from "@mui/material";

import { motion, useAnimationControls, useScroll } from "framer-motion";

import { FaArrowUp } from "react-icons/fa";
// import { ButtonBorder } from "../GlobalComponents";

export default function ScrollToTopBtn() {
	const theme = createTheme();
	// const ScrollToTopContainerVariants = {
	//   hide: { opacity: 0, x: "-80px" },
	//   show: { opacity: 1, x: 0 },
	// };

	const { scrollYProgress } = useScroll();
	const controls = useAnimationControls();
	const [zoomA, setzoomA] = useState(false);
	const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

	function scrollToTop() {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	useEffect(() => {
		return scrollYProgress.on("change", (latestValue) => {
			console.log(scrollYProgress);
			if (latestValue > 0.1) {
				// controls.start(true);
				setzoomA(true);
			} else {
				// controls.start(false);
				setzoomA(false);
			}
			console.log(zoomA);
		});
	}, [controls, scrollYProgress, zoomA]);

	return (
		<>
			<Zoom in={zoomA}>
				<Stack
					bgcolor="primary"
					sx={{
						position: "fixed",
						top: "90%",
						right: "20px",
						zIndex: 100,
					}}
				>
					<Button
						// variant="shiftP"
						// color="primary"
						onClick={scrollToTop}
						sx={{
							borderRadius: "50%",
							p: "7px",
							minWidth: 0,
							width: "35px",
							height: "35px",
							boxShadow: "0 0 10px 0 rgb(0 0 0 / 40%)",
							"&:hover": { transform: "scale(1.2)" },
						}}
					>
						<FaArrowUp />
					</Button>

					{/* <ButtonBorder
            onClick={scrollToTop}
            color="primary"
            sx={{
					borderRadius: "50%",
					p: "7px",
					minWidth: 0,
					width: "35px",
					height: "35px",
					"&:hover": {
						transform: "scale(1.2)",
					},
            }}
         >
            <FaArrowUp />
          </ButtonBorder> */}
				</Stack>
			</Zoom>
		</>
	);
}
