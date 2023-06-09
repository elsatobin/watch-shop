"use client";
import React, { useContext, useState } from "react";
import {
	Box,
	Divider,
	IconButton,
	Paper,
	Stack,
	Typography,
	Tooltip,
} from "@mui/material";

import { ShoppingBag } from "@mui/icons-material";
import { FaTrashAlt } from "react-icons/fa";

import Image from "next/image";
import emptyImg from "../../images/empty-wishlist.svg";

import { motion } from "framer-motion";
import { Store } from "@/context/Store";
import AddToCartConformation from "../Cart/AddToCartConformation";
import Link from "next/link";

// framer - motion animation edit ---------------------------
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

export default function DrawerCartFavorite({ open }) {
	// dealing with context api store -----------------------------
	const { state, dispatch } = useContext(Store);
	const { favoriteItems } = state;

	// remove item from favorite/wish list ------------------------
	function removeItem_handel(id) {
		dispatch({ type: "REMOVE_FROM_FAVORITE", payload: id });
	}

	// handel add item to cart from favorite/wash list ------------
	const [clickedItem, setClickedItem] = useState({});
	const [showConformation, setShowConformation] = useState(false);
	function addToCartFromFavorite(item) {
		setClickedItem(item);
		setShowConformation(true);
	}

	return (
		<>
			<Stack
				spacing={2}
				height="100%"
				component={motion.ul}
				variants={container}
				initial="hidden"
				animate={open ? "visible" : "hidden"}
				overflow="auto"
			>
				{/* show empty image when favorite list empty ---------- */}
				{favoriteItems && favoriteItems.length < 1 ? (
					<Stack alignItems="center" justifyContent="center" height="100%">
						<Image
							src={emptyImg}
							alt="Favorite List empty"
							width={300}
							height={300}
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
					favoriteItems?.map((product) => (
						// display item while favorite list not impty
						<Paper
							key={product.id}
							elevation={2}
							component={motion.li}
							variants={item}
							sx={{ display: "flex", overflow: "hidden" }}
						>
							{console.log(
								typeof product.id !== "number" &&
									product.id.split("-")[0]
							)}
							<Link href={`/shop/${product.id}`}>
								<Box alignSelf="center" width="100px" height="100%">
									<Image
										src={product.images && product.images[0]}
										alt={product && product.name}
										height={100}
										width={100}
										className="img-fit"
									/>
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
									<Tooltip title="Add To Shopping Cart" arrow>
										<IconButton
											aria-label="Add To Shopping Cart"
											color="primary"
											onClick={() => addToCartFromFavorite(product)}
										>
											<ShoppingBag />
										</IconButton>
									</Tooltip>

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

			<AddToCartConformation
				open={showConformation}
				setOpen={setShowConformation}
				item={clickedItem}
			/>
		</>
	);
}
