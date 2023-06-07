"use client";
import { createTheme } from "@mui/material";

export function myTheme(isDark) {
	const theme = createTheme({
		palette: {
			mode: isDark ? "dark" : "light",
			primary: { main: "#a8741a" },
			secondary: { main: "#252525" },
			pwhite: { main: "#fff" },
			shift: {
				main: "#666",
				// dark: "primary.main",
				contrastText: "#fff",
				"&:hover": { backgroundColor: "primary" },
			},
		},
		components: {
			MuiButton: {
				variants: [
					{
						props: { variant: "contained", color: "shift" },
						style: {
							"&:hover": {
								color: "#fff",
								backgroundColor: "#a8741a",
							},
						},
					},
					{
						props: { variant: "outlined", color: "shift" },
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderStyle: "solid",
						borderColor: "inherit",
						transition: ".25s ease-out",
						style: {
							"&:hover": {
								color: "#fff",
								backgroundColor: "#a8741a",
							},
						},
					},
					{
						props: { variant: "outlined" },
						backgroundColor: "transparent",
						borderWidth: "2px",
						borderStyle: "solid",
						borderColor: "inherit",
						transition: ".25s ease-out",
						style: {
							"&:hover": {
								color: "#fff",
								backgroundColor: "#a8741a",
							},
						},
					},
					{
						props: { variant: "shiftP", color: "primary" },
						style: {
							// backgroundColor: "transparent",
							backgroundColor: "rgb(168 116 26 / 10%)",
							color: "#a8741a",
							borderWidth: "2px",
							borderStyle: "solid",
							borderColor: "#a8741a",
							transition: ".25s ease-out",
							"&:hover": {
								color: "#fff",
								backgroundColor: "#a8741a",
							},
						},
					},
				],
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						// backgroundImage:
							// "linear-gradient(rgb(55 47 32 / 57%), rgba(255, 255, 255, 0.16))",
						// boxShadow: "0px 0px 15px 4px rgb(0 0 0 / 61%)",
					},
				},
			},
		},

		typography: {
			fontFamily: "Rubik, sans-serif",
			h2: { fontFamily: "Prata, sans-serif" },
			subtitle1: { fontWeight: 700 },
			body1: { fontWeight: 600 },
		},
	});
	return theme;
}
