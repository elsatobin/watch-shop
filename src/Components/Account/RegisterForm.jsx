import {
	Box,
	FormControl,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
	Button,
	Stack,
	Checkbox,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useState } from "react";
import Link from "next/link";
import { AccountCircle, Email, LockPerson } from "@mui/icons-material";

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

export default function RegisterForm() {
	// const [formInput, setFormInput] = useReducer(
	// 	(state, newState) => ({ ...state, ...newState }),
	// 	{ email: "", password: "", }
	// );

	const [formInput, setFormInput] = useState({
		fName: "",
		lName: "",
		email: "",
		password: "",
		passConfirm: "",
		gender: "",
		terms: false,
	});

	console.log(formInput);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		let data = { formInput };

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
			<Box component="form" autoComplete="off">
				<Grid container spacing={2}>
					<Grid xs={12} md={6}>
						<Box sx={{ display: "flex", alignItems: "flex-end" }}>
							<AccountCircle
								sx={{ color: "action.active", mr: 1, my: 0.5 }}
							/>
							<TextField
								id="register_fName"
								label="First Name"
								variant="standard"
								name="fName"
								// value={formInput.fName}
								onChange={handleInput}
								defaultValue={formInput.fName ?? ""}
							/>
						</Box>
					</Grid>

					<Grid xs={12} md={6}>
						<Box sx={{ display: "flex", alignItems: "flex-end" }}>
							<AccountCircle
								sx={{ color: "action.active", mr: 1, my: 0.5 }}
							/>
							<TextField
								id="register_lName"
								label="Last Name"
								variant="standard"
								// color="success"
								name="lName"
								defaultValue={formInput.lName ?? ""}
								onChange={handleInput}
							/>
						</Box>
					</Grid>

					<Grid xs={12}>
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
					</Grid>

					<Grid xs={12} md={6}>
						<Box sx={{ display: "flex", alignItems: "flex-end" }}>
							<LockPerson
								sx={{ color: "action.active", mr: 1, my: 0.5 }}
							/>
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
					</Grid>

					<Grid xs={12} md={6}>
						<Box sx={{ display: "flex", alignItems: "flex-end" }}>
							<LockPerson
								sx={{ color: "action.active", mr: 1, my: 0.5 }}
							/>
							<TextField
								id="register_passConfirm"
								label="Password Confirmation"
								variant="standard"
								name="passConfirm"
								type="password"
								defaultValue={formInput.passConfirm ?? ""}
								onChange={handleInput}
								// color="success"
							/>
						</Box>
					</Grid>

					<Grid xs={12}>
						<Typography variant="subtitle1">Gender *</Typography>
						<RadioGroup
							row
							aria-labelledby="gender"
							name="gender"
							value={formInput.gender ?? ""}
							onChange={handleInput}
						>
							<FormControlLabel
								value="male"
								control={<Radio />}
								label="Male"
							/>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
						</RadioGroup>

						<FormControlLabel
							control={<Checkbox />}
							labelPlacement="end"
							name="terms"
							onChange={handleInput}
							checked={formInput.terms ?? ""}
							label="I have read and accept Terms"
							required
						/>
					</Grid>
				</Grid>

				<Stack direction="row" gap={4} mt={3} justifyContent="center">
					<Button variant="contained" type="submit">
						Submit
					</Button>

					<Button variant="contained" type="reset">
						Clear
					</Button>
				</Stack>
			</Box>

			<Typography variant="subtitle2" mt={4}>
				Already Registerd? <Link href="#">SIGN IN</Link>{" "}
			</Typography>
		</>
	);
}
