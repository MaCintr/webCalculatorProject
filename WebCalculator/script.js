var resultado = document.getElementById('resultado');

var operadores = ['+', '-', '*', '/'];

function adicionar(num) {
    var ultimoChar = resultado.value.charAt(resultado.value.length - 1);
    if (operadores.includes(num) && operadores.includes(ultimoChar)) {
        return;
    }
    if (resultado.value.length >= 21) {
        return;
    }
    resultado.value += num;
}



function calcular() {
    try {
        resultado.value = eval(resultado.value);
    } catch {
        resultado.value = "Erro";
    }
}

function limpar() {
    resultado.value = "";
}