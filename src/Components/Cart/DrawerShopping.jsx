"use client";

import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
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

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CloseIcon from "@mui/icons-material/Close";
import DrawerCartProducts from "./DrawerCartProducts";
import dynamic from "next/dynamic";
import { Store } from "@/context/Store";
import { Close, ShoppingBag } from "@mui/icons-material";

function DrawerShopping() {
	const drawerWidth = 350;
	const [open, setOpen] = useState(false);

	const toggleDrawer = useCallback(
		(open) => (event) => {
			if (
				event &&
				event.type === "keydown" &&
				(event.key === "Tab" || event.key === "Shift")
			) {
				return;
			}

			setOpen(open);
		},
		[]
	);

	const { state, dispatch } = useContext(Store);
	const { cartItems } = state;

	const clearCart_handel = useCallback(
		() => dispatch({ type: "CLEAR_CART" }),
		[dispatch]
	);

	// calculate and update count all items in cart -----------
	const itemsInCart = useMemo(
		() => cartItems.reduce((a, b) => a + (b.cartQuantity || 1), 0),
		[cartItems]
	);
	// calculate and update total price for all items in cart -----------
	const itemsInCart_price = useMemo(
		() =>
			cartItems
				.reduce((a, b) => a + b.price * b.cartQuantity, 0)
				.toLocaleString(),
		[cartItems]
	);

	// const itemsInCart =
	// 	cartItems && cartItems.reduce((a, b) => a + (b.cartQuantity || 1), 0);
	// console.log(itemsInCart);

	useEffect(() => {
		typeof window !== "undefined" &&
			localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<>
			<Tooltip title="Shopping Cart" arrow>
				<IconButton
					size="large"
					aria-label="Shopping Cart"
					color="inherit"
					onClick={toggleDrawer(true)}
				>
					<Badge badgeContent={itemsInCart} color="primary">
						<ShoppingBagIcon />
					</Badge>
				</IconButton>
			</Tooltip>

			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				// slotProps={{backdrop:{invisible: true}}}
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
					{/* drawer header ------------------------------------ */}
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
								<ShoppingBag />

								<Typography variant="h6" align="center">
									Shopping Cart
								</Typography>
							</Stack>
						</Stack>
					</Paper>

					{/* drawer items ----------------------------------------------- */}
					<Stack flexGrow={1} overflow="auto" p={1}>
						<DrawerCartProducts open={open} />
					</Stack>

					{/* drawer footer ------------------------------------------ */}
					<Paper elevation={3} square>
						<Stack p="15px" spacing={2} className="d_footer_shadow">
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
							>
								<Typography variant="body1">Sub Total</Typography>
								<Typography variant="h6">
									{itemsInCart} {itemsInCart > 1 ? " items" : " item"}
								</Typography>
								<Typography variant="h6">
									${cartItems && itemsInCart_price}
								</Typography>
							</Stack>
							<Stack
								direction="row"
								width="100%"
								justifyContent="space-evenly"
							>
								<Button
									variant="contained"
									disabled={itemsInCart == []}
								>
									Check Out
								</Button>
								<Button
									variant="contained"
									color="error"
									disabled={itemsInCart == []}
									onClick={clearCart_handel}
								>
									{"Clear"}
								</Button>
							</Stack>
						</Stack>
					</Paper>
				</Stack>
			</SwipeableDrawer>
		</>
	);
}

export default dynamic(() => Promise.resolve(DrawerShopping), { ssr: false });
// export default React.memo(DrawerShopping);
