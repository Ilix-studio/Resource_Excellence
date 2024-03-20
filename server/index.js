import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import { routeNotFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();
//use middleware
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/api/users", userRoutes);
app.use(routeNotFound);
app.use(errorHandler);

app.get("/", (req, res) => res.send("server is ready"));

app.listen(port, () => console.log(`Litening at http://localhost:${port}`));
