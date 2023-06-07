"use client"
import {
	Box,
	TextField,
	FormControlLabel,
	Radio,
	Typography,
	Button,
	Stack,
	Checkbox,
} from "@mui/material";

import { AccountCircle, Email, LockPerson } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";

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
		showPasswordC: false,
	});

	console.log(formInput);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		// let data = { formInput };

		// fetch("https://pointy-gauge.glitch.me/api/form", {
		// 	method: "POST",
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// })
		// 	.then((response) => response.json())
		// 	.then((response) => console.log("Success:", JSON.stringify(response)))
		// 	.catch((error) => console.error("Error:", error));
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
							helperText="Please enter your email"
							id="register_email"
							label="Email"
							variant="standard"
							name="email"
							defaultValue={formInput.email ?? ""}
							onChange={handleInput}
							fullWidth
						/>
					</Box>

					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<LockPerson sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="register_passwrd"
							label="Password"
							variant="standard"
							name="password"
							type="password"
							defaultValue={formInput.password ?? ""}
							onChange={handleInput}
						/>
					</Box>

					<FormControlLabel
						control={<Checkbox />}
						labelPlacement="end"
						name="terms"
						onChange={handleInput}
						checked={formInput.terms ?? ""}
						label="show Password"
						required
					/>
					<Link href="#">Forget Your Passwrd?</Link>
				</Stack>

				<Button variant="contained" type="submit">
					Submit
				</Button>
			</Box>

			<Typography variant="subtitle2" mt={4}>
				Not Have an account? <Link href="#">Register</Link>{" "}
			</Typography>
		</>
	);
}
