import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Divider,
	IconButton,
	Rating,
	Stack,
	Typography,
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2";
import { FavoriteBorder, ShoppingBag } from "@mui/icons-material";

import Link from "next/link";
import Image from "next/image";

import { ProductTypes, products } from "../data";

import toggleDark from "../../pages/_app";
import myTheme from "../../pages/_app";
// import toggleDark from "../../pages/_app";

import styles from "../../styles/Home.module.css";

export default function ProductsSections() {
	console.log(toggleDark);
	console.log(myTheme);

	const [fProducts, setFProducts] = useState(products);

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

	useEffect(() => {
		async function getData() {
			const url = "https://wrist-watches.p.rapidapi.com/watches";
			const options = {
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"76d69b2c84msh0a328980c7a9984p1d6c87jsnc0feecb236d1",
					"X-RapidAPI-Host": "wrist-watches.p.rapidapi.com",
				},
			};

			try {
				const response = await fetch(url, options);
				const result = await response.text();
				console.log(result);
			} catch (error) {
				console.error(error);
			}
		}
		getData();
	}, []);

	return (
		<Container>
			<Box py={8}>
				{/* Product Types List */}
				<Stack direction="row" justifyContent="center" spacing={4} mb={3}>
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

				<Box>
					<Grid2 container spacing={3}>
						{fProducts &&
							fProducts.map((item) => (
								<Grid2 xs={12} sm={6} md={4} key={item.id}>
									<Card
										sx={{
											display: "flex",
											flexDirection: "column",
											height: "100%",
											position: "relative",
											"&:hover": {
												boxShadow: (theme) =>
													theme.palette.mode === "dark"
														? "0 0 15px rgba(255, 255, 255, .3)"
														: "0 0 15px rgba(0, 0, 0, .3)",
											},
										}}
									>
										{item.discount && (
											<Box
												bgcolor="primary.main"
												color="white"
												sx={{
													position: "absolute",
													top: "15px",
													left: "15px",
													px: "7px",
													borderRadius: "4px",
												}}
											>
												-{item.discount}%
											</Box>
										)}

										<Link href={`shop/${item.id}`}>
											<Image
												src={item.img}
												alt={item.title}
												className="images"
											/>
										</Link>

										<CardContent sx={{ flexGrow: 1 }}>
											{/* product Type */}
											<Typography
												gutterBottom
												variant="body1"
												component="div"
											>
												{item.brand}
											</Typography>

											<Typography variant="body2">
												<Link href="#">{item.title}</Link>
											</Typography>
											{/* product price */}
											<Stack
												direction="row"
												justifyContent="space-between"
												mt={2}
											>
												<Typography
													variant="h6"
													color={!item.discount && "primary"}
													sx={{
														textDecoration:
															item.discount && "line-through",
													}}
												>
													${item.price}
												</Typography>
												{item.discount && (
													<Typography variant="h5" color="primary">
														${item.endprice}
													</Typography>
												)}
											</Stack>
										</CardContent>
										<Divider sx={{ alignItems: "start", mx: 2 }}>
											<Rating
												name="half-rating-read"
												defaultValue={item.rate}
												precision={0.5}
												readOnly
											/>
										</Divider>
										<CardActions sx={{ justifyContent: "center" }}>
											<Stack direction="row" spacing={3} mb={2}>
												<IconButton
													aria-label="Add to Favorite List"
													color="primary"
												>
													<FavoriteBorder />
													{/* <FavoriteIcon /> */}
												</IconButton>

												<Button
													variant="shiftP"
													color="primary"
													// color="action.active"
													startIcon={<ShoppingBag />}
													onClick={() => console.log("clicked")}
												>
													Add To Basket
												</Button>
											</Stack>
										</CardActions>
									</Card>
								</Grid2>
							))}
					</Grid2>
				</Box>
			</Box>
		</Container>
	);
}
