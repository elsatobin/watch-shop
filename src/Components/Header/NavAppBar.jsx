"use client";
import React, { useState, useEffect, useCallback } from "react";
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
} from "@mui/material/";

import { Menu } from "@mui/icons-material";

import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

import { navItems } from "@/utility/data";
import { useScroll } from "framer-motion";

import ThemeToggle from "./ThemeToggle";

import AccountMenuUnSigned from "./AccountMenuUnSigned";
// import AccountMenuSigned from "./AccountMenuSigned";
// import DrawerShopping from "../Cart/DrawerShopping";
// import DrawerFavorite from "../FavoriteList/DrawerFavorite";

const AccountMenuSigned = dynamic(() => import("../Header/AccountMenuSigned"));

const DrawerShopping = dynamic(() => import("../Cart/DrawerShopping"));
const DrawerFavorite = dynamic(() => import("../FavoriteList/DrawerFavorite"));

const drawerWidth = 240;

function NavAppBar(props) {
	const [isSigned, setisSigned] = useState(false);

	// handel tabs --------------------------------------  start
	const pathname = usePathname();
	console.log("pathname ", pathname);

	const [value, setValue] = useState(
		navItems
			.filter((e) => e.href !== "/")
			.findIndex((tap) => pathname.startsWith(tap.href)) + 1 || 0
	);

	console.log("value ", value);

	const handleChange = useCallback((event, newValue) => {
		setValue(newValue);
	}, []);
	// ---------------------------------------------  end

	// mobile drawer -------------------------------
	const { window } = props;
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = useCallback(() => {
		setMobileOpen((prevState) => !prevState);
	}, []);

	// fixed nav when scroll -------------------------------
	const [fixNav, setFixNav] = useState(false);
	const { scrollYProgress } = useScroll();
	useEffect(() => {
		return scrollYProgress.on("change", (latestValue) => {
			console.log(scrollYProgress);
			latestValue > 0.035 ? setFixNav(true) : setFixNav(false);
		});
	}, [scrollYProgress]);

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
				{console.log("this is drawer tab")}
				{navItems &&
					navItems.map((navLink, i) =>
						navLink.label.toLowerCase() === "shop" ? (
							<Tab
								key={i + i + navLink}
								label={navLink.label}
								component={Link}
								href="/#shop"
								scroll={false}
							/>
						) : (
							<Tab
								key={i + i + navLink}
								label={navLink.label}
								component={Link}
								href={navLink.href}
							/>
						)
					)}
			</Tabs>
		</Box>
	);

	const clientWindow =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			<Box
				display={fixNav ? "block" : "none"}
				height={{ xs: "56px", sm: "64px" }}
			></Box>
			<AppBar
				component="nav"
				sx={{ position: fixNav ? "fixed" : "relative", top: "0" }}
				color="pwhite"
			>
				<Container>
					<Toolbar disableGutters={true}>
						{console.log("this is logo")}
						<Link href="/">
							<Typography variant="h6" mr={5}>
								{"Devita "}
							</Typography>
						</Link>

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
								{console.log("this is nav bar")}
								{navItems &&
									navItems.map((navLink, i) =>
										navLink.label.toLowerCase() === "shop" ? (
											<Tab
												key={i + i + navLink}
												label={navLink.label}
												component={Link}
												href="/#shop"
												scroll={false}
											/>
										) : (
											<Tab
												key={i + i + navLink}
												label={navLink.label}
												component={Link}
												href={navLink.href}
											/>
										)
									)}
							</Tabs>
						</Box>

						<Stack
							order={0}
							direction="row"
							ml="auto"
							alignItems="center"
						>
							{/* navbar appbar icons ------------------- */}
							<DrawerShopping />
							<DrawerFavorite />
							{/* display user menue if sined in ---------- */}
							{isSigned ? (
								<AccountMenuSigned />
							) : (
								<AccountMenuUnSigned />
							)}

							<ThemeToggle />

							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleDrawerToggle}
								sx={{ ml: "auto", display: { md: "none" } }}
							>
								<Menu />
							</IconButton>
						</Stack>
					</Toolbar>
				</Container>
				<Drawer
					container={clientWindow}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					disableScrollLock
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
export default React.memo(NavAppBar);
