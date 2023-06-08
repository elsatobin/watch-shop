import axios from "axios";
import dynamic from "next/dynamic";




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
