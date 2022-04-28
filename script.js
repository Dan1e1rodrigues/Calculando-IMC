//7. Faça um programa solicita os valores de peso e altura de uma pessoa, calcula e exibe seu IMC (Índice de Massa Corporal).

document.write("Calculando o IMC");

let peso = parseFloat(prompt("Coloque quanto você pesa "));
let altura = parseFloat(prompt("Coloque a sua altura "));

conta = peso/(altura * altura);

document.write("<br>Seu peso é " + peso + "");
document.write("<br>Sua altura é " + altura + "");
document.write("<br>Seu IMC e de " + conta + "");



