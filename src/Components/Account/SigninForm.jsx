"use client";
import { useState } from "react";
import {
	Box,
	TextField,
	FormControlLabel,
	Button,
	Stack,
	Checkbox,
} from "@mui/material";

import { Email, LockPerson } from "@mui/icons-material";

// const signupSchema = object({
// 	name: string().min(1, "Name is required").max(12),
// 	email: string().min(1, "Email is required").email("Email is invalid"),
// 	password: string()
// 		.min(1, "Password is required")
// 		.min(4, "Password must be more than 4 characters")
// 		.max(12, "Password must be less than 12 characters"),
// 	passwordConfirm: string().min(1, "Please confirm your password"),
// }).refine((data) => data.password === data.passwordConfirm, {
// 	path: ["passwordConfirm"],
// 	message: "Passwords do not match",
// });

export default function SugninForm() {
	// const [formInput, setFormInput] = useReducer(
	// 	(state, newState) => ({ ...state, ...newState }),
	// 	{ email: "", password: "", }
	// );

	const [formInput, setFormInput] = useState({
		email: "",
		password: "",
		showPassword: false,
	});

	console.log(formInput);

	const handleSubmit = (evt) => {
		evt.preventDefault();
	};

	const handleInput = (ev) => {
		if (ev.target.type === "checkbox") {
			setFormInput((prevFormInput) => ({
				...prevFormInput,
				[ev.target.name]: ev.target.checked,
			}));
			console.log(ev.target.type);
		} else {
			const name = ev.target.name;
			const newValue = ev.target.value;
			setFormInput((prevFormInput) => ({
				...prevFormInput,
				[name]: newValue,
			}));
			console.log(ev.target.type);
			console.log("name", name);
			console.log("newValue", newValue);
		}
	};

	return (
		<>
			<Box component="form" autoComplete="off" onSubmit={handleSubmit}>
				<Stack gap={2}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							// helperText="Please enter your email"
							id="signin_email"
							label="Email"
							variant="standard"
							name="email"
							defaultValue={formInput.email ?? ""}
							onChange={handleInput}
							fullWidth
							required
						/>
					</Box>
					

					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<LockPerson sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="signin_passwrd"
							label="Password"
							variant="standard"
							name="password"
							type={formInput.showPassword ? "text" : "password"}
							defaultValue={formInput.password ?? ""}
							onChange={handleInput}
							fullWidth
							required
						/>
					</Box>

					<FormControlLabel
						control={<Checkbox />}
						labelPlacement="end"
						name="showPassword"
						onChange={handleInput}
						checked={formInput.showPassword ?? ""}
						label="show Password"
					/>
				</Stack>

				<Button
					variant="contained"
					type="submit"
					sx={{ mx: "auto", display: "block" }}
				>
					Submit
				</Button>
			</Box>
		</>
	);
}
