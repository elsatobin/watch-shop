import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Container, Divider } from "@mui/material/";

import Image from "next/image";

import bannerImg from "../../images/banner-27.jpg";
import deals_3Img from "../../images/deals-3.png";

// import style from "../../styles/home.module.css";

const targetDate = new Date("2023-10-19");
console.log("targetDate ", targetDate);

const inisTimer = { days: "0", hours: "0", minutes: "00", seconds: "00" };

function CountDownSale() {
	const [timer, setTimer] = useState(inisTimer);

	useEffect(() => {
		const count = setInterval(() => {
			const now = new Date().getTime();
			console.log("now ", now);

			const distance = targetDate - now;
			console.log("distance ", distance);

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimer({
				days: days,
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			});

			if (distance <= 0) {
				clearInterval(count);
				setTimer(inisTimer);
			}
		}, 1000);

		return () => clearInterval(count);
	}, []);

	return (
		<Box
			height={530}
			color="white"
			sx={{ position: "relative" }}
			// className={style.down_sale_section} height="100%"
		>
			<Image
				src={bannerImg}
				alt="Hot Deal! Sale"
				placeholder="blur"
				draggable={false}
				fill
			/>
			<Container>
				<Stack
					position="absolute"
					zIndex={2}
					justifyContent="center"
					height="100%"
					maxWidth="100%"
				>
					<Image alt="" src={deals_3Img.src} width={200} height={57} />

					<Typography variant="h4">
						Hot Deal! Sale &#160;
						<Typography variant="h3" component="span" color="primary">
							20% Off
						</Typography>
					</Typography>

					<Typography variant="subtitle2" my={2}>
						We Believe That Good Design is Always in Season
					</Typography>

					<Stack
						direction="row"
						textAlign="center"
						columnGap={{ xs: 0, sm: 3 }}
						flexWrap="wrap"
					>
						<Stack m={1} border="1px solid gray" p={2}>
							<Typography variant="h4" color="primary" pb={1}>
								{timer.days}
							</Typography>
							<Typography
								variant="body1"
								pt={1}
								sx={{ borderTop: "1px solid gray" }}
							>
								Days
							</Typography>
						</Stack>

						<Stack m={1} border="1px solid gray" p={2}>
							<Typography variant="h4" color="primary" pb={1}>
								{timer.hours}
							</Typography>
							<Typography
								variant="body1"
								pt={1}
								sx={{ borderTop: "1px solid gray" }}
							>
								Hour
							</Typography>
						</Stack>

						<Stack m={1} border="1px solid gray" p={2}>
							<Typography variant="h4" color="primary" pb={1}>
								{timer.minutes}
							</Typography>
							<Typography
								variant="body1"
								pt={1}
								sx={{ borderTop: "1px solid gray" }}
							>
								Min
							</Typography>
						</Stack>
						<Stack m={1} border="1px solid gray" p={2}>
							<Typography variant="h4" color="primary" pb={1}>
								{timer.seconds}
							</Typography>
							<Typography
								variant="body1"
								pt={1}
								sx={{ borderTop: "1px solid gray" }}
							>
								Sec
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
export default React.memo(CountDownSale);