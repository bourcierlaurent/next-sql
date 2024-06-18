const { parse } = require("url");
const next = require("next");
const compression = require("compression");
const env = require("dotenv").config({ path: "./.env" }).parsed;

const dev = env.NODE_ENV !== "production";
const { PORT } = env;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = require("http").createServer((req, res) => {
		compression()(req, res, () => {
			const parsedUrl = parse(req.url, true);
			handle(req, res, parsedUrl);
		});
	});

	server.listen(PORT, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${PORT}`);
	});
});
