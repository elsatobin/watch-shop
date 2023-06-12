"use client";
import React, { useCallback, useContext, useEffect } from "react";

import { Button, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { Store } from "@/context/Store";

function ThemeToggle() {
	const { state, dispatch } = useContext(Store);
	const { isDarkMode } = state;
	console.log(isDarkMode);


	const toggleMode_handler = useCallback(() => {
		dispatch({ type: "TOGGLE_DARK-MODE" });
	}, [dispatch]);

	// set choose mode to localStorage ------------
	useEffect(() => {
		typeof window != "undefined" &&
			window.localStorage.setItem("dark", isDarkMode);
	}, [isDarkMode]);

	return (
		<IconButton sx={{ ml: 1 }} onClick={toggleMode_handler}>
			{isDarkMode ? <Brightness7 color="warning" /> : <Brightness4 />}
		</IconButton>
	);
}
export default React.memo(ThemeToggle);