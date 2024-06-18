import type { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";
import { User } from "@/types/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse<User[] | { message: string }>) {
	if (req.method === "GET") {
		try {
			const rows = (await db.query<User[] | any>("SELECT * FROM users")) as User[];

			res.status(200).json(rows);
		} catch (error) {
			res.status(500).json({ message: (error as Error).message });
		}
	} else {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
