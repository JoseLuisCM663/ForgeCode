import { contacto } from "../controllers/buzon.controller.js";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/session.js";
import express from "express";

const buzonrouter = Router();

buzonrouter.get('/contacto',ensureAuthenticated, contacto);

export default buzonrouter;