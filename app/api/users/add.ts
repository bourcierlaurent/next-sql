import type { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";

type Data = {
	message: string;
	userId?: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method === "POST") {
		const { name, email } = req.body;
		try {
			const [result]: any = await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
			if (result && result.insertId) {
				res.status(200).json({ message: "User added successfully", userId: result.insertId });
			} else {
				res.status(500).json({ message: "User could not be added" });
			}
		} catch (error) {
			res.status(500).json({ message: (error as Error).message });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
