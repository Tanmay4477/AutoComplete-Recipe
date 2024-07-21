const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
app.use(express.json());
const apiKey = "2ba9b71649714b938b6546ff322b5157";


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/search", async (req, res) => {
    const number = req.query.number;
    const query = req.query.query;
    const response = await axios.get("https://api.spoonacular.com/recipes/autocomplete/", {
        params: {
            number,
            apiKey,
            query,
        }
    });
    return res.status(200).json(response.data);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

