import axios from "axios";
import dynamic from "next/dynamic";

export async function generateMetadata({ params, searchParams }, parent) {
	const id = params.id;

	const productMeta = await axios
		.get(`http://localhost:3000/assist/productsData/product_${id || 1}.json`)
		.then((res) => res.data);

	return {
		title: productMeta && productMeta.title,
		description: productMeta && productMeta.name,
	};
}

export default function Productid() {
	const ProductDetais = dynamic(
		() => import("@/Components/Shop/ProductDetais"),
		{ loading: () => <p style={{ color: "gray" }}>Loading...</p> }
	);

	return (
		<div>
			<ProductDetais />
		</div>
	);
}
