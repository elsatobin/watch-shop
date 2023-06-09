import Link from "next/link";
import Image from "next/image";

import image404 from "../images/404 page missing.png";

export const metadata = {
	title: "Page Not Found - Devita Watchs",
	description: "Sorry! this page not exist",
};

export default function NotFound() {
	return (
		<div className="loading-style">
			<h2>Page Not Found</h2>
			<Image
				src={image404}
				alt="Page not found"
				placeholder="blur"
				className="img-fit"
			/>
			<br /> <br />
			<p>Could not find requested resource</p>
			<Link href="/"> {"<< Back to Home Page"}</Link>
		</div>
	);
}
