// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

const produto1 = 500
const produto2 = 540
const produto3 = 250

if (produto1 < produto2 && produto1 < produto3) {
    console.log(`O produto 1 é mais barato, custando R$ ${produto1}`)
} else if  (produto2 < produto1 && produto2 < produto3) {
    console.log(`O produto 2 é mais barato, custando R$ ${produto2}`)
}else {
    console.log(`O produto 3 é mais barato, custando R$ ${produto3}`)

}



