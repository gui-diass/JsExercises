// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
// Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. 
// Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

const tamanhoDaArea = 60
const coberturaDaTinta = tamanhoDaArea / 3 

if(tamanhoDaArea % 54 == 0){
   var latas = tamanhoDaArea / 54
}else{
    var latas = (tamanhoDaArea / 54) + 1
}

const precoTintas = latas * 80

console.log(`${latas} latas`)
console.log(`R$${precoTintas} `)