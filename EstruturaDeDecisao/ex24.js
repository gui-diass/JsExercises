// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// par ou ímpar;
// positivo ou negativo;
// inteiro ou decimal.


const n1 = 5
const n2 = -1

console.log('SELECIONE A OPÇÃO QUE VOCÊ DESEJA!')
console.log('1-> PAR OU ÍMPAR')
console.log('2 -> POSITIVO OU NEGATIVO')
console.log('3-> INTEIRO OU DECIMAL')

const opcao = 1

if (opcao == 1){
    if (n1 % 2 == 0) {
        console.log(`${n1} é par`)
    }
    else if (n1 % 2 == 1){
        console.log(`${n1} é ímpar`)
    }
    if (n2 % 2 == 0) {
        console.log(`${n2} é par`)
    }
    else if (n2 % 2 == 1){
        console.log(`${n2} é ímpar`)
    }   
}

else if (opcao == 2){
    if (n1 >= 0 ){
        console.log(`${n1} é positivo`)
    }
    else if (n1 < 0) {
        console.log(`${n1} é negativo`)
    }
    if (n2 >= 0 ){
        console.log(`${n2} é positivo`)
    }
    else if (n2 < 0) {
        console.log(`${n2} é negativo`)
    }
}

else if (opcao == 3) {
    if (n1 % 1 == 0) {
        console.log(`${n1} é inteiro`)
    }
    else if (n1 % 1 == 1) {
        console.log(`${n1} é decimal`)
    }
    if (n2 % 1 == 0) {
        console.log(`${n2} é inteiro`)
    }
    else if (n2 % 1 == 1) {
        console.log(`${n2} é decimal`)
    }

}

else {
    console.log('Número inválido')
}

