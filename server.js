const express = require("express");
const app = express();

app.get("/", (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(400).send({ status: "error", error: error })
    }
});

app.listen(3000, () => {
    console.log("Server is listening!");
});