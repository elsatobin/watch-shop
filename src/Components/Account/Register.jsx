"use client";
import {
	Box,
	Divider,
	IconButton,
	Link,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";

import { FaGoogle } from "react-icons/fa";

import Image from "next/image";
import RegisterForm from "./RegisterForm";

export default function Register() {
	return (
		<Stack px={3} mt={3}>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="end"
				columnGap={1}
			>
				<Typography
					variant="h4"
					fontSize={{ xs: "20px", sm: "34px" }}
					color="primary"
				>
					Register in
				</Typography>
				<Image
					src="/assist/images/logo.png"
					alt="Devita Watchs logo"
					width={180}
					height={50}
				></Image>
			</Stack>

			<Stack direction="row" gap={4} my={3} justifyContent="center">
				{/* Icons to Sign in by Google ------------- */}
				<Tooltip title="Sigin in with google" arrow>
					<IconButton sx={{ width: "40px", height: "40px" }}>
						<Link href="http://Google.com" target="_blank">
							{/* <FaGoogle size={40} /> */}
							<Image
								src="/assist/icons/google.svg"
								alt="Sigin in with google"
								width={40}
								height={40}
							/>
						</Link>
					</IconButton>
				</Tooltip>
			</Stack>

			<Typography
				variant="body2"
				color="text.disabled"
				align="center"
				mb={1}
			>
				or use your email account:
			</Typography>
			<Divider />

			<Box width="100%" my={2}>
				{/* Register Form component ----------------------------- */}
				<RegisterForm />
			</Box>

			<Typography variant="subtitle2" my={3}>
				Already have an account?{" "}
				<Link href="/account/signin" className="sign-links">
					Signin
				</Link>
			</Typography>
		</Stack>
	);
}
