// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

const n = require('prompt-sync')({sigint: true})
const s = require('prompt-sync')({sigint: true})

let nome
nome = n('Digite seu nome de usuário: ')

let senha 
senha = s('Digite seu nome de usuário: ')

while (nome == senha) {
    console.log('Nome e senha iguais, tente novamente')
    nome = n('Digite seu nome de usuário: ')
    senha = n('Digite sua senha: ')

}