import { createTheme } from "@mui/material";

const MyTheme = createTheme({
	palette: {
		// mode: toggleDark ? "dark" : "light",
		primary: {
			main: "#a8741a",
		},
		secondary: {
			main: "#252525",
		},
		pwhite: {
			main: "#fff",
		},
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
	},
	typography: {
		fontFamily: "Rubik, sans-serif",
		h2: {
			fontFamily: "Prata, sans-serif",
		},
		subtitle1: {
			fontWeight: 700,
		},
		body1: {
			fontWeight: 600,
		},
	},
});
export default MyTheme;