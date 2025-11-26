import { Router } from "express";
import { getUsers } from "../controllers/userControllers.ts";

export const router = Router();

router.get("/usuarios", getUsers)
