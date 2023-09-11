"use client";
import React, { useContext, useEffect, useState } from "react";
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
	Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import {
	ArrowBack,
	Done,
	Favorite,
	FavoriteBorder,
	ShoppingBag,
} from "@mui/icons-material";
import { FaMinus, FaMoneyBill, FaPlus } from "react-icons/fa";

import axios from "axios";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";

import { Store } from "@/context/Store";
import DeliveryReturn from "@/Components/views/DeliveryReturn";
import ProductSpices from "@/Components/Shop/ProductSpices";
import ProductsSwiper from "@/Components/Helpers/ProductsSwiper";

function ProductShowDetais({ product }) {
	const router = useRouter();
	const pathParams = useParams();
	console.log(pathParams);

	console.log(product);
	// const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const [imageIndex, setImageIndex] = useState(0);

	const [itemQuntity, setItemQuntity] = useState(1);

	// handel color choosed by user
	const [selectedColor, setSelectedColor] = useState(null);
	const [selectedColorMesage, setSelectedColorMesage] = useState("");
	console.log(selectedColor);
	const handleChange = (event) => {
		setSelectedColor(event.target.value);
	};

	
	// handel add item to cart ------------
	const { state, dispatch } = useContext(Store);
	const { favoriteItems } = state;

	function addToCart_handel(item, itemQuntity = 1, selectedColor) {
		if (item.colors && !selectedColor) {
			setSelectedColorMesage("Please choose color");
		} else {
			dispatch({
				type: "ADD_TO_CART",
				payload: {
					...item,
					id: item.colors
						? item.id + "-" + item.colors[selectedColor].code
						: item.id,
					cartQuantity: itemQuntity,
					cartColor: (item.colors && item.colors[selectedColor]) || "",
				},
			});
			handleClose();
		}
	}

	// handel add item favorite/wash list ------------
	function addToFavorite_handel(item) {
		dispatch({ type: "ADD_TO_FAVORITE", payload: item });
	}

	return (
		<Container sx={{ pt: 8 }}>
			<Grid container spacing={2} rowGap={3}>
				<Grid xs={12} md={6}>
					<Stack gap={3}>
						<Stack position="relative">
							{product.images && (
								<Image
									src={product.images[imageIndex]}
									alt={product.model}
									width={540}
									height={540}
									style={{
										maxWidth: "100%",
										maxHeight: "auto",
									}}
								/>
							)}
							{/* discount badge ----------------------------------- */}
							{product.discount && (
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
									-{product.discount}%
								</Box>
							)}
						</Stack>
						{/* another product images Thumbnail -------------------- */}
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

				{/* prodduct infos ------------------------------------------ */}
				<Grid xs={12} md={6}>
					<Stack gap={2} height="100%">
						<Typography variant="h6">{product.brand}</Typography>
						<Typography variant="h4">{product.name}</Typography>

						<Stack direction="row" gap={3}>
							<Typography
								variant="h6"
								sx={
									product.end_price && {
										textDecoration: "line-through",
										color: "text.secondary",
										fontSize: "16px",
									}
								}
							>
								${product.price?.toLocaleString()}
							</Typography>

							{product.end_price && (
								<Typography variant="h6" color="primary">
									$ {product.end_price.toLocaleString()}
								</Typography>
							)}
						</Stack>
						<Typography variant="h6">{product.description}</Typography>
						<Typography variant="body2" lineHeight={1.8}>
							{product.highlights}
						</Typography>

						{/* {product Availability -----------------------------------} */}
						<Typography variant="body2">
							Available:{" "}
							{product.highlights < 1 ? (
								<Typography
									variant="body2"
									color="error.main"
									component="span"
								>
									Not Available
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

						{/* choose product color ----------------------------------- */}
						<Stack direction="row" gap={2} alignItems="center">
							<Typography variant="h6">Colors</Typography>

							<RadioGroup
								aria-labelledby="product-color"
								defaultValue="warning"
								value={selectedColor}
								onChange={handleChange}
								sx={{
									gap: 2,
									flexWrap: "wrap",
									flexDirection: "row",
								}}
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
										className={
											selectedColorMesage && !selectedColor
												? "pulsing"
												: ""
										}
									>
										<Tooltip
											title={color.name}
											arrow
											// color={color.code}
											sx={{ color: color.code }}
										>
											<Radio
												checkedIcon={<Done fontSize="xl2" />}
												value={i}
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
										</Tooltip>
									</Paper>
								))}
							</RadioGroup>
						</Stack>
						{/* warning user if try adding to cart befor choose color ----- */}
						<Typography variant="body2" color="warning.light">
							{selectedColorMesage &&
								!selectedColor &&
								selectedColorMesage}
						</Typography>

						{/* set Quantity to add to cart  */}
						<Stack
							direction="row"
							justifyContent="space-evenly"
							gap={2}
							mt={3}
						>
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
								onClick={() =>
									addToCart_handel(product, itemQuntity, selectedColor)
								}
							>
								Add To Basket
							</Button>

							<IconButton
								aria-label="Add to Favorite List"
								color="primary"
								onClick={() => addToFavorite_handel(product)}
							>
								{favoriteItems?.find((e) => e.id === product.id) ? (
									<Favorite />
								) : (
									<FavoriteBorder />
								)}
							</IconButton>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
			{/* Product specifications --------------------------------------- */}
			<ProductSpices product={product} />

			{/* related Products ------------------------------------- */}
			<Box py={8}>
				<Typography variant="h4" mb={5} mt={8} align="center">
					Related Products
				</Typography>
				<ProductsSwiper word1={product.filter} />
			</Box>

			{/* go back button ------------------------------------------------ */}
			<Button
				variant="contained"
				color="primary"
				sx={{ display: "flex", mx: "auto" }}
				onClick={() => router.back()}
				startIcon={<ArrowBack />}
			>
				Back
			</Button>
		</Container>
	);
}
export default React.memo (ProductShowDetais)