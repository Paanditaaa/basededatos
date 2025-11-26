import type { Request, Response } from "express";
import { db } from "../config/db.ts";

export const getUsers = async (req: Request, res: Response) => {
    const [rows] = await db.query("SELECT * FROM datos_empleados");
    res.json(rows);
};