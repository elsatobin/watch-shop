"use client";
import { Card, CardActionArea } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import style from "../../styles/home.module.css";

import watch_img_1 from "@/images/watch-1.png";
import watch_img_2 from "@/images/watch-2.png";
import watch_img_3 from "@/images/watch-3.png";
import Image from "next/image";

export default function OfferCards() {
	return (
		<section>
			<Grid container spacing={{ xs: 2, md: 3 }} py={8}>
				{/* {Array.from(Array(3)).map((_, i) => ( */}
				{[watch_img_1, watch_img_2, watch_img_3].map((offer, i) => (
					<Grid xs={12} sm={6} md={4} key={i}>
						<Card
							className={style.OfferCard}
							sx={{
								position: "relative",
								background: "transparent",
								transition: ".5s ease-out",
							}}
						>
							<CardActionArea>
								<Image
									src={offer} alt="new offer" className="img-fit"
								/>
							</CardActionArea>
						</Card>
					</Grid>
				))}
			</Grid>
		</section>
	);
}
