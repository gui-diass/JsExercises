// Uma fruteira está vendendo frutas com a seguinte tabela de preços:
//                       Até 5 Kg           Acima de 5 Kg
// Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
// Maçã            R$ 1,80 por Kg          R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total.
//  Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.



const qtdMorango = 4
const qtdMaca = 5

if (qtdMorango <= 5 && qtdMaca <=5) {
    const somaKg = qtdMorango + qtdMaca
    const valorFinalMorango = qtdMorango * 2.50
    const valorFinalMaca = qtdMaca * 1.80
    const somaPreco = valorFinalMaca + valorFinalMorango

    console.log(somaPreco)
    
    if (somaKg > 8) {
        const desconto = (10/ 100) * somaKg
        const descontoFinal = somaKg - desconto
        console.log(descontoFinal)
    }
    else if (somaPreco > 25.00) {
        const desconto = (10 / 100) * somaPreco
        const descontoFinal = somaPreco - desconto
        console.log(descontoFinal)
    }
}
else if (qtdMorango > 5 && qtdMaca > 5) {
    const somaKg = qtdMorango + qtdMaca
    const valorFinalMorango = qtdMorango * 2.20
    const valorFinalMaca = qtdMaca * 1.50
    const somaPreco = valorFinalMaca + valorFinalMorango
    console.log(somaPreco)
    
    if (somaKg > 8) {
        const desconto = (10/ 100) * somaKg
        const descontoFinal = somaKg - desconto
        console.log(descontoFinal)
    }
    else if (somaPreco > 25.00) {
        const desconto = (10 / 100) * somaPreco
        const descontoFinal = somaPreco - desconto
        console.log(descontoFinal)
    }
}