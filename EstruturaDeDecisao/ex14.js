// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

// Média de Aproveitamento  Conceito
// Entre 9.0 e 10.0        A
// Entre 7.5 e 9.0         B
// Entre 6.0 e 7.5         C
// Entre 4.0 e 6.0         D
// Entre 4.0 e zero        E

const nota1 = 9
const nota2 = 8.9

const media = (nota1 + nota2) / 2

if (media >= 9 && media <= 10) {
    console.log('A')
}
else if (media >= 7.5 && media <= 9) {
    console.log('B')
}
else if (media >= 6 && media <= 7.5) {
    console.log('C')
}
else if (media >= 4 && media <= 6) {
    console.log('D')
}
else if (media >= 0 && media <= 4) {
    console.log('E')
}