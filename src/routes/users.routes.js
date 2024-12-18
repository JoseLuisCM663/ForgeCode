import { Router } from "express";
import express from "express";
import { register, login,registerUser, loginUser,logout } from "../controllers/users.controller.js";

const usersrouter = Router();

usersrouter.get('/register', register);
usersrouter.get('/login', login);
usersrouter.post('/register', registerUser);
usersrouter.post('/login', loginUser);
usersrouter.post('/logout', logout);

export default usersrouter;
