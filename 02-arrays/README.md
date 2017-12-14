# Javascript estrutura de dados e algoritmos

Códigos do capítulo
  
## 2. Arrays

---

### 01 - introdução
```javascript
var averageTempJan = 31.9;
var averageTempFeb = 35.3;
var averageTempMar = 42.4;
var averageTempApr = 52;
var averageTempMay = 60.8;

var averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42.4;
averageTemp[3] = 52;
averageTemp[4] = 60.8;
```

---

### 02 - Creating And Initialing Arrays

```html
<script type="text/javascript" src="02-CreatingAndInitialingArrays.js"></script>
```

```javascript
var diasDaSEmana = [];
var diasDaSEmana = ['Segunda', 'Terça', 'Quarta'];

console.log(diasDaSEmana.length);

var diasDaSEmana = new Array();
var diasDaSEmana = new Array(7);
var diasDaSEmana = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

for(var i = 0; i < diasDaSEmana.length; i++){
    console.log(diasDaSEmana[i]);
}

console.log(diasDaSEmana);


//fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (var i = 3 ; i < 20 ; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (var i = 1 ; i < fibonacci.length ; i++){
    console.log(fibonacci[i]);
}
console.log(fibonacci);

```

---

### 03 - Adding Removing Elements

```html
<script type="text/javascript" src="03-AddingRemovingElements.js"></script>
```

```javascript
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
```
---

### 04 - Two Dimensional MultiDimensional

```html
<script type="text/javascript" src="04-TwoDimensionalMultiDimensional.js"></script>
```

```javascript
var averageTempDay1 = [72, 75, 79, 79, 81, 81];
var averageTempDay2 = [81, 79, 75, 75, 73, 72];

var averageTemp = [];
//same as
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];

function imprimirMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            console.log(myMatrix[i][j]);
        }
    }
}

/*imprimirMatrix(averageTemp);*/
console.log(averageTemp);
/*
(2) [Array(6), Array(6)]
0:(6) [72, 75, 79, 79, 81, 81]
1:(6) [81, 79, 75, 75, 73, 72]
length   :    2
*/

//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

console.log(averageTemp);
imprimirMatrix(averageTemp);

//** Multidimensional Matrix

var matrix3x3x3 = [];
for (var i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (var j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (var z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.log(matrix3x3x3);
/*
  (3) [Array(3), Array(3), Array(3)]
0:(3) [Array(3), Array(3), Array(3)]
1:(3) [Array(3), Array(3), Array(3)]
2:(3) [Array(3), Array(3), Array(3)]
length:3
*/

for (var i=0; i<matrix3x3x3.length; i++){
    for (var j=0; j<matrix3x3x3[i].length; j++){
        for (var z=0; z<matrix3x3x3[i][j].length; z++){
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}
console.log(matrix3x3x3);

```

---

