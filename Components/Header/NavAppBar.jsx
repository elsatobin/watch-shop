("use client");
import React, { useState, useEffect } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Stack,
	Drawer,
	Divider,
	Container,
	Tabs,
	Tab,
} from "@mui/material";

import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import SignedAccountMenu from "./SignedAccountMenu";
import DrawerShopping from "../DrawerShopping";
import DrawerFavorite from "../DrawerFavorite";

import Link from "next/link";
import { useRouter } from "next/router";

import { navItems } from "../data";
import ThemeToggle from "./ThemeToggle";
import UnSignedMenu from "./UnSignedMenu";

const drawerWidth = 240;

// console.log(window.scrollY);
// تثبيت ال navBar في الاعلى بعد ال scroll ------------------------------------
// import { useScrollTrigger } from 'react-scroll';

// export default function Layout(props) {
//   const trigger = useScrollTrigger({
//     threshold: 100 // يحدد عدد البيكسلات الذي يجب تمريرها قبل تثبيت الـ navbar
//   });

//   return (
//     <div>
//       <nav className={trigger ? 'navbar fixed' : 'navbar'}>
//         {/* يمكنك وضع العناصر الخاصة بالـ navbar هنا */}
//       </nav>
//       </div>)};
// -------------------------------------------------------------------------------

export default function NavAppBar(props) {
	console.log(props.toggleDark);
	const [isSigned, setisSigned] = useState(false);
	
	// tabs --------------------------------------  start
	const router = useRouter();
	const [value, setValue] = useState(
		navItems
			.filter((e) => e.href !== "/")
			.findIndex((t) => router.pathname?.includes(t.href)) + 1 || 0
	);

	console.log("value ", value);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	// ---------------------------------------------  end

	// mobile drawer -------------------------------
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	// scroll -------------------------------
	const [fixScroll, setfixScroll] = useState(false);
	function handelFixScroll() {
		setfixScroll(window.scrollY >= 65 ? true : false);
	}

	useEffect(() => {
		// window.addEventListener("scroll", handelFixScroll);
		// return window.removeEventListener("scroll", handelFixScroll);
	}, []);

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				Devita
			</Typography>
			<Divider />

			<Tabs
				orientation="vertical"
				value={value}
				onChange={handleChange}
				aria-label="nav tabs"
				indicatorColor="primary"
				textColor="primary"
			>
				{navItems &&
					navItems.map((nl, i) => (
						<Tab
							key={i + i + i + nl}
							label={nl.label}
							component={Link}
							href={nl.href}
						/>
					))}
			</Tabs>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<Box height={{ xs: "56px", sm: "64px" }}></Box>
			<CssBaseline />
			<AppBar
				component="nav"
				sx={{ position: "fixed", top: "0" }}
				color="pwhite"
			>
				<Container>
					<Toolbar disableGutters={true}>
						<Typography variant="h6" mr={5}>
							{"Devita "}
						</Typography>

						<Box
							sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
						>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="nav tabs"
								indicatorColor="primary"
								textColor="primary"
								selectionFollowsFocus={true}
							>
								{navItems &&
									navItems.map((nl, i) => (
										<Tab
											key={i + i + nl}
											label={nl.label}
											component={Link}
											href={nl.href}
										/>
									))}
							</Tabs>
						</Box>

						<Stack
							order={0}
							direction="row"
							ml="auto"
							alignItems="center"
						>
							{/* navbar appbar icons */}
							<DrawerShopping />
							<DrawerFavorite />
							{/* display user menue if sined in  */}
							{isSigned ? <SignedAccountMenu /> : <UnSignedMenu />}

							<ThemeToggle
								toggleDark={props.toggleDark}
								settoggleDark={props.settoggleDark}
							/>

							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ ml: "auto", display: { md: "none" } }}
							>
								<MenuIcon />
							</IconButton>
						</Stack>
					</Toolbar>
				</Container>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						position: "fixed",
						top: { xs: "56px", sm: "64px" },
						display: { xs: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</AppBar>
		</Box>
	);
}
