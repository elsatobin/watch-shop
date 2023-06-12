"use client";
import React, { useCallback, useContext } from "react";
import {
	Box,
	Button,
	Divider,
	IconButton,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";

import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

import Image from "next/image";
import emptyImg from "../../images/empty_cart.png";
import { motion } from "framer-motion";
import { Store } from "@/context/Store";
import Link from "next/link";
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
			duration: 0.5,
		},
	},
};

const item = {
	hidden: { y: 100, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};

function DrawerCartProducts({ open }) {
	const { state, dispatch } = useContext(Store);
	const { cartItems } = state;
	console.log(cartItems);

	const removeItem_handel = (id) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: id });
	};
	const decreaseQuantity = (id) => {
		dispatch({ type: "decrease_quantity", payload: id });
	};
	const increaseQuantity = (id) => {
		dispatch({ type: "increase_quantity", payload: id });
	};

	return (
		<Stack
			spacing={2}
			height="100%"
			component={motion.ul}
			variants={container}
			initial="hidden"
			animate={open ? "visible" : "hidden"}
			overflow="auto"
		>
			{/* show empty image when cart is empty --------------- */}
			{cartItems && cartItems.length < 1 ? (
				<Stack alignItems="center" justifyContent="center" height="100%">
					<Image
						src={emptyImg}
						alt="Favorite List empty"
						width={300}
						height={300}
						placeholder="blur"
					/>
					<Typography
						variant="h6"
						color="text.secondary"
						textAlign="center"
					>
						{" "}
						Empty <br /> add item to display here
					</Typography>
				</Stack>
			) : (
				cartItems?.map((product) => (
					// render products when exist -------------------------
					<Paper
						key={product.id}
						elevation={2}
						component={motion.li}
						variants={item}
						sx={{ display: "flex", overflow: "hidden", flexShrink: 0 }}
					>
						<Link
							href={`/shop/${
								product.id && typeof product.id === "string"
									? product.id.split("-")[0]
									: product.id
							}`}
						>
							<Box alignSelf="center" width="100px" height="100%">
								<Image
									src={product.images && product.images[0]}
									alt={product.name}
									height={100}
									width={100}
									className="img-fit"
								></Image>
							</Box>
						</Link>

						<Stack flexGrow={1} padding="10px">
							<Typography
								variant="subtitle1"
								width="202px"
								noWrap
								overflow="hidden"
							>
								{product.brand}
							</Typography>
							<Typography
								variant="body2"
								width="202px"
								noWrap
								overflow="hidden"
							>
								{product.name}
							</Typography>
							<Stack direction="row" justifyContent="space-between">
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
									${product.price.toLocaleString()}
								</Typography>

								{product.end_price && (
									<Typography variant="h6" color="primary">
										$ {product.end_price.toLocaleString()}
									</Typography>
								)}
							</Stack>
							<Stack
								direction="row"
								alignItems="center"
								justifyContent="space-between"
							>
								{product.colors && (
									<Tooltip title={product.cartColor.name} arrow>
										<Paper
											elevation={3}
											sx={{
												position: "relative",
												width: 25,
												height: 25,
												flexShrink: 0,
												bgcolor: product.cartColor?.code,
												borderRadius: "50%",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										></Paper>
									</Tooltip>
								)}

								<Stack direction="row" alignItems="center">
									<Tooltip title="Decrease quantity" arrow>
										<span>
											<Button
												variant="contained"
												color="primary"
												disabled={
													product.cartQuantity > 1 ? false : true
												}
												sx={{
													minWidth: "24px",
													height: "24px",
													p: 0,
												}}
												onClick={() => decreaseQuantity(product.id)}
											>
												<FaMinus />
											</Button>
										</span>
									</Tooltip>
									<Typography
										variant="h6"
										align="center"
										minWidth={35}
										sx={{ userSelect: "none" }}
									>
										{product.cartQuantity}
									</Typography>
									<Tooltip title="Increase quantity" arrow>
										<Button
											variant="contained"
											color="primary"
											sx={{ minWidth: "24px", height: "24px", p: 0 }}
											onClick={() => increaseQuantity(product.id)}
										>
											<FaPlus />
										</Button>
									</Tooltip>
								</Stack>

								<Tooltip title="Remove Product" arrow>
									<IconButton
										sx={{ borderRadius: "5px", padding: 0 }}
										onClick={() => removeItem_handel(product.id)}
									>
										<FaTrashAlt className="delete_icon" />
									</IconButton>
								</Tooltip>
							</Stack>
							<Divider />
						</Stack>
					</Paper>
				))
			)}
		</Stack>
	);
}
// export default React.memo(DrawerCartProducts);
export default DrawerCartProducts;
