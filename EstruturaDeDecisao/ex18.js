// Faça um Programa que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.

const dia = 10
const mes = 12
const ano = 10

if (dia > 0 && dia <= 31 && mes >= 1 && mes <=12 && ano >= 0 ) {
    console.log('Correto')
    console.log(`Sua data está correta: ${dia}/${mes}/${ano}`)
}else{
    console.log('Data inválida :(')
}
