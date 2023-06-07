"use client";
import React, { useEffect, useState } from "react";
import { Container, Box, Stack, Typography } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import axios from "axios";

import { ProductTypes } from "@/utility/data";
import ProductCard from "../Helpers/ProductCard";

export default function ProductsSections() {
	const [products, setProducts] = useState([]);
	// filtered products by type
	const [fProducts, setFProducts] = useState(products && products);

	// get products data from api --------------------------------
	useEffect(() => {
		async function getProducts() {
			await axios
				.get("/assist/productsData/products.json")
				.then((res) => {
					setProducts(res.data);
					setFProducts(res.data);
					console.log(res.data);
				})
				.catch((error) => console.log(error));
		}
		getProducts();
	}, []);

	// filtering product by type ---------------------------------
	function filtering(type) {
		const items = [...type.target.parentElement.children];
		items.forEach((ele) => ele.classList.remove("active"));

		if (type.target.dataset.filter.toLowerCase() !== "all") {
			const filteredProducts = products.filter((p) =>
				type.target.dataset.filter
					.toLowerCase()
					.includes(p.filter.toLowerCase())
			);
			setFProducts(filteredProducts);
			type.target.classList.add("active");
		} else {
			setFProducts(products);
			type.target.classList.add("active");
		}
	}



	return (
		<section>
			<Container id="shop">
				<Box py={8}>
					{/* Product Types List --------------------------- */}
					<Stack
						direction="row"
						justifyContent="center"
						spacing={4}
						mb={3}
					>
						{ProductTypes &&
							["All", ...ProductTypes].map((type, i) => (
								<Typography
									key={i}
									// className="product_types"
									className={
										type.toLowerCase() == "all"
											? "product_types active"
											: "product_types"
									}
									variant="h6"
									color="text.disabled"
									data-filter={type}
									onClick={(e) => filtering(e)}
								>
									{type}
								</Typography>
							))}
					</Stack>

					{/* render Products List --------------------------- */}
					<Grid container spacing={3}>
						{fProducts &&
							fProducts.map((item) => (
								<Grid xs={12} sm={6} md={4} key={item.id}>
									{/* reusable Product card --------------------- */}
									<ProductCard item={item} />
								</Grid>
							))}
					</Grid>
				</Box>
			</Container>
		</section>
	);
}
