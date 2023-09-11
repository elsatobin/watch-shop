// import AboutUs from "@/Components/About/AboutUs";

import { CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
	title: "About Us - Devita Watchs",
	description: "Get more information about Devita Watchs",
};

const AboutUs = dynamic(() => import("@/Components/About/AboutUs"), {
	loading: () => <p style={{ color: "gray" }}> Loading...</p>,
	// <CircularProgress />,
});

export default function About() {
	return <AboutUs />;
}
