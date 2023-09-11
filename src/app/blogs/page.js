import dynamic from "next/dynamic";

export const metadata = {
	title: "Blogs - Devita Watchs",
	description: "Read our Blogs",
};

const Blog = dynamic(() => import("@/Components/Blogs/Blogs"), {
	loading: () => <p style={{ color: "gray" }}>Loading...</p>,
});

export default function Blogs() {
	return <Blog />;
}
