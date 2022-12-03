import express from 'express';
const app = express();
const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 3000;
import path from "path";
app.get("/", (req,res) => {
    res.sendFile(path.resolve("app.html"));
})

app.listen(port, () => console.log("Server running on " + port));