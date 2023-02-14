// Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
// Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
// Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
// Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
// Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;

const a = 3
const b = 10
const c = 3

const delta = b * b - (4 * a * c)

if (a == 0) {
    console.log('A equação não do segundo grau')
}
else if (delta < 0) {
    console.log('A equação não possui raizes reais')
}
else if (delta == 0){
    console.log('A equação possui apenas uma raíz real')
}
else{
    console.log('A equação possui duas raízes reais')
}


