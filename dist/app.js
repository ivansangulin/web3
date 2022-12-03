import express from 'express';
const app = express();
const port = 3000;
import path from "path";
app.get("/", (req, res) => {
    res.sendFile(path.resolve("app.html"));
});
app.listen(port, () => console.log("Server running on " + port));
//# sourceMappingURL=app.js.map