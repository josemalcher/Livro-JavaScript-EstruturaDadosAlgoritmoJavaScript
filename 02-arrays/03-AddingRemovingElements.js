function imprimirArray(myArray) {
    for(var i = 0 ; i < myArray.length ; i++){
        console.log(myArray[i]);
    }
}

var numeros = [0,1,2,3,4,5,6,7,8,9];

/*imprimirArray(numeros);*/

// ADICIONANDO NOVO ELEMNTO NO ARRAY
numeros[numeros.length] = 10;
/*imprimirArray(numeros);*/

numeros.push(11);
numeros.push(12,13);
/*imprimirArray(numeros);*/


//INSERINDO NA PRIMEIRA POSIÇÃO
for(var i = numeros.length ; i >= 0 ; i--){ //modo manual
    numeros[i] = numeros[i - 1];
}
numeros[0] = -1;
/*imprimirArray(numeros);*/

//USANDO MÉTODOS
numeros.unshift(-2);
numeros.unshift(-4, -3);
/*imprimirArray(numeros);*/

//REMOVENDO ELEMENTOS
for (var i = 0 ; i < numeros.length; i++){ // modo manual
    numeros[i] = numeros[i+1];
}
/*imprimirArray(numeros);*/ // sobra uma posição 'indefinida'...

numeros.pop(); //melhor modo!
numeros.pop();
/*imprimirArray(numeros);*/

// REMOVE DO INICIO
numeros.shift();
numeros.shift();
numeros.shift();
numeros.shift();
numeros.shift();
/*imprimirArray(numeros);*/

//**** Removing and Adding elements from the middle of the array or specific position
//splice method - parameter (index, howManyPositionsToBeRemoved, item1...itemX)
var numeros = [0,1,2,3,4,5,6,7,8,9,10];
numeros.splice(5,3);
console.log(numeros);  // (8) [0, 1, 2, 3, 4, 8, 9, 10]

var numeros = [0,1,2,3,4,5,6,7,8,9,10];
numeros.splice(5,0,2,3,4);
console.log(numeros);// (14) [0, 1, 2, 3, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var numeros = [0,1,2,3,4,5,6,7,8,9,10];
numeros.splice(5,3,2,3,4);
console.log(numeros); //(11) [0, 1, 2, 3, 4, 2, 3, 4, 8, 9, 10]