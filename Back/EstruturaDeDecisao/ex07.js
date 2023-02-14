// Faça um Programa que leia três números e mostre o maior e o menor deles.

const n1 = 13
const n2 = 100
const n3 = 145


//MAIOR
if (n1 > n2 && n1 > n3){
    console.log(`O número maior é ${n1}`)
}else if  (n2 > n1 && n2 > n3){
    console.log(`O número maior é ${n2}`)
}else {
    console.log(`O número maior é ${n3}`)
}

//MENOR
if (n1 < n2 && n1 < n3){
    console.log(`O número menor é ${n1}`)
}else if  (n2 < n1 && n2 < n3){
    console.log(`O número menor é ${n2}`)
}else {
    console.log(`O número menor é ${n3}`)
}

