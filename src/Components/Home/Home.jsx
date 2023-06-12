"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import dynamic from "next/dynamic";

import ProductsSwiper from "@/Components/Helpers/ProductsSwiper";
import CarouselMain from "@/Components/Home/CarouselMain";
import CountDownSale from "@/Components/Home/CountDownSale";
import OfferCards from "@/Components/Home/OfferCards";
import Loading from "@/app/loading";
// import ProductsSections from "@/Components/Home/ProductsSections";

const ProductsSections = dynamic(
	() => import("@/Components/Home/ProductsSections"),
	{ loading: () => <Loading /> }
);

function Home() {
	return (
		<>
			<main>
				<CarouselMain />
			</main>
			<section>
				<Container>
					<OfferCards />
				</Container>
			</section>
			<section>
				<Container>
					<ProductsSections />
				</Container>
			</section>

			<section>
				<CountDownSale />
			</section>
			<section>
				<Container>
					<Box py={8}>
						<Typography variant="h4" mb={5} mt={8} align="center">
							Featured Top
						</Typography>
						<ProductsSwiper word1="featured" word2="top" />
					</Box>
				</Container>
			</section>
		</>
	);
}
export default React.memo(Home);
