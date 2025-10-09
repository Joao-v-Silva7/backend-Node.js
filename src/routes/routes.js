// define o POST que o front-end usará para fazer login
const express = require("express");
const router = express.Router();
const AuthController = require('../controllers/AuthController')

// Rota para o login
router.post("./Login", AuthController.login);
// Rota para esqueci minha senha
router.post("./forgot-password", AuthController.forgotPassword);
module.exports = router