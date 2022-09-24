import express, { Request, Response } from "express";
import { routes } from "./routes";

import "./database"

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(routes)

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({"health": true})
})

app.listen(PORT, () => { console.log(`Server running on port = ${PORT}`) })
