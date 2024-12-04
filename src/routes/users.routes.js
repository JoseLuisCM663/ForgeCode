import { Router } from "express";
import express from "express";
import { register, login } from "../controllers/users.controller.js";

const usersrouter = Router();

usersrouter.get('/register', register);
usersrouter.get('/login', login);

export default usersrouter;
