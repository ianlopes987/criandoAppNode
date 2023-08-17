const express = require("express"); // estou importando o modulo express com todas as suas funções

const app = express(); //estou inicializando o express
app.use(express.json());


app.get("/", (request, response) => {
    response.send("Hello, world!");
}); /* criando uma rota "/" GET que retorna ao usuario "hello world" */

app.get("/message/:id/:user", (request, response) => {
    const {id, user} = request.params;
    response.send(` ROUTE PARAMS Mensagem ID: ${id}. User: ${user}`);
}); /* estou usando a estrategia de captar dados de uma requisicao chamada de ROUTE PARAMS que acessa os dados 
atraves da rota que foi digitada pelo usuario, para captar esses dados é necessario que na rota indiquemos o nome
do parametro seguido de dois pontos : conforme acima no exemplo*/ 

app.get("/message/query", (request, response) => {
    const {id, user} = request.query;
    response.send(` QUERY PARAMS Mensagem ID: ${id}. User: ${user}`);
}); /* estou utilizadno aqui o query params que diferente do route paramns ele nao obriga a criar uma rota
especifica capturando os parametros, o usuario pode digitar ou nao os parametros na rota e na rota
os parametros devem ser digitados seguido de ? valor = 1 & chave = 2 o "&" esta sendo usado pois tem dois parametros */

app.post("/users", (request, response) => {
    response.send(`Voce chamou o POST`);
}); /* usando agora o metodo post para fazer requisicao, importante entender que o navegador
nao faz requisicoes via post, por esse motivo as requisicoes via post iremos testar no insominia*/

app.post("/users/body", (request, response) => {
    const {name,email,password} = request.body;
    response.json({name,email,password});
}); /* criando uma rota com post que captura os dados do body informado na requisicao, 
importante lembrar que para que isso seja possivel, tem que informar o body na requisicao e do
nosso lado aqui no servidor deve ser chamado o metodo app.use(express.json()); para que funcione*/

const PORT = 3333; // estou configurando uma porta para o express rodar

app.listen(PORT,() => console.log(`Server in running on Port ${PORT}`)); // estou escutando na porta que foi definida