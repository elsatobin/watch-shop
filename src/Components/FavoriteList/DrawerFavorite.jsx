"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import {
	Badge,
	IconButton,
	Paper,
	Stack,
	SwipeableDrawer,
	Typography,
	Button,
	Tooltip,
} from "@mui/material";

import DrawerCartFavorite from "./DrawerCartFavorite";
import { Store } from "@/context/Store";
import { Close, Favorite } from "@mui/icons-material";
import dynamic from "next/dynamic";

function DrawerFavorite() {
	const drawerWidth = 350;
	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setOpen(open);
	};

	const { state, dispatch } = useContext(Store);
	const { favoriteItems } = state;

	function clearFavorite_handel() {
		dispatch({ type: "CLEAR_FAVORITE" });
	}
	const itemsInFavorite = (favoriteItems && favoriteItems.length) || 0;

	useEffect(() => {
		typeof document !== "undefined" &&
			localStorage.setItem("favorites-list", JSON.stringify(favoriteItems));
	}, [favoriteItems]);

	return (
		<>
			<Tooltip title="Favorite List" arrow>
				<IconButton
					size="large"
					aria-label="show 4 new mails"
					color="inherit"
					onClick={toggleDrawer(true)}
				>
					<Badge badgeContent={itemsInFavorite} color="primary">
						<Favorite />
					</Badge>
				</IconButton>
			</Tooltip>

			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				disableScrollLock
			>
				<Stack
					justifyContent="space-between"
					height="100%"
					width={drawerWidth}
					role="presentation"
					// onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					{/* drawer header */}
					<Paper elevation={3} square>
						<Stack direction="row" p="15px">
							<IconButton
								aria-label="delete"
								size="small"
								onClick={toggleDrawer(false)}
							>
								<Close />
							</IconButton>
							<Stack
								direction="row"
								spacing={2}
								flexGrow={1}
								justifyContent="center"
								alignItems="center"
							>
								<Favorite />

								<Typography variant="h6" align="center">
									Favorite List
								</Typography>
							</Stack>
						</Stack>
					</Paper>

					{/* drawer items */}
					<Stack flexGrow={1} overflow="auto" p={1}>
						<DrawerCartFavorite open={open} />
					</Stack>

					{/* drawer footer */}
					<Paper elevation={3} square>
						<Stack p="15px" spacing={2} className="d_footer_shadow">
							<Typography variant="h6" align="center">
								{itemsInFavorite}
								{itemsInFavorite > 1 ? " items" : " item"}
							</Typography>

							<Button
								variant="contained"
								color="error"
								disabled={favoriteItems.length < 1}
								onClick={clearFavorite_handel}
							>
								{"Clear"}
							</Button>
						</Stack>
					</Paper>
				</Stack>
			</SwipeableDrawer>
		</>
	);
}

export default dynamic(() => Promise.resolve(DrawerFavorite), { ssr: false });
