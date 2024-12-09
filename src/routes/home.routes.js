import { Router } from "express";
import express from "express";
import {home, desarrolladores, nosotros, industrias} from "../controllers/home.controller.js";

const router = Router();

router.get('/', home);
router.get('/desarrolladores', desarrolladores);
router.get('/nosotros', nosotros);
router.get('/industrias', industrias);

export default router;

