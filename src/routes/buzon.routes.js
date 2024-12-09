import { contacto , mensaje, buzonAll} from "../controllers/buzon.controller.js";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/session.js";
import express from "express";

const buzonrouter = Router();

buzonrouter.get('/contacto',ensureAuthenticated, contacto);
buzonrouter.post('/mensaje', mensaje);
buzonrouter.get('/buzonAll', buzonAll); 

export default buzonrouter;