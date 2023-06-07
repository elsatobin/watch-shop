"use client";
import React, { useContext, useEffect } from "react";

import { Button, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { Store } from "@/context/Store";

export default function ThemeToggle() {
	const { state, dispatch } = useContext(Store);
	const { isDarkMode } = state;
	console.log(isDarkMode);

	function toggleMode_handler() {
		dispatch({ type: "TOGGLE_DARK-MODE" });
	}

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
