import dynamic from "next/dynamic";

// export dynamic metadata ---------------------------
export async function generateMetadata({ params, searchParams }, parent) {
	const id = params.id;

	const productMeta = await fetch(
		`assist/productsData/product_${id || 1}.json`,
		{ cache: "no-store" }
	).then((res) => res.data);

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
