// Faça um programa que peça um número correspondente a um determinado ano e em seguida
// informe se este ano é ou não bissexto


const ano = 1888

const calculo = ano % 4

if (calculo == 0 ){
    console.log('Ano bissexto')
} else{
    console.log('Não é bissexto')
}