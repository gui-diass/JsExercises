// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

const n = require('prompt-sync')({sigint: true})
const i= require('prompt-sync')({sigint: true})
const sal = require('prompt-sync')({sigint: true})
const sex = require('prompt-sync')({sigint: true})
const ec = require('prompt-sync')({sigint: true})

let nome
nome = n ('Digite seu nome: ')

while (nome.length < 3 ){
    console.log('erro')
    nome = n ('Digite seu nome: ')

}


let idade 
idade = i ('Digite sua idade: ')

while (idade < 0 || idade > 150 ) {
    console.log('Digite uma idade válida: ')
    idade = i ('Digite sua idade: ')
}


let salario
salario = sal ('Digite seu salário: ')

while (salario < 0) {
    console.log('Digite um salário válido: ')
    salario = sal('Digite seu salário: ')
}

let sexo
sexo = sex('Digite seu sexo (F- Feminino, M -Masculino): ')

while (sexo != 'M' && sexo != 'F') {
    console.log('erro')
    sexo = sex('Digite seu sexo (F- Feminino, M -Masculino): ')
}


let estadoCivil
estadoCivil = ec('Estado civil (S- Solteiro, C- Casado, V- Víuvo, D- Divorciado)')

while (estadoCivil != 'S' && estadoCivil != 'C' && estadoCivil != 'V' && estadoCivil != 'D') {
    console.log('erro')
    estadoCivil = ec('Estado civil (S- Solteiro, C- Casado, V- Víuvo, D- Divorciado)')
}

