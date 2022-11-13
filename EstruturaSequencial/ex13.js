// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7

const altura = 1.80

const pesoIdealHomem = (72.7 * altura) - 58
const pesoIdealMulher = (62.1 * altura) - 44.7

console.log(`HOMEM\nSua altura é ${altura.toFixed(2)}\nPeso ideal ${pesoIdealHomem.toFixed(2)}kg`)
console.log("=".repeat(20))
console.log(`MULHER\nSua altura é ${altura.toFixed(2)}\nPeso ideal ${pesoIdealMulher.toFixed(2)}kg`)

