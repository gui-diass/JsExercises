// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".


console.log('TELEFONOU PARA A VITIMA?  1/Sim ou 0/Não:' )
const telefonou = 1

console.log('ESTEVE NO LOCAL DO CRIME?  1/Sim ou 0/Não:')
const local = 0

console.log('MORA PERTO DA VITIMA?  1/Sim ou 0/Não:')
const moraPerto = 0

console.log('DEVIA PARA A VITIMA?  1/Sim ou 0/Não:')
const deverParaVitima = 0

console.log('JÁ TRABALHOU COM A VITIMA?  1/Sim ou 0/Não:')
const trabalhaComVitima = 0

const soma = telefonou + local + moraPerto + deverParaVitima + trabalhaComVitima

if (soma < 2) {
    console.log('inocente')
}
else if (soma == 2){
    console.log('suspeita')
}
else if (soma == 3 || soma == 4) {
    console.log('cúmplice')
}
else{
    console.log('assassino')
}