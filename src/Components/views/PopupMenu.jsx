"use client";
import React, { Fragment, useState } from "react";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	Tooltip,
	Typography,
} from "@/Utility/MuiComponents";

// "@mui/icons-material"
import { AccountCircle, Settings, Logout } from "@/Utility/MuiAndReactIcons";

function SignedAccountOptions() {
	const [show, setShow] = useState(false);
	const handelClick = () => setShow(!show);

	const paperRef = useRef(null);

	const handleClickOutside = useCallback(
		(event) => {
			if (paperRef.current && !paperRef.current.contains(event.target)) {
				setShow(false);
			}
		},
		[paperRef]
	);

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<Box>
			<Tooltip title="Account settings" arrow>
				<IconButton size="small" onClick={handelClick} sx={{ ml: "20px" }}>
					<AccountCircle />
					{/* <Avatar sx={{ width: 32, height: 32 }} /> */}
				</IconButton>
			</Tooltip>

			<Box position="relative" maxWidth={300}>
				<Paper
					ref={paperRef}
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
						<Typography variant="h6" align="center" px="8px">
							Mustafa Ahmed
						</Typography>

						<ListItem disablePadding>
							<ListItemButton>
								<Avatar sx={{ mr: "15px", width: 32, height: 32 }} />
								<ListItemText primary="Profile" />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton>
								<Avatar sx={{ mr: "15px", width: 32, height: 32 }} />
								<ListItemText primary="My Account" />
							</ListItemButton>
						</ListItem>

						<Divider sx={{ mr: "15px" }} />

						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ minWidth: "30px" }}>
									<Settings fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Settings" />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon sx={{ minWidth: "30px" }}>
									<Logout fontSize="small" />
								</ListItemIcon>
								<ListItemText primary="Logout" />
							</ListItemButton>
						</ListItem>
					</List>
				</Paper>
			</Box>
		</Box>
	);
}
export default React.memo(SignedAccountOptions);
