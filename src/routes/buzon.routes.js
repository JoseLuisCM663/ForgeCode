import { contacto } from "../controllers/buzon.controller.js";
import e, { Router } from "express";
import express from "express";

const buzonrouter = Router();

buzonrouter.get('/contacto', contacto);

export default buzonrouter;