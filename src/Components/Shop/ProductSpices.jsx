"use client"
import { useState } from "react";
import {
	Avatar,
	Box,
	Divider,
	Rating,
	Stack,
	Tab,
	Typography,
	Button,
	TextField,
	LinearProgress,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";


import { TabContext, TabList, TabPanel } from "@mui/lab" 


import { Star, ThumbUp } from "@mui/icons-material"


export default function ProductSpices({ product }) {
	const [value, setValue] = useState("1");
	const [isLogin, setIsLogin] = useState(false);
	const [addReview, setAddReview] = useState(0);
	console.log(addReview);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%", typography: "body1" }} my={8}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						centered
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<Tab label="Overview" value="1" />
						<Tab label="Specifications" value="2" />
						<Tab label="Reviews" value="3" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<Typography variant="h6" mb={2}>
						Highlights:
					</Typography>

					<Box component="ul" pl={3}>
						{product.highlights?.map((h, i) => (
							<Typography
								key={i}
								variant="subtitle2"
								component="li"
								sx={{ listStyle: "circle" }}
							>
								{h}
							</Typography>
						))}
					</Box>

					<Typography variant="h6" mb={2} mt={4}>
						Overview:
					</Typography>
					<Typography
						variant="subtitle2"
						textAlign="justify"
						width={{ xs: "100%", md: "80%" }}
					>
						{product.overview}
					</Typography>
				</TabPanel>

				<TabPanel value="2">
					<Typography variant="h6" mb={2} mt={4}>
						Specifications:
					</Typography>
					<table>
						<tbody>
							{Object.entries(product.specs || {}).map(
								([key, value]) => (
									<tr key={key}>
										<td>
											{" "}
											<Typography variant="body2" mr={1}>
												{key}:
											</Typography>{" "}
										</td>
										<td>{value}</td>
									</tr>
								)
							)}
						</tbody>
					</table>
				</TabPanel>
				<TabPanel value="3">
					<Stack direction="row" flexWrap="wrap">
						<Stack gap={1}>
							<Typography variant="subtitle1" mb={2}>
								Overall Rating
							</Typography>

							<Typography variant="h3" color="success.main">
								{product.rate}
							</Typography>
							<Rating
								name="half-rating-read"
								value={product.rate && product.rate}
								precision={0.5}
								readOnly
							/>
							<Typography variant="body2" mb={2}>
								Based on {product.num_ratings} ratings
							</Typography>
						</Stack>

						<Stack width="220px">
							<Stack
								gap={1}
								direction="row"
								color="success.dark"
								alignItems="center"
							>
								5
								<Star />
								<Box width="100%">
									<LinearProgress
										variant="determinate"
										color="inherit"
										value={50}
									/>
								</Box>
								(20)
							</Stack>

							<Stack
								gap={1}
								direction="row"
								color="success.light"
								alignItems="center"
							>
								4
								<Star />
								<Box width="100%">
									<LinearProgress
										variant="determinate"
										color="success"
										value={50}
									/>
								</Box>
								(20)
							</Stack>

							<Stack
								gap={1}
								direction="row"
								color="warning.main"
								alignItems="center"
							>
								3
								<Star />
								<Box width="100%">
									<LinearProgress
										variant="determinate"
										color="warning"
										value={50}
									/>
								</Box>
								(20)
							</Stack>

							<Stack
								gap={1}
								direction="row"
								color="warning.dark"
								alignItems="center"
							>
								2
								<Star />
								<Box width="100%">
									<LinearProgress
										variant="determinate"
										color="inherit"
										value={50}
									/>
								</Box>
								(20)
							</Stack>

							<Stack
								gap={1}
								direction="row"
								color="#ff2623"
								alignItems="center"
							>
								1
								<Star />
								<Box width="100%">
									<LinearProgress
										variant="determinate"
										color="error"
										sx={{ bgcolor: "#bababa" }}
										value={50}
									/>
								</Box>
								(20)
							</Stack>
						</Stack>
					</Stack>

					<Stack width="250px">
						<Divider />
						<Typography variant="h6" my={2}>
							{product.reviews?.length} Customer Reviews
						</Typography>
						<Divider />
					</Stack>
					<Box width={{ xs: "100%", md: "80%" }}>
						{product.reviews?.map((r, i) => (
							<Stack key={i} my={4} gap={2}>
								<Stack direction="row" gap={2} alignItems="center">
									<Avatar sx={{ color: "green", bgcolor: "#bababa" }}>
										H
									</Avatar>
									<Stack>
										<Typography variant="body1"> {r.name}</Typography>
										<Rating
											name="half-rating-read"
											value={r?.rating}
											precision={0.5}
											readOnly
											size="small"
										/>

										<Typography variant="body2" color="text.disabled">
											12 Dec, 2022{" "}
										</Typography>
									</Stack>
								</Stack>

								<Typography variant="subtitle1">{r?.title}</Typography>
								<Typography variant="subtitle2">{r?.review}</Typography>
								<Button
									variant="outlined"
									color="secondary"
									startIcon={<ThumbUp />}
									sx={{ width: "fit-content" }}
									// disabled={!isLogin}
								>
									Helpful
								</Button>
								<Divider />
							</Stack>
						))}
					</Box>
					{/* add review */}
					<Typography variant="h6">Add Review </Typography>

					{isLogin ? (
						<Stack
							component="form"
							onSubmit={(e) => e.preventDefault()}
							gap={2}
							width={{ xs: "100%", md: "80%" }}
							alignItems="center"
							mx="auto"
						>
							<Box display="flex" gap={2} alignItems="center">
								<Avatar sx={{ color: "green", bgcolor: "#bababa" }}>
									H
								</Avatar>
								<Typography variant="body1"> User Name</Typography>
							</Box>
							<Box>
								<Typography variant="body1">Rate</Typography>

								<Rating
									name="product-rating"
									value={addReview}
									precision={0.5}
									onChange={(e, newValue) => setAddReview(newValue)}
								/>
							</Box>
							<TextField
								label="Write a review title"
								variant="outlined"
								fullWidth
							/>
							<TextField
								label="Write a review"
								variant="outlined"
								multiline
								rows={4}
								fullWidth
							/>

							<Button
								variant="contained"
								color="primary"
								sx={{ width: "fit-content" }}
							>
								Submit
							</Button>
						</Stack>
					) : (
						<Typography variant="subtitle2">
							Signin to write a review
						</Typography>
					)}
				</TabPanel>
			</TabContext>
		</Box>
	);
}
