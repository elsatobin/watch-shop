// "use client";
import React from "react";
import {
	Box,
	Container,
	Typography,
	Card,
	CardContent,
	Stack,
} from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";

import { Instagram, Twitter } from "@mui/icons-material";
import { FaFacebookF } from "react-icons/fa";

import Image from "next/image";
import { team_members } from "@/utility/data";

import classes from "@/styles/about.module.css";

function TeamMembers() {
	return (
		<Container component="section" >
			<Box pt={5}>
				<Typography variant="h3" mb={5} mt={8} align="center">
					Team Members
				</Typography>

				<Grid container spacing={{ xs: 2, md: 3 }} >
					{team_members && team_members.map((member) => (

						<Grid xs={12} sm={6} md={3} key={member.id}>
							<Card className={classes.card_member} sx={{ position: "relative" }} >
								<Box minHeight={140}>
									<Image
										src={member.img}
										alt={member.name}
										className={classes.images}
									/>
								</Box>

								<CardContent sx={{ textAlign: "center" }}>
									<Typography gutterBottom variant="h6">
										{member.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{member.title}
									</Typography>
								</CardContent>
								<Box
									position="absolute"
									top={0}
									right={0}
									className={classes.member_icons_box}
								>
									<Stack spacing={1} mt={2} mr={2}>
										<Box className={classes.social_member_icon}>
											<FaFacebookF size={20} />
										</Box>
										<Box className={classes.social_member_icon}>
											<Twitter />
										</Box>
										<Box className={classes.social_member_icon}>
											<Instagram />
										</Box>
									</Stack>
								</Box>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
export default TeamMembers;
