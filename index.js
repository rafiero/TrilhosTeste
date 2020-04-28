const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const perguntaModel = require("./database/Pergunta");
//database
connection
    .authenticate()
    .then(()=>{
        console.log("Conexao feita com sucesso ao Banco de dados!");
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })

//estou dizendo p o express usar ejs como engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//vai decodificar os dados enviados para que possa ser ultizados em uma estrutura javaScript
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao
    res.send("Formulário recebido! Título " + titulo + " Descricao " + descricao);
});

app.listen(4000, ()=>{
    console.log("App rodando!");
});