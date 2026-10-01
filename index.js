import express from "express";

const app = express();
const PORT =process.env.port?? 8000;


app.get("/", (req, res) => {
    res.json({ message: "Hello World from mayur" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});