"use client";
import { ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { createContext, useReducer } from "react";
import {myTheme} from "./myTheme";

// context api store
export const Store = createContext();

// function UserPreferkMode() {
// 	return prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
// }
// console.log(UserPreferkMode());

const initialState = {
	cartItems:
		(typeof window !== "undefined" &&
			localStorage.getItem("shopping-cart") &&
			JSON.parse(localStorage.getItem("shopping-cart"))) ||
		[],
	favoriteItems:
		(typeof window !== "undefined" &&
			JSON.parse(localStorage.getItem("favorites-list"))) ||
		[],
	cartStatus: {},
	favoriteStatus: {},
	isDarkMode:
		(typeof window != "undefined" && window.localStorage.getItem("dark")) ||
		// prefersDarkMode === true ? true : false ||
		true,
};

// get user/system preferd mode -----------

export function reducer(state, action) {
	console.log("favoriteItems ", state.favoriteItems);
	switch (action.type) {
		case "TOGGLE_DARK-MODE":
			console.log(!state.isDarkMode);
			return { ...state, isDarkMode: !state.isDarkMode };
		case "ADD_TO_CART":
			console.log(action.payload);

			const existItem = state.cartItems.find(
				(item) => item.id === action.payload.id
			);
			console.log(existItem);

			if (!existItem) {
				// enqueueSnackbar("This is a success message!", { variant });
				enqueueSnackbar("Product added to cart", { variant: "success" });
				return {
					...state,
					cartItems: [...state.cartItems, action.payload],
				};
			} else {
				const cartItems = state.cartItems.map((item) =>
					item.id === action.payload.id
						? { ...item, cartQuantity: item.cartQuantity + 1 }
						: item
				);
				console.log(cartItems);
				enqueueSnackbar("Product already in cart, Quantity increased", {
					variant: "warning",
				});
				return { ...state, cartItems: [...cartItems] };
			}

		case "REMOVE_FROM_CART":
			console.log(action.payload);
			const cartItems2 = state.cartItems.filter(
				(item) => item.id !== action.payload
			);
			enqueueSnackbar("Product remove from cart", { variant: "success" });
			return { ...state, cartItems: [...cartItems2] };

		case "CLEAR_CART":
			enqueueSnackbar("Shopping cart cleared", { variant: "success" });
			return { ...state, cartItems: [] };

		case "increase_quantity":
			const cartItems_increased = state.cartItems.map((e) =>
				e.id === action.payload
					? { ...e, cartQuantity: e.cartQuantity + 1 }
					: e
			);
			return { ...state, cartItems: [...cartItems_increased] };

		case "decrease_quantity":
			const cartItems_decreased = state.cartItems.map((e) =>
				e.id === action.payload
					? e.cartQuantity > 1 && {
							...e,
							cartQuantity: e.cartQuantity - 1,
					}
					: e
			);
			return { ...state, cartItems: cartItems_decreased };

		case "ADD_TO_FAVORITE":
			const favoriteItems_exist = state.favoriteItems?.find(
				(e) => e.id === action.payload.id
			);
			if (favoriteItems_exist) {
				enqueueSnackbar("That Product aready in list", {
					variant: "warning",
				});
				return { ...state };
			} else {
				enqueueSnackbar("Product added to wishlist", {
					variant: "success",
				});
				return {
					...state,
					favoriteItems: [...state.favoriteItems, action.payload],
				};
			}

		case "REMOVE_FROM_FAVORITE":
			const favoriteItems_remove = state.favoriteItems.filter(
				(e) => e.id !== action.payload
			);
			enqueueSnackbar("Product removed from wishlist", {
				variant: "success",
			});
			return { ...state, favoriteItems: [...favoriteItems_remove] };

		case "CLEAR_FAVORITE":
			enqueueSnackbar("Wishlist was cleard", {
				variant: "success",
			});
			return { ...state, favoriteItems: [] };

		default:
			return state;
	}
}
export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return (
		<Store.Provider value={value}>
			<ThemeProvider theme={myTheme(state.isDarkMode)}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</Store.Provider>
	);
}
