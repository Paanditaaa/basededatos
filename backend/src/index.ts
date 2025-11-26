import express, { type Request, type Response } from "express";
import cors from "cors";
import { router } from "./routes/router.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
    res.send("Servidor funcionando");
});

app.listen(5173, () =>
    console.log("Servidor listo en http://localhost:3001")
);
