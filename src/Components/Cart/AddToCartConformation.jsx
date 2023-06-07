"use client";
import React, { forwardRef, useContext, useEffect, useState } from "react";

import {
	Box,
	Button,
	ButtonGroup,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Paper,
	Radio,
	RadioGroup,
	Slide,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Close, Done, ShoppingBag } from "@mui/icons-material";

import axios from "axios";
import Link from "next/link";
import { Store } from "@/context/Store";

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function AddToCartConformation({ open, setOpen, item }) {
	console.log(open);
	const handleClose = () => {
		setOpen(false);
		setSelectedColor(null);
		setItemQuntity(1);
		setProduct({});
	};

	const [product, setProduct] = useState({});
	const [itemQuntity, setItemQuntity] = useState(1);
	const [selectedColor, setSelectedColor] = useState(null);
	const [selectedColorMesage, setSelectedColorMesage] = useState("");
	const handleChange = (event) => {
		setSelectedColor(event.target.value);
	};

	//fetch product data from api using axios
	useEffect(() => {
		async function getProduct() {
			await axios
				.get(`/assist/productsData/product_${item.id || 1}.json`)
				.then((res) => {
					setProduct(res.data);
					console.log(res);
				})
				.catch((error) => console.error(error));
		}
		getProduct();
	}, [item.id]);

	const { state, dispatch } = useContext(Store);
	const { cartItems, favoriteItems } = state;

	console.log("cart items ", cartItems);
	console.log("favorite items ", favoriteItems);

	function addToCart_handel(item, itemQuntity = 1, selectedColor = 0) {
		if (!selectedColor) {
			setSelectedColorMesage("Please choose color");
		} else {
			dispatch({
				type: "ADD_TO_CART",
				payload: {
					...item,
					id: item.id + "-" + item.colors ?? [selectedColor].code,
					cartQuantity: itemQuntity,
					cartColor: (item.colors && item.colors[selectedColor]) || "",
				},
			});
			handleClose();
		}
	}

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			hideBackdrop
			PaperProps={{
				// style: { boxShadow: "rgb(168 116 26 / 72%) 0px 0px 10px 5px" },
				transition: "0.5s",
			}}
			sx={{ transition: "0.5s", "MuiPaper-root": { transition: "0.5s" } }}
			disableScrollLock={true}
			onClose={handleClose}
			aria-describedby="add_to_cart_conformation"
		>
			<Box display="flex" alignItems="center" justifyContent="space-between">
				<DialogTitle>Add To Shopping Basket</DialogTitle>
				<IconButton
					aria-label="Close"
					sx={{ width: "40px", height: "40px", mr: 2 }}
					onClick={handleClose}
				>
					<Close />
				</IconButton>
			</Box>
			{console.log(product)}
			<DialogContent className="slid-to-down">
				{/* choose product color ----------------------------------- */}
				<Typography variant="h6">{product && product.name}</Typography>

				{product.colors && (
					<Stack direction="row" gap={2} alignItems="center" pt={3}>
						
						<Typography variant="h6">Colors</Typography>
						
						<RadioGroup
							aria-labelledby="product-color"
							defaultValue="warning"
							value={selectedColor}
							onChange={handleChange}
							sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
						>
							{product.colors &&
								product.colors?.map((color, i) => (
									<Paper
										key={i + color.code}
										elevation={3}
										sx={{
											position: "relative",
											width: 40,
											height: 40,
											flexShrink: 0,
											bgcolor: product && color.code,
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
											title={product && color.name}
											arrow
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
				)}

				{/* warning user if try adding to cart befor choose color ----- */}
				<Typography variant="body2" color="warning.light">
					{selectedColorMesage && !selectedColor && selectedColorMesage}
				</Typography>

				<Stack direction="row" justifyContent="space-between" mt={2}>
					item price:
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
						${product.price && product.price?.toLocaleString()}
					</Typography>
					{product.end_price && (
						<Typography variant="h6" color="primary">
							$ {product.end_price.toLocaleString()}
						</Typography>
					)}
				</Stack>

				{product.end_price && (
					<Stack direction="row" justifyContent="space-between">
						You Saving:{" "}
						<span>
							$
							{(
								(product.price - product.end_price) *
								itemQuntity
							).toLocaleString()}
						</span>
					</Stack>
				)}

				<Stack direction="row" justifyContent="space-between" mt={2}>
					Total:
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
						${(product.price * itemQuntity)?.toLocaleString()}
					</Typography>
					{product.end_price && (
						<Typography variant="h6" color="primary">
							${(product.end_price * itemQuntity).toLocaleString()}
						</Typography>
					)}
				</Stack>

				{/* set Quantity to add to cart ---------------------------------- */}
				<Stack direction="row" justifyContent="space-evenly" gap={2} mt={3}>
					<ButtonGroup variant="contained" aria-label="Quantity">
						<Button
							onClick={() =>
								setItemQuntity(itemQuntity > 2 ? itemQuntity - 1 : 1)
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
						// variant="shiftP"
						variant="contained"
						color="primary"
						// color="action.active"
						startIcon={<ShoppingBag />}
						onClick={() =>
							addToCart_handel(product, itemQuntity, selectedColor)
						}
					>
						Add To Basket
					</Button>
				</Stack>
				<DialogActions sx={{ justifyContent: "center", mt: 2, pb: 0 }}>
					<Link href={`shop/${item.id}`}>
						<Button
							variant="shiftP"
							color="secondary"
							onClick={handleClose}
						>
							Show Details
						</Button>
					</Link>
					<Button variant="shiftP" color="secondary" onClick={handleClose}>
						See another Products
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}

export default AddToCartConformation;
