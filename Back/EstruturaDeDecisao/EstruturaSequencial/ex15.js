// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. 
// Sabendo-se que são descontados 11% para o Imposto de Renda
// 8% para o INSS 
// e 5% para o sindicato, faça um programa que nos dê:
// salário bruto.
// quanto pagou ao INSS.
// quanto pagou ao sindicato.
// o salário líquido.
// calcule os descontos e o salário líquido, conforme a tabela abaixo

const salarioHora = 10
const qtdHorasMes = 100

const salarioBruto = salarioHora * qtdHorasMes

const impostoDeRenda = ((11 / 100) * salarioBruto)
const inss = ((8 / 100) * salarioBruto)
const sindicato = ((5 / 100) * salarioBruto)

const descontos = impostoDeRenda + inss + sindicato

const salariLiquido = salarioBruto - descontos


console.log("=".repeat(20))

console.log(`SALÁRIO BRUTO\nR$${salarioBruto}`)

console.log("=".repeat(20))

console.log(`DESCONTOS`)

console.log("=".repeat(20))

console.log(`INSS: R$${inss}\nSINDICATO: R$${sindicato}\nIMPOSTO DE RENDA: R$${impostoDeRenda}`)

console.log("=".repeat(20))

console.log(`SALÁRIO LIQUIDO\nR$${salariLiquido}`)

