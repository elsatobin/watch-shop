// import ProductShowDetais from "@/Components/Shop/ProductShowDetais";
import ProductDetaisSkeleton from "@/Components/Shop/ProductDetaisSkeleton";
import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";


async function getData(id) {
	const res = await fetch(
		// `https://devita-watchs.vercel.app/assist/blogs/blog-${id}.json`
		`http://localhost:3000/assist/blogs/blog_${id}.json`
	);
	if (!res.ok) { return notFound(); }
	return res.json();
}


// export dynamic metadata ---------------------------
export async function generateMetadata({ params }) {
	const blog = await getData(params.blogid);
	return {
		title: blog && blog.name,
		content: blog && blog.content,
	};
}



export default async function BlogId({ params }) {
	const blog = await getData(params.blogid);
	console.log(blog);

	const ShowBlog = dynamic(() => import('@/Components/Blogs/ShowBlog'), {
		loading: () => <ProductDetaisSkeleton />,
	});

	return (
		<section>
			<ShowBlog blog={blog} />
		</section>
	);
}
