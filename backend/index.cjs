const express = require("express");
const app = express();
const port = 3001;

const carPart = require("./carpartsModel.cjs");

app.use(express.json());
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
	next();
});

app.get("/", (req, res) => {
	carPart
		.executeQuery("SELECT * from destinations")
		.then((response) => {
			res.status(200).send(response);
		})
		.catch((error) => {
			res.status(500).send(error);
		});
});

app.listen(port, () => {
	console.log(`App running on port ${port}.`);
});