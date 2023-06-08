"use client";
import { Container, Rating, Stack, Typography } from "@mui/material/";

import { FormatQuote } from "@mui/icons-material";

// import required Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

import { testimonials } from "@/utility/data";

export default function SwipperArticales() {
	return (
		<Container>
			<Typography variant="h3" mb={4} mt={8} align="center" color="primary">
				Testimonials
			</Typography>
			<Swiper
				spaceBetween={16}
				slidesPerView={1}
				loop
				modules={[Pagination]}
				pagination={true}
			>
				{testimonials?.map((art, i) => (
					<SwiperSlide key={`art_${i}`}>
						<Stack
							textAlign="center"
							alignItems="center"
							width="80%"
							mx="auto"
							mb={5}
							p={2}
							spacing={2}
							bgcolor="action.hover"
							sx={{ "&:hover": { cursor: "grab" } }}
						>
							<FormatQuote sx={{ m: "auto", fontSize: "80px" }} />
							<Typography gutterBottom variant="body1" paddingY={4}>
								{art.text}
							</Typography>
							<Rating
								name="testimonials"
								defaultValue={3.5}
								precision={0.5}
								readOnly
							/>
							<Typography variant="h6" mt={0}>
								{art.name} /
								<Typography variant="body2" component="span">
									{art.title}
								</Typography>
							</Typography>
						</Stack>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}
