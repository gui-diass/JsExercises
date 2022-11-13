// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.

const numInteiro1 = 10
const numInteiro2 = 13
const numReal = 9.2

const dobro = (numInteiro1 * numInteiro1) * (numInteiro2 / 2)
const triplo = (numInteiro1 * 3) + numReal
const elevadoAoCubo = numReal ** 3

console.log(`O produto do dobro do primeiro com metade do segundo = ${dobro}`)
console.log(`A soma do triplo do primeiro com o terceiro = ${triplo}`)
console.log(`O terceiro elevado ao cubo = ${elevadoAoCubo.toFixed(2)}`)