import { Favorite, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Divider, IconButton, Rating, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddToCartConformation from "../Cart/AddToCartConformation";
import { useContext, useState } from "react";
import { Store } from "@/context/Store";

function ProductCard({ item }) {
	// handel add item to cart ------------
	const [showConformation, setShowConformation] = useState(false);
	
   function showConformation_handel(item) {
		setShowConformation(true);
	}

	// dealing with context api store -----------------------------
	const { state, dispatch } = useContext(Store);
	const { favoriteItems } = state;

	function addToFavorite_handel(item) {
		dispatch({ type: "ADD_TO_FAVORITE", payload: item });
	}

	return (
		<>
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
						src={item.images && item.images[0]}
						alt={item?.name}
						className="img-fit"
						width={210}
						height={210}
						placeholder="blur"
						blurDataURL={item.images[0]}
					/>
				</Link>

				<CardContent sx={{ flexGrow: 1 }}>
					{/* product Type ---------------------- */}
					<Typography gutterBottom variant="body1" component="div">
						{item.brand}
					</Typography>

					<Typography variant="body2">
						<Link href="#">{item.name}</Link>
					</Typography>
					{/* product price ------------------ */}
					<Stack direction="row" justifyContent="space-between" mt={2}>
						<Typography
							variant="h6"
							color={!item.discount && "primary"}
							sx={{
								textDecoration: item.discount && "line-through",
							}}
						>
							${item.price.toLocaleString()}
						</Typography>
						{item.discount && (
							<Typography variant="h5" color="primary">
								${item.end_price.toLocaleString()}
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
							onClick={() => addToFavorite_handel(item)}
						>
							{favoriteItems?.find((e) => e.id === item.id) ? (
								<Favorite />
							) : (
								<FavoriteBorder />
							)}
						</IconButton>

						<Button
							variant="shiftP"
							color="primary"
							// color="action.active"
							startIcon={<ShoppingBag />}
							onClick={() => showConformation_handel(item)}
						>
							Add To Basket
						</Button>
					</Stack>
				</CardActions>
			</Card>

			<AddToCartConformation
				open={showConformation}
				setOpen={setShowConformation}
				item={item}
			/>
		</>
	);
}

export default ProductCard;