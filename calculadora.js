const prompt = require('prompt-sync')();

function entradaUsuario(questao) {

    const mensagem = prompt(questao)
    return mensagem;

};

const soma = require('./soma.js');
const subtracao = require('./subtracao.js');
const divisao = require('./divisao.js');
const multiplicacao = require('./multiplicacao.js');
const porcentagem = require('./porcentagem.js').;