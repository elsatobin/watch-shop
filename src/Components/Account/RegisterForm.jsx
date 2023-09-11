"use client";

import {
	Box,
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

import { useEffect, useState } from "react";
import { AccountCircle, Email, LockPerson } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

// import axios from "axios";

const schema = Yup.object({
	firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
	password: Yup.string("Enter your password")
		.min(5, "Password should be of minimum 5 characters length")
		.required("Password is required"),
	passConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Passwords do not match"),
	gender: Yup.string().required("Please select your gender"),
	terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

const InitialValue = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	passConfirm: "",
	gender: "",
	terms: false,
};

export default function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
	const [submitted, setSubmitted] = useState(false);


	const handleSubmit = (values, { resetForm }) => {
		// e.preventDefault();

		setMessage("Form submitted");
		setSubmitted(true);
		console.log(values);
		// JSON.stringify(values, null, 2);

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

		resetForm();
	};


	const formik = useFormik({
		initialValues: InitialValue,
		validationSchema: schema,
		onsubmit: handleSubmit,
	});

	// const {
	// 	isValid,
	// 	values,
	// 	errors,
	// 	touched,
	// 	isSubmitting,
	// 	handleBlur,
	// 	handleChange,
	// 	handleSubmit,
	// } = useFormik({
	// 	initialValues: {
	// 		firstName: "",
	// 		lastName: "",
	// 		email: "",
	// 		phone: "",
	// 		password: "",
	// 		passwordCon: "",
	// 		terms: false,
	// 	},
	// 	validationSchema: registerSchema,
	// 	onSubmit,
	// });

	// onSubmit = (values, { setSubmitted }) => {};

	useEffect(() => {
		if (!submitted) return;

		setTimeout(() => {
			setMessage("");
			setSubmitted(false);
		}, 3000);
	}, [submitted]);

	// reset form ---------------------------------------
	// const resetForm = () => setFormInput(InitialValue);

	

	return (
		<Box component="form" action="Post" autoComplete="off" onSubmit={formik.handleSubmit}>
			<Grid container spacing={2}>
				<Grid xs={12} md={6}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="register_firstName"
							label="First Name"
							variant="standard"
							fullWidth
							name="firstName"
							// defaultValue={formInput.fName ?? ""}
							value={formik.values.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.firstName && Boolean(formik.errors.firstName)}
							helperText={formik.touched.firstName && formik.errors.firstName}
						/>
					</Box>
				</Grid>

				<Grid xs={12} md={6}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="register_lastName"
							label="Last Name"
							variant="standard"
							// color="success"
							name="lastName"
							fullWidth
							// defaultValue={formInput.lName ?? ""}
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
						/>
					</Box>
				</Grid>

				<Grid xs={12}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<Email sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="register_email"
							label="Email"
							variant="standard"
							name="email"
							fullWidth
							// defaultValue={formInput.email ?? ""}
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
					</Box>
				</Grid>

				<Grid xs={12} md={6}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<LockPerson sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="register_password"
							label="Password"
							variant="standard"
							name="password"
							fullWidth
							type={showPassword ? "text" : "password"}
							// defaultValue={formInput.password ?? ""}
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</Box>
				</Grid>

				<Grid xs={12} md={6}>
					<Box sx={{ display: "flex", alignItems: "flex-end" }}>
						<LockPerson sx={{ color: "action.active", mr: 1, my: 0.5 }} />
						<TextField
							id="register_passConfirm"
							label="Password Confirmation"
							variant="standard"
							name="passConfirm"
							type={showPassword ? "text" : "password"}
							fullWidth
							value={formik.values.passConfirm}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.passConfirm && Boolean(formik.errors.passConfirm)}
							helperText={formik.touched.passConfirm && formik.errors.passConfirm}
						/>
					</Box>
				</Grid>

				<Grid xs={12}>
					<FormControlLabel
						control={<Checkbox />}
						labelPlacement="end"
						name="showPassword"
						onChange={() => setShowPassword(!showPassword)}
						checked={showPassword ?? false}
						label="show Password"
					/>
				</Grid>

				<Grid xs={12}>
					<Typography variant="subtitle1">Gender *</Typography>
					<RadioGroup
						row
						aria-labelledby="gender"
						name="gender"
						value={formik.values.gender}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.gender && Boolean(formik.errors.gender)}
					>
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="female" control={<Radio />} label="Female" />
					</RadioGroup>
					<Typography variant="body2" color="error">
						{formik.touched.gender && formik.errors.gender}
					</Typography>

					<FormControlLabel
						control={<Checkbox />}
						labelPlacement="end"
						name="terms"
						label="I have read and accept Terms"
						checked={formik.values.terms}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={formik.touched.terms && Boolean(formik.errors.terms)}
					/>
					<Typography variant="body2" color="error">
						{formik.touched.terms && formik.errors.terms}
					</Typography>
				</Grid>
			</Grid>

			<Stack direction="row" gap={4} mt={3} justifyContent="center">
				<Button variant="contained" type="submit" disabled={false}>
					Submit
				</Button>

				<Button variant="contained" type="reset" onClick={formik.resetForm}>
					Clear
				</Button>
			</Stack>
		</Box>
	);
}
