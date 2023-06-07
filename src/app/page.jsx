"use client";
import ProductsSwiper from "@/Components/Helpers/ProductsSwiper";
import CarouselMain from "@/Components/Home/CarouselMain";
import CountDownSale from "@/Components/Home/CountDownSale";
import OfferCards from "@/Components/Home/OfferCards";
import ProductsSections from "@/Components/Home/ProductsSections";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
	return (
		<main>
			<CarouselMain />
			<Container>
				<OfferCards />
				<ProductsSections />
			</Container>
			<CountDownSale />
			<Container>
				<Box py={8}>
					<Typography variant="h4" mb={5} mt={8} align="center">
						Featured Top
					</Typography>
					<ProductsSwiper word1="Featured" word2="Top" />
				</Box>
			</Container>
		</main>
	);
}
