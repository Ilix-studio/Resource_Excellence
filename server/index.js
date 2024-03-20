import express from "express";
import cors from "cors";
const port = 5000;

const app = express();
//use middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () => console.log(`Litening at http://localhost:${port}`));
