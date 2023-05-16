"use client";
import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Rating,
	Stack,
	Typography,
	ButtonGroup,
	IconButton,
	Radio,
	RadioGroup,
	Paper,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { FormLabel, Sheet, radioClasses } from "@mui/joy";

import Image from "next/image";

// import { products } from "../../Components/data.js";
import axios from "axios";
import { usePathname } from "next/navigation.js";
import { useRouter } from "next/router.js";
import { Done, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import { FaMinus, FaMoneyBill, FaPlus } from "react-icons/fa";
import ProductSpices from "@/Components/ProductSpices";
import DeliveryReturn from "@/Components/DeliveryReturn";

export default function Productid() {
	// const pathname = usePathname();
	// console.log(pathname);

	const router = useRouter();
	console.log(router.query.productid);

	const [product, setProduct] = useState({});

	const [imageIndex, setImageIndex] = useState(0);

	const [itemQuntity, setItemQuntity] = useState(1);

	// choose product colors
	const [selectedColor, setSelectedColor] = useState("");

  const handleChange = (event) => {
		setSelectedColor(event.target.value);
	};

	useEffect(() => {
		//fetch data from api using axios
		async function getProduct() {
			await axios
				// .get("/productsData/data.json")
				.get(`/productsData/product_${router.query.productid || 1}.json`)
				.then((res) => {
					setProduct(res.data);
					console.log(res.data);
				})
				.catch((error) => console.error(error));
		}

		getProduct();
	}, [router.query.productid]);

	console.log(product.images);
	return (
		<Container sx={{ pt: 8 }}>
			<Grid container spacing={2} rowGap={3}>
				<Grid xs={12} md={6}>
					<Stack gap={3}>
						<Stack
						// border="1px solid gray"
						>
							{product.images && (
								<Image
									src={product.images[imageIndex]}
									alt={product.model}
									width={540}
									height={540}
									style={{ maxWidth: "100%", maxHeight: "auto" }}
								/>
							)}
						</Stack>
						<Stack direction="row" gap={2} justifyContent="center">
							{product.images?.map((e, i) => (
								<Box
									key={i}
									border="1px solid gray"
									sx={{
										width: "100px",
										height: "100px",
										cursor: "pointer",
									}}
									onClick={() => setImageIndex(i)}
								>
									<Image
										src={e}
										alt={product.model}
										width={100}
										height={100}
										style={{ maxWidth: "100%" }}
									/>
								</Box>
							))}
						</Stack>
					</Stack>
				</Grid>

				<Grid xs={12} md={6}>
					<Stack gap={2} height="100%">
						<Typography variant="h6">{product.brand}</Typography>
						<Typography variant="h4">{product.name}</Typography>
						<Typography variant="h5" color="primary">
							${product.price}
						</Typography>
						<Typography variant="h6">{product.description}</Typography>
						<Typography variant="body2" lineHeight={1.8}>
							{product.highlights}
						</Typography>

						<Typography variant="body2">
							Available:{" "}
							{product.highlights < 1 ? (
								<Typography
									variant="body2"
									color="error.main"
									component="span"
								>
									Not Avilable
								</Typography>
							) : product.highlights < 10 ? (
								<Typography
									variant="body2"
									color="warning.main"
									component="span"
								>
									just ${product.highlights}
								</Typography>
							) : (
								<Typography
									variant="body2"
									color="success.main"
									component="span"
								>
									In stock
								</Typography>
							)}
						</Typography>

						<Stack direction="row" alignItems="center" gap={1}>
							<FaMoneyBill fontSize={25} />
							<Typography variant="body2">
								Money return guarantee
							</Typography>
						</Stack>

						<Stack direction="row" gap={3} my={2}>
							{product.rate && (
								<Rating
									name="half-rating-read"
									value={product.rate}
									// value={3.5}
									precision={0.5}
									readOnly
								/>
							)}
							<Typography variant="body2">
								{product.num_ratings} Reviews
							</Typography>

							<DeliveryReturn />
						</Stack>

						{/* choose product color */}
						<Stack direction="row" gap={2} alignItems="center">
							<Typography variant="h6">Colors</Typography>

							<RadioGroup
								aria-labelledby="product-color"
								defaultValue="warning"
								value={selectedColor}
								onChange={handleChange}
								sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
							>
								{product.colors?.map((color, i) => (
									<Paper
										key={i + color.code}
										elevation={3}
										sx={{
											position: "relative",
											width: 40,
											height: 40,
											flexShrink: 0,
											bgcolor: color.code,
											borderRadius: "50%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Radio
											checkedIcon={<Done fontSize="xl2" />}
											value={color.name}
											sx={{
												color: "transparent",
												"&:hover": {
													bgcolor: "rgb(255 255 255 / 30%)",
												},
												"&.Mui-checked": {
													outline: "2px solid #a8741a",
													outlineOffset: "2px",
												},
											}}
										/>
									</Paper>
								))}
							</RadioGroup>
						</Stack>

						<Stack direction="row" justifyContent="space-evenly" gap={2} mt={3}>
							<ButtonGroup variant="contained" aria-label="Quantity">
								<Button
									onClick={() =>
										setItemQuntity(
											itemQuntity > 2 ? itemQuntity - 1 : 1
										)
									}
								>
									<FaMinus />
								</Button>
								<Button
									disableRipple
									color="pwhite"
									sx={{
										color: "black",
										cursor: "text",
										width: "50px",
									}}
								>
									{itemQuntity}
								</Button>
								<Button onClick={() => setItemQuntity(itemQuntity + 1)}>
									<FaPlus />
								</Button>
							</ButtonGroup>
							<Button
								variant="shiftP"
								color="primary"
								// color="action.active"
								startIcon={<ShoppingBag />}
							>
								Add To Basket
							</Button>

							<IconButton
								aria-label="Add to Favorite List"
								color="primary"
							>
								<FavoriteBorder />
							</IconButton>
						</Stack>
					</Stack>
				</Grid>
			</Grid>

			<ProductSpices product={product} />
		</Container>
	);
}
