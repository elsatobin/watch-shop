"use client";
import React, {
	Fragment,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import { AccountBalance, Coffee, LocalMall, Mood } from "@mui/icons-material";

import Image from "next/image";
import about_us_img from "../../images/about-us.jpg";
import banner_img1 from "../../images/banner-10.jpg";
import banner_img2 from "../../images/banner-11.jpg";

import { OurStatistics } from "@/utility/data";
import TeamMembers from "./TeamMembers";
import SwipperArticales from "./SwipperArticales";

function AboutUs() {
	const [statistics, setStatistics] = useState(OurStatistics);
	const OurStacsRef = useRef();

	console.log(OurStacsRef);

	const increaseNumbers = useCallback((e) => {
		let goal = e.dataset.goal;
		const count = setInterval(() => {
			if (+e.textContent < +goal) {
				++e.textContent;
				console.log(`${e.textContent}+`);
			} else if (+e.textContent == +goal) {
				e.textContent = e.textContent + "+";
				clearInterval(count);
			}
		}, 12000 / goal);
	}, []);

	const handleScroll = useCallback(() => {
		const statcsDomEle = OurStacsRef.current;
		if (window.scrollY > statcsDomEle[0].offsetTop - window.innerHeight) {
			statcsDomEle.forEach((e) => increaseNumbers(e));
		}
	}, [increaseNumbers]);

	useEffect(() => {
		OurStacsRef.current = document.querySelectorAll(".OurStacs");
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<Fragment>
			<Container component="section" sx={{ py: 8 }}>
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
							Devita Shop is a premium HTML template designed and
							develoved from the ground up with the sole purpose of
							helping you create an astonishing, the beautiful and user
							friendly website that will boost your product’s sales.
						</Typography>

						<Typography
							variant="body1"
							lineHeight="inherit"
							textAlign="justify"
						>
							The theme design package provides a complete Magento theme
							set for your online store according to your desired theme.
							This includes all Magento themes that are required for your
							online store &apos;s successful implementation.
						</Typography>

						<Button variant="contained">Shop Now</Button>
					</Stack>

					<Stack height="100%">
						<Image src={about_us_img} alt="About us" priority />
					</Stack>
				</Stack>
			</Container>
			<Box component="section" bgcolor="action.selected" py={6}>
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
							<LocalMall fontSize="large" color="primary" />
							<Typography
								variant="h4"
								fontWeight={700}
								className="OurStacs"
								data-goal={765}
							>
								0
							</Typography>
							<Typography variant="h6" color="primary">
								Product Sold
							</Typography>
						</Stack>
						<Stack
							flexBasis={{ xs: "100%", sm: "50%", md: "25%" }}
							textAlign="center"
							alignItems="center"
							spacing={3}
						>
							<AccountBalance fontSize="large" color="primary" />
							<Typography
								variant="h4"
								fontWeight={700}
								className="OurStacs"
								data-goal={112}
							>
								0
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
							<Coffee fontSize="large" color="primary" />
							<Typography
								variant="h4"
								fontWeight={700}
								className="OurStacs"
								data-goal={375}
							>
								0
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
							<Mood fontSize="large" color="primary" />
							<Typography
								variant="h4"
								fontWeight={700}
								className="OurStacs"
								data-goal={549}
							>
								0
							</Typography>
							<Typography variant="h6" color="primary">
								Happy Clients
							</Typography>
						</Stack>
					</Stack>
				</Container>
			</Box>
			{/* TeamMembers component ------------------------------ */}
			<TeamMembers />
			<Container component="section">
				<Grid container spacing={3} my={4} direction="row">
					<Grid xs={12} md={8} overflow="hidden">
						<Box overflow="hidden">
							<Image
								className="img-fit"
								src={banner_img1}
								alt="offer bunner"
							/>
						</Box>
					</Grid>
					<Grid xs={12} md={4} overflow="hidden">
						<Box>
							<Image
								className="img-fit"
								src={banner_img2}
								alt="offer banner"
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
			{/* Swipper Articles component --------------------------- */}
			<SwipperArticales />
		</Fragment>
	);
}

export default React.memo(AboutUs);
