const express = require("express");
const app = express();

app.get("/", (req, res) => {
    try {
        const domain = req.get('host');
        console.log(domain);
        res.status(200).send({ message: `You are from subdomain ${domain}` });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: "error", error: error
        });
    }
});

app.listen(3000, () => {
    console.log("Server is listening to port 3000!");
});