import { Router } from "express";
import express from "express";
import register from "../controllers/users.controller.js";

const usersrouter = Router();

usersrouter.get('/register', register);

export default usersrouter;
