"use client";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


export default function AccountLayout({ children }) {
	return (
		<section
			style={{
				minHeight: "calc(100vh - 60px)",
				background: "url(/assist/images/peakpx-1.jpg) left center",
				backgroundSize: "cover",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Container>
				<Grid container spacing={2} my={3}>
					<Grid xs={12} md={6}>
						<Paper
							elevation={20}
							className="glass-bg"
							sx={{
								backgroundImage: (theme) =>
									theme.palette.mode === "dark"
										? "none"
										: "linear-gradient(rgb(255 255 255 / 75%), rgb(255 255 255 / 40%))",
							}}
						>
							{children}
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}
