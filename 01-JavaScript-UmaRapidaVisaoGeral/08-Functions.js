function sayHello() {
    console.log("Olá");
}
sayHello();

// funções com parametros
function output(text) {
    console.log(text);
}
output("Passagem de parâmetros na função");
output('Primeira Frase', ' Outro texto')
output();

// Função com retorno
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1,2);
output(result);