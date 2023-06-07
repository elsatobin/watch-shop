"use client";

import { Fragment, useState } from "react";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
} from "@mui/material/";
import { PersonAdd, Settings, Logout } from "@mui/icons-material";

export default function AccountMenuSigned() {
	// const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<Box
				sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
			>
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						<Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				disableScrollLock
				PaperProps={{
					elevation: 2,
					sx: {
						// bgcolor:"action.selected",
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							// bgcolor: "background.paper",
							// backgroundImage: "action.selected",
							bgcolor: (theme) =>
								theme.palette.mode === "dark" ? "#232323" : "#fff",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem onClick={handleClose}>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<PersonAdd fontSize="small" />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</Fragment>
	);
}
