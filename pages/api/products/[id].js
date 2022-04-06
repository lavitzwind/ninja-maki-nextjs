import dbConnect from "../../../utils/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
	const {
		method,
		query: { id },
	} = req;

	dbConnect();

	if (method === "GET") {
		try {
			const products = await Product.findById(id);
			res.status(200).json(products);
		} catch {
			res.status(500).json(err);
		}
	}

	if (method === "PUT") {
		try {
			const product = await Product.findByIdAndUpdate(id, req.body);
			res.status(200).json(product);
		} catch {
			res.status(500).json(err);
		}
	}

	if (method === "DELETE") {
		try {
			await Product.findByIdAndDelete(id);
			res.status(200).json("The product has been deleted!");
		} catch {
			res.status(500).json(err);
		}
	}
}
