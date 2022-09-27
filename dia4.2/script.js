// Exercicios sobre if / else variaveis em let

/* 1. Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.

Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:

"x é a pessoa mais jovem e possui y anos de idade" */

let marina = 20;
let silvia = 30;
let iza = 10;

/* if(marina < silvia && marina < iza){
  console.log( "Marina é a pessoa mais jovem e possui " + marina + " anos de idade");
}else if(silvia < marina && silvia < iza){
  console.log( "Silvia é a pessoa mais jovem e possui " + silvia + " anos de idade");
}else {
  console.log( "Iza é a pessoa mais jovem e possui " + iza + " anos de idade");
} */

/* 2. Taxa Metabólica Basal
Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo.

Ele recebe os seguintes dados:

age: número maior que 0
sex: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0
A fórmula para homens:

(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:

(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:

"A taxa metabólica basal é: x Kcal" */

let age = 22;
let sex = 'F';
let weight = 90;
let height = 190;
let formula;

if(sex === 'M'){
  formula = (height * 6.25)+(weight * 9.99)-(age * 4.92) + 5
}else {
  formula = (height * 6.25)+(weight * 9.99)-(age * 4.92) - 161
}

//console.log("A taxa metabólica basal é: " + formula +  " Kcal");

/* 3. Lanchonete da Trybe
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.

Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.

Tabela:

"1 - Trybe Lanche Feliz"

"2 - McTrybe"

"3 - TrybeWooper"

"4 - X-Trybe"

"5 - Triplo Trybe com JS"

Caso a pessoa escolha uma opção inexistente, imprima no terminal:

"Ainda não possuímos esta opção :(" */

let opcaoLanche1 = "Trybe Lanche Feliz";
//let opcaoLanche2 = "McTrybe";
//let opcaoLanche3 = "TrybeWooper";
//let opcaoLanche4 = "X-Trybe";
//let opcaoLanche5 = "Triplo Trybe com JS";
//let opcaoLanche = '';

if(opcaoLanche1){
  console.log("Trybe Lanche Feliz");
}else if(opcaoLanche2){
  console.log("McTrybe");
}else if(opcaoLanche3){
  console.log("TrybeWooper");
}else if(opcaoLanche4){
  console.log("X-Trybe");
}else if(opcaoLanche4){
  console.log("Triplo Trybe com JS");
}else {
  console.log("Ainda não possuímos esta opção :(");
}