
"use client";
import { useState, useEffect } from "react";
import {
	Typography,
	Button,
	Carousel,
	Rating,
	TextField,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
// import axios from "axios";
import Image from "next/image";

export default function ProductDetails() {
	const [product, setProduct] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get("https://api.example.com/products/1")
	// 		.then((response) => setProduct(response.data));
	// }, []);

	return (
		<Grid container spacing={2}>
			<Grid xs={12} md={6}>
				{/* <Carousel>
					{product.images?.map((image, index) => (
						<Image key={index} src={image.url} alt={image.alt} />
					))}

					<Image key={product.id} src={product.url} alt={product.title} />
					<Image key={product.id} src={product.url} alt={product.title} />
					<Image key={product.id} src={product.url} alt={product.title} />
				</Carousel> */}
			</Grid>
			<Grid xs={12} md={6}>
				<Typography variant="h4">{product.title}</Typography>
				<Typography variant="h6">{product.brand}</Typography>
				<Typography variant="h5">${product.price}</Typography>
				<Typography variant="body1">{product.description}</Typography>
				<Grid container spacing={1}>
					<Grid xs={12} sm={6}>
						<Typography variant="body2">Features:</Typography>
						<ul>
							{product.features?.map((feature, index) => (
								<li key={index}>{feature}</li>
							))}
						</ul>
					</Grid>
					<Grid xs={12} sm={6}>
						<Typography variant="body2">Specifications:</Typography>
						{/* <table>
							<tbody>
								{Object.entries(product.specs || {}).map(([key, value]) => (
									<tr key={key}>
										<td>{key}:</td>
										<td>{value}</td>
									</tr>
								))}
							</tbody>
						</table> */}
					</Grid>
				</Grid>
				<Typography variant="h6">Customer Reviews</Typography>
				<Rating name="product-rating" value={product.rating} readOnly />
				<TextField
					label="Write a review"
					variant="outlined"
					fullWidth
					multiline
					rows={4}
				/>
				<Button variant="contained" color="primary">
					Submit
				</Button>
			</Grid>
		</Grid>
	);
}
