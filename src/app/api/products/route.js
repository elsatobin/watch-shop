import Product from "@/models/Product";
import connect from "@/utility/db";

import { NextResponse } from "next/server";

export const Get = async (request) => {
	try {
		await connect();
		const products = await Product.find();
		return new NextResponse(JSON.stringify(products), { status: 200 });
	} catch (err) {
		return new NextResponse("Database Error", { status: 500 });
	}
};
