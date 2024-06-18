export const sessions: string[] = ["55f14cef450523b731474e4b1c9be69c0ec3c2024a036a6125cd77a12bb129ae"];
const crypto = require("crypto");

const genToken = (length: number) => {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString("hex")
		.slice(0, length);
};

export const createSession = () => {
	const token = genToken(64);
	sessions.push(token);
	setTimeout(() => sessions.splice(sessions.indexOf(token), 1), 10 * 24 * 60 * 60 * 1000);
	return token;
};

export const checkSession = (token: string) => {
	return sessions.includes(token);
};
