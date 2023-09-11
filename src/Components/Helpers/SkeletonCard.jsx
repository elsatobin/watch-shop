import React from "react";
import { Favorite, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	IconButton,
	Rating,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import AddToCartConformation from "../Cart/AddToCartConformation";

import { Store } from "@/context/Store";

function SkeletonCard({ item }) {
	return (
		<>
			<Card sx={{ height: "100%" }}>
				<Skeleton
					sx={{ height: 190 }}
					animation="wave"
					variant="rectangular"
				/>

				<CardContent sx={{ flexGrow: 1 }}>
					<Skeleton animation="wave" height={20} />
					<Skeleton animation="wave" height={20} />
					<Skeleton animation="wave" height={30} />
				</CardContent>
				<Divider sx={{ alignItems: "start", mx: 2 }}></Divider>
				<Stack direction="row" spacing={3} mb={2} justifyContent="center">
					<Skeleton animation="wave" height={40} width={40} />
					<Skeleton animation="wave" height={40} width={150} />
				</Stack>
			</Card>
		</>
	);
}

export default React.memo(SkeletonCard);
// export default React.memo(SkeletonCard);
