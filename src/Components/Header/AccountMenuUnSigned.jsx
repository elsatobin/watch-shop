"use client";
import React, { useRef, useState } from "react";
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
import Link from "next/link";

import { FaUser } from "react-icons/fa";

function AccountMenuUnSigned() {
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
									<MenuItem>
										<Link href="/account/signin">Signin</Link>
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
export default React.memo(AccountMenuUnSigned);
