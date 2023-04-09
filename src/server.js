import express from "express";

const app = express();
const PORT  = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`server listening on port: http://localhost:${PORT}`);
})