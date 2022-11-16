// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

const sexo = 'd'.toUpperCase()

if (sexo == 'M') {
    console.log(`Seu sexo é ${sexo} = Masculino`)
}else if (sexo == 'F'){
    console.log(`Seu sexo é ${sexo} = Feminino`)
}else{
    console.log('Sexo inválido')
}