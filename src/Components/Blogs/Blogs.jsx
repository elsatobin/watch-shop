"use client";
import React, { Fragment } from "react";
import {
	Card,
	CardActions,
	CardContent,
	Container,
	Divider,
	Paper,
	Stack,
	Typography,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import { KeyboardDoubleArrowRight } from "@mui/icons-material";

import Link from "next/link";
import Image from "next/image";

import classes from "../../styles/blog.module.css";
import { blogs } from "../../utility/data";
import { motion } from "framer-motion";

function Blog() {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
				duration: 0.5,
			},
		},
	};

	const item = {
		hidden: { y: "100%", opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<Container>
			<Grid
				container
				my={8}
				spacing={3}
				component={motion.ul}
				className="container"
				variants={container}
				initial="hidden"
				animate="visible"
			>
				{blogs &&
					blogs.map((blg) => (
						<Grid
							xs={12}
							sm={6}
							md={4}
							key={blg.id}
							component={motion.li}
							variants={item}
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.3 },
								zIndex: "40",
							}}
						>
							<Card
								component={motion.div}
								className={` ${classes.blog_card}`}
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
							>
								<Link href="#" aria-label={blg.title}>
									<Image
										src={blg.img}
										alt={blg.title}
										placeholder="blur"
										className="img-fit"
									/>
								</Link>
								<CardContent>
									<Paper
										elevation={2}
										sx={{
											bgcolor: "praimary.main",
											display: "inline-block",
											px: "7px",
											py: "4px",
										}}
									>
										{blg.badge}
									</Paper>
									<Stack spacing={2} mt={3}>
										<Typography
											variant="h6"
											component={Link}
											href="#"
											sx={{ "&:hover": { color: "blue" } }}
										>
											{blg.title}
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{blg.text}
										</Typography>
									</Stack>
								</CardContent>
								<Stack justifyContent="end">
									<Divider sx={{ mx: "15px" }} />
									<CardActions sx={{ justifyContent: "center", height: "50px" }}>
										<Typography variant="body2" className={classes.blog_info}>
											{blg.date} /{blg.comments} Comments
										</Typography>
										<Typography
											variant="body"
											color="primary"
											component={Link}
											href={`/blogs/${blg.id}`}
											className={classes.blog_link}
											display="flex"
											alignItems="center"
										>
											READ MORE
											<KeyboardDoubleArrowRight fontSize="small" />
										</Typography>
									</CardActions>
								</Stack>
							</Card>
						</Grid>
					))}
			</Grid>
		</Container>
	);
}
export default React.memo(Blog);
