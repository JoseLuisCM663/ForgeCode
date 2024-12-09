import { Router } from "express";
import express from "express";
import {home, desarrolladores, nosotros} from "../controllers/home.controller.js";

const router = Router();

router.get('/', home);
router.get('/desarrolladores', desarrolladores);
router.get('/nosotros', nosotros);

export default router;

