const express = require('express')
const cors = require('cors')
const app = express();

//importa as rotas
const authRoutes = require('./routes/routes')

// Middlewares globais
app.use(cors());
app.use(express.json()); // ESSENCIAL para ler o req.body do front-end

//conecta os arquivos de rota do express
// Todas as rotas em routes.js começarão com /api/auth
app.use('./api/auth', authRoutes)

app.listen(8081, function(){
    console.log("Servidor rodando...")    
})