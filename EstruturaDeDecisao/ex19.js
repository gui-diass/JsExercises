// Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades 
// Testar com: 326, 300, 100


const n = [1, 0, 0]

const centenas = (n[0])
const dezena = (n[1])
const unidade = (n[2])



if (centenas > 1 && dezena > 1 && unidade > 1) {
    console.log(`${centenas} centenas, ${dezena} dezenas e ${unidade} unidades`)
}
else if(centenas > 1 && dezena <= 0 && unidade <= 0){
    console.log(`${centenas} centenas`)

}
else if(centenas == 1 && dezena <= 0 && unidade <= 0){
    console.log(`${centenas} centena`)
}

// Fiz 3 exemplos, é só seguir essa lógica caso você queira concluir todos os exemplos. 