import express from "express";
const app = express();
const PORT = 8080;
app.get("/", (req, res) => {
    res.send("Hello World updated");
});
app.get("/VaNum", (req, res) => {
    res.send("Hello VaNum");
});
app.listen(PORT, () => {
    console.log(`My app is running on http://localhost:${PORT}`);
});