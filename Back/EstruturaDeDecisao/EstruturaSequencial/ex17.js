// Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. 
// Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00.
// Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// comprar apenas latas de 18 litros;
// comprar apenas galões de 3,6 litros;
// misturar latas e galões, de forma que o desperdício de tinta seja menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.

const metros = 100
const litros = metros / 6

if (metros % 108 && metros % 21.6 > 0) {
    var latas = metros / 108
    var latas = latas + 1
    const precoLitros = latas * 80
    var galao = metros//21.6
    var galao = galao + 1
    const precoGalao = galao * 25

    console.log(`Você vai precisar de: ${latas.toFixed(2)} latas de 18l e vai gastar ${precoLitros.toFixed(2)} reais`)
} else {
    const latas = metros / 108
    const precoLitros = latas * 80
    const galao = metros / 21.6
    const precoGalao = galao * 25

    console.log(`Você vai precisar de: ${latas.toFixed(2)} latas de 18l e vai gastar ${precoLitros.toFixed(2)} reais`)
    console.log(`Você vai precisar de: ${galao.toFixed(2)} latas de 3.6l e vai gastar ${precoGalao.toFixed(2)} reais`)

}