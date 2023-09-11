import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const validationSchema = Yup.object({
	firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	email: Yup.string("Enter your email").email("Enter a valid email").required("Email is required"),
	password: Yup
		.string("Enter your password")
		.min(5, "Password should be of minimum 5 characters length")
		.required("Password is required"),
	passConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
   gender:Yup.string().required("Please select your gender"),
	terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
});

const SignUpForm = () => {
   const [showPassword, setShowPassword] = useState(false)
	const [message, setMessage] = useState(""); // This will be used to show a message if the submission is successful
	const [submitted, setSubmitted] = useState(false);

	const formik = useFormik({
		initialValues: {
			fName: "",
			lName: "",
			email: "",
			password: "",
			passConfirm: "",
			gender: "",
			terms: false,
		},
		validationSchema: validationSchema,
		onsubmit: () => {
			setMessage("Form submitted");
			setSubmitted(true);
			console.log();
			JSON.stringify(values, null, 2);
		},
	});

	useEffect(() => {
		if (!submitted) return;

		setTimeout(() => {
			setMessage("");
			setSubmitted(false);
		}, 3000);
	}, [submitted]);

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
