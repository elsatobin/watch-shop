"use client";

import {
	Box,
	ClickAwayListener,
	Grow,
	IconButton,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

export default function AccountMenuUnSigned() {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	// const prevOpen = useRef(open);
	// useEffect(() => {
	// 	if (prevOpen.current === true && open === false) {
	// 		anchorRef.current.focus();
	// 	}
	// 	prevOpen.current = open;
	// }, [open]);

	return (
		<Box>
			<IconButton
				ref={anchorRef}
				id="composition-button"
				aria-controls={open ? "composition-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				sx={{ ml: "15px" }}
			>
				<FaUser />
			</IconButton>

			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement="bottom-start"
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom-start"
									? "left top"
									: "left bottom",
						}}
					>
						<Paper sx={{ mt: "15px" }}>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDown}
									onClick={handleClose}
								>
									<MenuItem component={Link} href="/account/signin">
										Signin
									</MenuItem>
									<MenuItem>
										<Link href="/account/register">Register</Link>
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
	);
}
{
	/* <List>
	<ListItem disablePadding>
		<Link href="/account/signin" >
			<ListItemButton>
				<ListItemText primary="Sign In" />
			</ListItemButton>
		</Link>
	</ListItem>

	<ListItem disablePadding>
		<Link href="/account/register" style={{ width: "100%" }}>
			<ListItemButton>
				<ListItemText primary="Register" />
			</ListItemButton>
		</Link>
	</ListItem>
</List>; */
}
