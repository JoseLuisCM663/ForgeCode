import { Router } from "express";
import express from "express";
import {home, desarrolladores, nosotros, industrias, servicios} from "../controllers/home.controller.js";

const router = Router();

router.get('/', home);
router.get('/desarrolladores', desarrolladores);
router.get('/nosotros', nosotros);
router.get('/industrias', industrias);
router.get('/servicios', servicios);

export default router;

