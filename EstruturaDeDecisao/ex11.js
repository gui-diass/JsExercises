// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o percentual de aumento aplicado;
// o valor do aumento;
// o novo salário, após o aumento.


const salario = 1502

if (salario <= 280) {
    var salarioAntigo = salario
    var percentualAumentado = '20%'
    var valorAumento = ((20 / 100) * salario)
    var novoSalario = valorAumento + salario

    console.log(`Salário antes do reajuste: R$ ${salario}`)
    console.log(`Percentual aumentado: R$ ${percentualAumentado}`)
    console.log(`Valor de aumento: R$ ${valorAumento.toFixed(2)}`)
    console.log(`Salário após o aumento: R$ ${novoSalario}`)
} else if (salario > 280 && salario <= 700) {
    var salarioAntigo = salario
    var percentualAumentado = '15%'
    var valorAumento = ((15 / 100) * salario)
    var novoSalario = valorAumento + salario

    console.log(`Salário antes do reajuste: R$ ${salario}`)
    console.log(`Percentual aumentado: R$ ${percentualAumentado}`)
    console.log(`Valor de aumento: R$ ${valorAumento.toFixed(2)}`)
    console.log(`Salário após o aumento: R$ ${novoSalario}`)

} else if (salario > 700 && salario <= 1500) {
    var salarioAntigo = salario
    var percentualAumentado = '10%'
    var valorAumento = ((10 / 100) * salario)
    var novoSalario = valorAumento + salario

    console.log(`Salário antes do reajuste: R$ ${salario}`)
    console.log(`Percentual aumentado: R$ ${percentualAumentado}`)
    console.log(`Valor de aumento: R$ ${valorAumento.toFixed(2)}`)
    console.log(`Salário após o aumento: R$ ${novoSalario}`)

}else{
    var salarioAntigo = salario
    var percentualAumentado = '5%'
    var valorAumento = ((5 / 100) * salario) 
    var novoSalario = valorAumento + salario

    console.log(`Salário antes do reajuste: R$ ${salario}`)
    console.log(`Percentual aumentado: R$ ${percentualAumentado}`)
    console.log(`Valor de aumento: R$ ${valorAumento.toFixed(2)}`)
    console.log(`Salário após o aumento: R$ ${novoSalario}`)
}

