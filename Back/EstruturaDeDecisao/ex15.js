// Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;


const lado1 = 3
const lado2 = 1
const lado3 = 2

if (lado1 > (lado2 + lado3) || lado2 > (lado1 + lado3) || lado3 > (lado2 + lado1)) {
    console.log("Não é um triângulo")
}
else if (lado1 == lado2 && lado1 == lado3) {
    console.log("Triângulo Equilátero")
}
else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log('Triângulo Isósceles')
}
else {
    console.log('Triângulo Escaleno')
}































