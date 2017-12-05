// Exemplo 01 - if
var num = 1;
if(num === 1){
    console.log("num é iqual a 1");
}

// Ex. 02 - if-else
var num = 0;
if(num === 1){
    console.log("num é iqual a 1");
}else{
    console.log("num não é igual a 1, o valor é " + num);
}

// Ex 03 - if - else - if - else ...
var month = 5;
if(month === 1 ){
    console.log("Janeiro");
}else if(month === 2) {
    console.log("Fevereiro");
}else if(month === 3){
    console.log("Março");
}else{
    console.log("Não é um mes do ano \"permitido\" ");
}

// Ex 04 - switch

var month = 5;
switch(month) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Não é um mes do ano \"permitido\" ");
}

// Ex 05 - ternary operator - if..else
if (num === 1){
    num--;
} else {
    num++;
}
// é igual a:
(num === 1) ? num-- : num++;
