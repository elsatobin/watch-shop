"use client"
// "use server";
import {
	Box,
	Divider,
	IconButton,
	Link,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { FaFacebook, FaGoogle } from "react-icons/fa";

import Image from "next/image";
import SugninForm from "./SigninForm";



export default function Signin() {
	return (
		<
			// style={{
			// 	minHeight: "calc(100vh - 60px)",
			// 	background: "url(/assist/images/peakpx-1.jpg) left center",
			// 	display: "flex",
			// 	alignItems: "center",
			// }}
		>
			{/* <Container>
				<Grid container spacing={2} my={3}>
					<Grid xs={12} md={6}></Grid>
				</Grid>
			</Container> */}

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
						Sign in
					</Typography>
					<Image
						src="/images/logo.png"
						alt="Devita Watchs logo"
						width={180}
						height={50}
					></Image>
				</Stack>

				<Stack direction="row" gap={4} my={3} justifyContent="center">
					{/* Icons to Sign in by facebook and Google */}
					<Tooltip title="Faceboock" arrow>
						<IconButton sx={{ width: "40px", height: "40px" }}>
							<Link href="http://faceboock.com" target="_blank">
								<FaFacebook size={40} />
							</Link>
						</IconButton>
					</Tooltip>

					<Tooltip title="Google" arrow>
						<IconButton sx={{ width: "40px", height: "40px" }}>
							<Link href="http://Google.com" target="_blank">
								<FaGoogle size={40} />
							</Link>
						</IconButton>
					</Tooltip>
				</Stack>

				<Typography
					variant="body2"
					color="secondary.light"
					align="center"
					mb={1}
				>
					or use your email account:
				</Typography>
				<Divider />

				<Box width="100%" my={2}>
					<SugninForm />
				</Box>
			</Stack>
		</>
	);
}
