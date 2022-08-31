const { createServer } = require("http");
const exp = require("express");
const app = exp();
const port = process.env.PORT || 3001;

app.get("*", (req, res)=>{
	const { url , method , query } = req;
	res.json({ url , method , query });
})

createServer(app)
.listen(port, () => console.log("Server started at Port", port));