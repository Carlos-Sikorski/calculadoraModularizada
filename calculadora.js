const soma = require('./soma.js');

const subtracao = require('./subtracao.js');

const divisao = require('./divisao.js');

const multiplicacao = require('./multiplicacao.js');

const porcentagem = require('./porcentagem.js');

const {validarNumero, validarOperacao} = require('./validacoes.js')


const prompt = require('prompt-sync')();

function entradaUsuario(questao) {

    const mensagem = prompt(questao)
    return mensagem;

};

console.log("**SEJA BEM VINDO A CALCULADORA LIONS-DEV**")

function sistemOn() {

    const numero1 = validarNumero(entradaUsuario("Digite o primeiro número: "))

    if (numero1 === false) {

        console.log("Vocẽ não digitou um número!")
        return sistemOn()


    }

    const numero2 = validarNumero(entradaUsuario("Digite o segundo número: "))

    if (numero2 === false) {

        console.log("Vocẽ não digitou um número!")
        return sistemOn()

    }

    const operacao1 = validarOperacao(entradaUsuario("Agora, digite a  operação[+][-][/][*][%] R:"))

    switch (operacao1) {

        case '+': console.log(`O resultado da operação ${numero1} ${operacao1} ${numero2} é ${soma(numero1, numero2)}.`);
            return;

        case '-': console.log(`O resultado da operação ${numero1} ${operacao1} ${numero2} é ${subtracao(numero1, numero2)}.`);
            return;

        case '*': console.log(`O resultado da operação ${numero1} ${operacao1} ${numero2} é ${multiplicacao(numero1, numero2)}.`);
            return;

        case '/': console.log(`O resultado da operação ${numero1} ${operacao1} ${numero2} é ${divisao(numero1, numero2)}.`);
            return;

        case '%': console.log(`O resultado da porcentagem ${numero1} de ${numero2} é ${porcentagem(numero1, numero2)}%.`);
            return;

        default: console.log("Vocẽ não digitou uma opção válida! Tente novamente!")
        sistemOn()


    }
}
sistemOn()