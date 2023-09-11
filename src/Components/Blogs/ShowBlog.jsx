import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function ShowBlog({ blog }) {
	return (
		<Container>
			<Box gap={3}>
				<Typography variant="h1" color="initial">
					{blog?.title} 
				</Typography>
				<Image
					src={blog?.image}
					alt={blog?.title}
					// width={540}
					// height={540}
					style={{ minWidth: '100%', maxWidth: '100%', maxHeight: 'auto' }}
				/>
				<Paper
					elevation={2}
					sx={{
						bgcolor: 'primary.main',
						display: 'inline-block',
						px: '7px',
						py: '4px',
					}}
				>
					{blog?.badge}
				</Paper>
				<Typography variant="body2" className={classes.blog_info}>
					{' '}
					{blog?.date}{' '}
				</Typography>
				<Typography variant="body2" className={classes.blog_info}>
					{blog?.content}
				</Typography>

				{/* Comments ---------------------------------- */}
				<Box gap={2}>
					<Typography variant="h4">Comments</Typography>

					{blog?.comments.map((com) => (
						<Stack direction="row" key={com.id}>
							<Typography variant="h6">{com?.name}</Typography>
							<Typography variant="body2">{com?.comment}</Typography>
						</Stack>
					))}
				</Box>
			</Box>
		</Container>
	);
}

export default ShowBlog;
