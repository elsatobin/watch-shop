import React, { Fragment } from "react";
import RegisterForm from "@/Components/Forms/RegisterForm";
import {
	Box,
	Container,
	Divider,
	IconButton,
	Link,
	Paper,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import NewRegister from "@/Components/Forms/NewRegister";
import Grid from "@mui/material/Unstable_Grid2";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Image from "next/image";

export default function register() {
	return (
		<main
			style={{
				minHeight: "calc(100vh - 60px)",
				background: "url(/images/Rolex-sea.jpg)",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid xs={12} md={6}>
						<Paper
							elevation={20}
							className="glass-bg"
							sx={{
								backgroundImage: (theme) =>
									theme.palette.mode === "dark"
										? "none"
										: 
                    // "linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))"
                    "linear-gradient(rgb(255 255 255 / 75%), rgb(255 255 255 / 30%))",
							}}
						>
							<Stack px={3} mt={3}>
								<Stack direction="row" justifyContent="center">
									<Typography variant="h4" color="primary">
										Register in
									</Typography>
									<Image
										src="/images/logo.png"
										alt="Devita Watchs logo"
										width={180}
										height={50}
									></Image>
								</Stack>

								<Stack
									direction="row"
									gap={4}
									my={3}
									justifyContent="center"
								>
									<Tooltip title="Faceboock" arrow>
										<IconButton
											size="large"
											sx={{ width: "40px", height: "40px" }}
										>
											<Link
												href="http://faceboock.com"
												target="_blank"
											>
												<FaFacebook size={30} />
											</Link>
										</IconButton>
									</Tooltip>

									<Tooltip title="Google" arrow>
										<IconButton
											sx={{ width: "40px", height: "40px" }}
										>
											<Link href="http://Google.com" target="_blank">
												<FaGoogle size={30} />
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

								<Box width="100%" px={3} my={2}>
									<RegisterForm />
									{/* <NewRegister /> */}
								</Box>
							</Stack>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</main>
	);
}
