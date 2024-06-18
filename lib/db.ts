import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Ccv8Euf3Rz#Vb6d3XB^m",
	database: "webui",
});

export default connection;
