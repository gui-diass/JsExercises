// Faça um Programa que leia três números e mostre o maior deles.

const n1 = 10
const n2 = 100
const n3 = 1000

if (n1 > n2 && n1 > n3){
    console.log(`O número maior é ${n1}`)
}else if  (n2 > n1 && n2 > n3){
    console.log(`O número maior é ${n2}`)
}else {
    console.log(`O número maior é ${n3}`)

}