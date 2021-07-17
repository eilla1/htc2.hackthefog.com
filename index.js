const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Headers", "X-Still-On-Heroku");
	res.setHeader("X-Still-On-Heroku", "Please, Cap or Raf, get the site to static mode on GitHub Pages because this runs like a brick. To see why, go to https://www.hackthefog.com/node_modules/vary/index.js");
	next();
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);
