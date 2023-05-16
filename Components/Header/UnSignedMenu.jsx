// ("use client");
import React, { Fragment, useState } from "react";
import {
	Box,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Tooltip,
} from "@mui/material";

import { FaUser } from "react-icons/fa";
import Link from "next/link";

export default function UnSignedMenu() {
	const [show, setShow] = useState(false);
	const handelClick = () => setShow(!show);

	return (
		<Fragment>
			<Box>
				<IconButton size="small" onClick={handelClick} sx={{ ml: "20px" }}>
					<FaUser />
				</IconButton>

				<Box position="relative" maxWidth={300}>
					<Paper
						// ref={paperRef}
						elevation={4}
						onClick={handelClick}
						sx={{
							minWidth: "max-content",
							// filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							position: "absolute",
							top: "24px",
							right: 0,
							transition: ".5s",
							transformOrigin: "top",
							transform: `scaleY(${show ? 1 : 0})`,
							opacity: `${show ? 1 : 0}`,
							visibility: `${show ? "visible" : "hidden"}`,
							"&:before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: "-15px",
								right: 14,
								border: "8px solid transparent",
								borderBottomColor: (theme) =>
									theme.palette.mode === "dark" ? "#272727" : "#fff",
								zIndex: 0,
							},
						}}
					>
						<List>
							<ListItem disablePadding>
								<Link href="/register" style={{ width: "100%" }}>
									<ListItemButton>
										<ListItemText primary="Sign In" />
									</ListItemButton>
								</Link>
							</ListItem>

							<ListItem disablePadding>
								<Link href="/register" style={{ width: "100%" }}>
									<ListItemButton>
										<ListItemText primary="Register" />
									</ListItemButton>
								</Link>
							</ListItem>
						</List>
					</Paper>
				</Box>
			</Box>
		</Fragment>
	);
}
