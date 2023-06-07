"use client"
import { forwardRef, useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Divider,
} from "@mui/material/";

// const Transition = forwardRef(function Transition(props, ref) {
// 	return <Slide direction="up" ref={ref} {...props} />;
// });


export default function DeliveryReturn() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Delivery & Return
			</Button>

			<Dialog
				open={open}
				// TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="Delivery & Return"
				disableScrollLock
			>
				<DialogTitle>Delivery & Return Roles</DialogTitle>
				<Divider sx={{ mx: 3 }} />
				<DialogContent>
					Delivery roles
					<DialogContentText mb={3}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry’s
						standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen.
					</DialogContentText>
					Return roles
					<DialogContentText>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry’s
						standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen.
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button variant="contained" onClick={handleClose}>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
