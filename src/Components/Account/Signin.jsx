'use client';

import { Box, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material';

import { FaGoogle } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

import SignInForm from './SigninForm';

export default function Signin() {
	return (
		<Stack px={3} mt={3}>
			<Stack direction="row" justifyContent="center" alignItems="end" columnGap={1}>
				<Typography
					variant="h4"
					color="primary"
					fontSize={{ xs: '20px', sm: '34px' }}
				>
					Sign in
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
				<Tooltip title="SignIn in with google" arrow>
					<IconButton sx={{ width: '40px', height: '40px' }}>
						<Link href="http://Google.com" target="_blank">
							{/* <FaGoogle size={40} /> */}
							<Image
								src="/assist/icons/google.svg"
								alt="SignIn in with google"
								width={40}
								height={40}
							/>
						</Link>
					</IconButton>
				</Tooltip>
			</Stack>
			<Typography variant="body2" color="text.disabled" align="center" mb={1}>
				or use your email account:
			</Typography>
			<Divider />
			<Box width="100%" my={2}>
				{/* Sugnin Form component ----------------------------- */}
				<SignInForm />
			</Box>

			<Typography variant="body2" color="text.disabled">
				<Link href="#">Forget Your Password?</Link>
			</Typography>

			<Typography variant="subtitle2" my={3}>
				Not Have an account?{' '}
				<Link href="account/register" className="sign-links">
					Register
				</Link>
			</Typography>
		</Stack>
	);
}
