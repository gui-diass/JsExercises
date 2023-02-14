// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Álcool:
// até 20 litros, desconto de 3% por litro
// acima de 20 litros, desconto de 5% por litro
// Gasolina:
// até 20 litros, desconto de 4% por litro
// acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: 
// A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

const litros = 100
const combustível = 'A'
const precoLitroAlcool = 1.90
const precoLitroGasolina = 2.50

if (combustível == 'A') {
    if (litros > 0 && litros <= 20) {
        const precoSemDesconto = litros * precoLitroAlcool
        const precoComDesconto = (3/100) * precoSemDesconto
        const valorFinal = precoSemDesconto - precoComDesconto
        console.log(valorFinal)
    }
    else {
        const precoSemDesconto = litros * precoLitroAlcool
        const precoComDesconto = (5/100) * precoSemDesconto
        const valorFinal = precoSemDesconto - precoComDesconto
        console.log(valorFinal)

    }
}
else if (combustível == 'G') {
    if (litros > 0 && litros <= 20) {
        const precoSemDesconto = litros * precoLitroGasolina
        const precoComDesconto = (4/100) * precoSemDesconto
        const valorFinal = precoSemDesconto - precoComDesconto
        console.log(valorFinal)
    }
    else {
        const precoSemDesconto = litros * precoLitroGasolina
        const precoComDesconto = (6/100) * precoSemDesconto
        const valorFinal = precoSemDesconto - precoComDesconto
        console.log(valorFinal)
    }
}
