var num =1 ; // boa prática
num = 3 ;

var price = 1.5;
var name = 'Packt';
var trueValue = true;
var nullVar = null;
var und;

console.log("num: "+ num);
console.log("name: "+ name);
console.log("trueValue: "+ trueValue);
console.log("price: "+ price);
console.log("nullVar: "+ nullVar);
console.log("und: "+ und);

// Escopo das variáveis

var myVariable = 'GLOBAL';
myOutherVariable = 'global';

function myFunction() {
    var myVariable = 'LOCAL';
    return myVariable;
}

function myOutherFunction() {
    myOutherVariable = 'local'
    return myOutherVariable;
}

console.log(myVariable);
console.log(myFunction());

console.log(myOutherVariable);
console.log(myOutherFunction());
console.log(myOutherVariable);


