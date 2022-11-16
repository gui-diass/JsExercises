// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

const letra = 'e'.toUpperCase()

if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
    console.log(`[${letra}] é vogal`)
} else{
    console.log(`[${letra}] é consoante`)
}