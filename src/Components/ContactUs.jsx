// /** @jsxImportSource @emotion/react */
"use client";
import {
	Box,
	Container,
	Stack,
	TextField,
	Typography,
	Button,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";


import { Send } from "@mui/icons-material"

export default function ContactUs() {
	return (
		<Container sx={{ py: "50px" }}>
			<Typography variant="h4" mb={3}>
				Hi, Howdy <br /> Let’s Connect us
			</Typography>

			<Box>
				{/* contact Info ----------------------------------------- */}
				<Grid container spacing={2}>
					<Grid xs={12} md={4} lg={4}>
						<Stack>
							<Typography variant="h6">Address</Typography>
							<Typography variant="body1">
								You address will be here Lorem Ipsum text
							</Typography>
						</Stack>
					</Grid>
					<Grid xs={12} md={4} lg={4}>
						<Stack>
							<Typography variant="h6">Phone</Typography>
							<Typography
								variant="body1"
								component="a"
								href="tel:+201234567890"
							>
								01234 567 890
							</Typography>
							<Typography
								variant="body1"
								component="a"
								href="tel:+201234567890"
							>
								01234 567 891
							</Typography>
						</Stack>
					</Grid>
					<Grid xs={12} md={4} lg={4}>
						<Stack>
							<Typography variant="h6">Web</Typography>
							<Typography
								variant="body1"
								component="a"
								href="tel:+201234567890"
							>
								info@example.com
							</Typography>
							<Typography
								variant="body1"
								component="a"
								href="tel:+201234567890"
							>
								info@example.com
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Box>
			<Box textAlign="center" my={4}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.4346456191593!2d31.33404977603689!3d30.081735974904795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa1eb56956b%3A0x592451f02857e019!2z2KfZhNit2LPZitmGINmIINin2YTYrtmE2YrZhNmK!5e0!3m2!1sen!2seg!4v1683083595933!5m2!1sen!2seg"
					width="100%"
					height="450"
					style={{ border: 0 }}
					allowFullScreen={true}
					loading="lazy"
					// referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</Box>

			{/* contact form */}
			<Box
				component="form"
				my={6}
				mx="auto"
				width={{ xs: "100%", md: "75%" }}
			>
				<Typography variant="h6" my={3}>
					Want send us a message ?
				</Typography>

				{/* contact form ----------------------------- */}
				<Box
					display="flex"
					flexDirection={{ xs: "column", sm: "row" }}
					justifyContent="center"
					gap={3}
					mb={3}
				>
					<TextField
						id="contact_name"
						label="Full Name"
						variant="outlined"
						fullWidth
					/>

					<TextField
						id="contact_email"
						label="Your Email"
						variant="outlined"
						fullWidth
					/>
				</Box>

				<Stack spacing={3} mb={3}>
					<TextField
						id="contact_subject"
						label="Subject"
						variant="outlined"
						fullWidth
					/>
					<TextField
						id="contact_message"
						label="Enter a message"
						multiline
						rows={4}
						variant="outlined"
						fullWidth
					/>
				</Stack>

				<Stack direction="row" justifyContent="center">
					<Button
						variant="contained"
						endIcon={<Send />}
						sx={{ width: "50%" }}
					>
						Send
					</Button>
				</Stack>
			</Box>
		</Container>
	);
}
