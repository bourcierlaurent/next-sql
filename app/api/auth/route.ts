import { createSession } from "@lib/session";
import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

type Payload = {
	user: string;
	password: string;
	database: string;
};
// Ccv8Euf3Rz#Vb6d3XB^m

export const POST = async (req: NextRequest) => {
	try {
		const data: Payload = await req.json();
		console.log(data);
		const connection = await mysql.createConnection({
			host: "localhost",
			...data,
		});
		const token = createSession();
		return NextResponse.json({ success: true, token });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ success: false });
	}
};
