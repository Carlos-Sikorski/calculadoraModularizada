function validarNumero(input) {

    const numeroVld = Number(input)

    if (!isNaN(numeroVld)) {

        return numeroVld;

    }

    else {

        return false;
    }

};


function validarOperacao(input_operacao) {

    const operacaoVld = (input_operacao)

    if (operacaoVld === "+" || operacaoVld === "-" || operacaoVld === "/" || operacaoVld === "*" || operacaoVld === "%") {

        return operacaoVld;

    }

    else {

        return false;
    }

};

module.exports = {
    validarNumero,
    validarOperacao
}