// Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
// A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
// A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
// A mensagem "Aprovado com Distinção", se a média for igual a 10.

const n1 = 10
const n2 = 10
const n3 = 9

const media = (n1 + n2 + n3) / 3

if (media >= 7 && media <= 9.9){
    console.log('APROVADO')
    console.log(`Sua média final foi ${media.toFixed(2)}`)
}
else if (media == 10){
    console.log('APROVADO COM DISTINÇÃO')
    console.log(`Sua média final foi ${media.toFixed(2)}`)    
}
else{
    console.log('REPROVADO')
    console.log(`Sua média final foi ${media.toFixed(2)}`)
}