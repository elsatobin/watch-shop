import { Box, Stack, Typography, Container, Divider } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

import Image from "next/image";

import bannerImg from "../../images/banner-27.jpg";
import deals_3Img from "../../images/deals-3.png";


// import style from "../../styles/home.module.css";

export default function CountDownSale() {
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

					<Stack direction="row" textAlign="center" columnGap={3}>
						<Stack m={1} border="1px solid gray" p={2}>
							<Typography variant="h4" color="primary" pb={1}>
								0
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
								0
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
								00
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
								00
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
