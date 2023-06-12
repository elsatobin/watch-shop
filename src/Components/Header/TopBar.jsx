"use client";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import { Box, InputBase, Stack, Container } from "@mui/material/";

import { languages, curancy } from "@/utility/data";
import Dropdown from "../views/Dropdown";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "4px",
	boxShadow: "0 0 4px 1px rgb(0 0 0 / 48%)",
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: "auto",
		width: "auto",
		maxWidth: "350px",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 1),
	height: "100%",
	position: "absolute",
	right: 0,
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 2),
		// vertical padding + font size from searchIcon
		paddingRight: `calc(1em + ${theme.spacing(2)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	paddingRight: "20px",
}));

function PrimarySearchAppBar() {
	const language = languages;
	const curanc = curancy;

	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	return (
		<Container>
			<Box
				display="flex"
				justifyContent="space-between"
				marginY={1}
				flexWrap={{ xs: "wrap", sm: "nowrap" }}
			>
				<Stack
					direction="row"
					gap={3}
					alignItems="center"
					justifyContent="space-between"
					width={{ xs: "100%", sm: "fit-content" }}
				>
					{/* render languages in dropdown component ----------- */}
					<Dropdown data={languages} />

					<Stack
						direction="row"
						alignItems="center"
						color="text.secondary"
						fontSize="12px"
					>
						Curancy
						{/* render languages in dropdown component ----------- */}
						<Dropdown data={curancy} />
					</Stack>
				</Stack>

				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>

					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
			</Box>
		</Container>
	);
}
export default PrimarySearchAppBar;
