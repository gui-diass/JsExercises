// Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

const n = 1

const determinaNumero = n % 2

if (determinaNumero == 0) {
    console.log(`${n} é par`)
}
else {
    console.log(`${n} é ímpar`)
}