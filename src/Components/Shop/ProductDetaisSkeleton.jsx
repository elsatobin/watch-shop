"use client";
import React from "react";
import { Container, Stack, Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function ProductDetaisSkeleton({ product }) {
	return (
		<Container sx={{ pt: 8 }}>
			<Grid container spacing={2} rowGap={3}>
				<Grid xs={12} md={6}>
					<Stack gap={3}>
						<Skeleton width="100%" height={540} />
						<Skeleton width="80%" height={100} sx={{ mx: "auto" }} />
					</Stack>
				</Grid>

				{/* prodduct infos ------------------------------------------ */}
				<Grid xs={12} md={6}>
					<Stack gap={2} height="100%">
						<Skeleton variant="rounded" width={60} height={30} />
						<Skeleton variant="rounded" width="100%" height={30} />
						<Skeleton variant="rounded" width={60} height={30} />
						<Skeleton variant="rounded" width="100%" height={60} />
						<Skeleton variant="rounded" width="100%" height={70} />

						<Skeleton variant="rounded" width="50%" height={20} />
						<Skeleton variant="rounded" width="50%" height={20} />

						<Skeleton variant="rounded" width="70%" height={30} />
						<Skeleton variant="rounded" width="50%" height={30} />

						<Stack direction="row" justifyContent="space-evenly">
							<Skeleton variant="rounded" width="30%" height={40} />
							<Skeleton variant="rounded" width="30%" height={40} />
							<Skeleton variant="circular" width={40} height={40} />
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
}
export default React.memo(ProductDetaisSkeleton);
