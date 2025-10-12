require('dotenv').config(); 
const express = require('express');
const { sequelize } = require('./models/db');
const app = express();
const bodyParser = require("body-parser");
const Produtos = require("./models/Produtos");
const Comentarios = require('./models/Comentarios');
const Anexos = require('./models/Anexos');

//configurar BodyParser
app.use(bodyParser.urlencoded({extended: false}));
//conversão pra json
app.use(bodyParser.json());

app.post('/cadastro/anexo', function(req, res){
    Anexos.create({
        ticket_id: req.body.ticket_id,
        user_id: req.body.user_id,
        nome_arquivo: req.body.nome_arquivo,
        url_storage: req.body.url_storage,
        tipo_mime: req.body.tipo_mime
    }).then(function(){
        res.send("Anexos cadastrados com Sucessos")
    }).catch(function(erro){
        res.send("erro ao cadastrar anexo" + erro)
    })
});


app.post('/comentario', function(req, res){
    Comentarios.create({
        ticket_id: req.body.ticket_id,
        user_id: req.body.user_id,
        text: req.body.text
    }).then(function(){
        res.send('Comentario Enviado');
    }).catch(function(erro){
        res.send('Erro ao cadastrar Produto' + erro);
    })
})

app.post("/cadastro/produto", function(req, res){
    Produtos.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(function(){
        res.send("Cadastrado com Sucesso");
    }).catch(function(erro){
        res.send('Erro ao cadastrar o Produto' + erro);
    })
})

app.get("/", function(req, res){
    Produtos.findAll().then(function(produtos){
        res.send(produtos)
    }).catch(function(erro){
        res.send("erro ao buscar dados " + erro)
    })
})
// buscando atraves do parametro nome
app.get("/:nome", function(req, res){
    Produtos.findAll({where: {"nome": req.params.nome}}).then(function(produtos){
        res.send(produtos);
    }).catch(function(erro){
        res.send("Produto n existe na base de dados! " + erro)
    })
})

app.patch("/atualizar/:id", function(req, res){
    Produtos.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao},
        {where: {"id": req.params.id}}
    ).then(function(){
        res.send("Dados atualizados com sucesso")
    }).catch(function(erro){
        res.send("Erro ao atualizar dados" + erro)
    })
})
//importa as rotas
//const authRoutes = require('./routes/routes')

// Middlewares globais
//app.use(cors());//
//app.use(express.json()); // ESSENCIAL para ler o req.body do front-end

//conecta os arquivos de rota do express
// Todas as rotas em routes.js começarão com /api/auth
//app.use('./api/auth', authRoutes)
app.delete("/deletar/:id", function(req, res){
    Produtos.destroy({where: {"id": req.params.id}}).then(function(){
        res.send("Produto deletado com sucesso!");
    }).catch(function(erro){
        res.send("Erro ao Deletar produto " + erro)
    })
})

app.listen(8081, function(){
    console.log("Servidor rodando...")    
})