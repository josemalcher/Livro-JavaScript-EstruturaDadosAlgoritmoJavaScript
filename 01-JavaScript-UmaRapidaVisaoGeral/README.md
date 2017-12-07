# Javascript estrutura de dados e algoritmos

Códigos do capítulo
  
## 1. JavaScript - uma rápida visão geral

### Básico sobre o JS
  
  01 - Helloworld (Base para outros codigos JS)
  
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>01-HelloWorld.html</title>
</head>
<body>
    <script type="text/javascript" src="01-HelloWorld.js"></script>
    <script type="text/javascript">
        /*alert('Hello, World!');
        console.log('Hello, World!');*/
    </script>
</body>
</html>
```

```javascript
function output(t) {
    document.write('<p>' + t + '</p>');
    return;
}

alert('Hello, World!');
console.log('Hello, World!');
output('Hello, World!');
```

---
### 02 - Variáveis e Escopo das variáveis 
```html
<script type="text/javascript" src="02-variaveis.js"></script>
```

```javascript
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



```

---

### 03 - Operadores
```html
<script type="text/javascript" src="03-Operadores.js"></script>
```
```javascript
/* Arithmetic operators */
var num = 0;
console.log('num value is ' + num);

num = num + 2;
console.log('New num value is ' + num);

num = num * 3;
console.log('New num value is ' + num);

num = num / 2;
console.log('New num value is ' + num);

num++;
num--;

console.log('New num value is ' + num);
console.log('num mod 2 value is ' + (num % 2));

console.log('----------------------------------');

/* Assignment operators */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('New num value is ' + num);

console.log('----------------------------------');
/* Assignment operators */
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

console.log('----------------------------------');
/* Logical operators */
console.log('true && false : ' + (true && false));
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

console.log('----------------------------------');
/* Bitwise operators */
console.log('5 & 1:', (5 & 1)); //same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', (5 | 1)); //same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', (~5)); //same as ~0101 (result 1010 / 10)
console.log('5 ^ 1:', (5 ^ 1)); //same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', (5 << 1)); //same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', (5 >> 1)); //same as 0101 >> 1 (result 0010 / 2)

console.log('----------------------------------');
/* typeOf */
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});

console.log('----------------------------------');
/* delete */
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); //Object {name: "John"}
```

---

### 04 - Truthy Falsy

```html
<script type="text/javascript" src="04-TruthyFalsy.js"></script>
```
```javascript
function testetruthy(val) {
    return val ? console.log('TRYTHY') : console.log('falsy');
}

testetruthy(true); // true
testetruthy(false); // false
testetruthy(new Boolean(false)); // true (objetos sempre são TRUE)
console.log('----------------------');

testetruthy(''); // false
testetruthy('José'); // true
testetruthy(new String('')); // true
console.log('----------------------');

testetruthy(1); // true
testetruthy(-1); // true
testetruthy(NaN); // false
testetruthy(new Number(NaN)); //true
console.log('----------------------');

testetruthy({}); //true
console.log('----------------------')

var obj = {name: 'JoseMalcher'};
testetruthy(obj); //true
testetruthy(obj.name); // true
testetruthy(obj.age); // não existe
console.log('----------------------')

```

---

### 05 - Equals Operators

```html
<script type="text/javascript" src="05-EqualsOperators.js"></script>
```
```javascript
// Packt == true
console.log('packt' ? true : false); //true

console.log('packt' == true); // false
//1 - converts Boolean using toNumber
//'packt' == 1
//2 - converts String using toNumber
//NaN == 1
//outputs false

console.log('packt' == false); //false
//1 - converts Boolean using toNumber
//'packt' == 0
//2 - converts String using toNumber
//NaN == 0
//outputs false

console.log([0] == true); //false
//1 - converts Boolean using toNumber
//[0] == 1
//2 - converts Object using toPrimitive
//2.1 - [0].valueOf() is not primitive
//2.2 - [0].toString is 0
//0 == 1
//outputs false

console.log('------------------------')

console.log('packt' === true); //false
console.log('packt' === 'packt'); //true

var person1 = {name:'John'};
var person2 = {name:'John'};
console.log(person1 === person2); //false, different objects
```

---

### 06 - Conditional Statements

```html
<script type="text/javascript" src="06-ConditionalStatements.js"></script>
```
```javascript
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

```

---

### 07 - Loops

```html
<script type="text/javascript" src="07-Loops.js"></script>
```
```javascript
console.log('**** for example ****');
for (var i=0; i<10; i++) {
    console.log(i);
}

console.log('**** while example ****');
var i = 0;
while(i<10){
    console.log(i);
    i++;
}
console.log('**** do-while example ****');
var i = 0;
do{
    console.log(i);
    i++;
} while (i<10)
```

---

### 08 - Funções

```html
<script type="text/javascript" src="08-Functions.js"></script>
```
```javascript
function sayHello() {
    console.log("Olá");
}
sayHello();

// funções com parametros
function output(text) {
    console.log(text);
}
output("Passagem de parâmetros na função");
output('Primeira Frase', ' Outro texto')
output();

// Função com retorno
function sum(num1, num2) {
    return num1 + num2;
}
var result = sum(1,2);
output(result);
```

---

### 10 - Orientação a Objetos 

```html
<script type="text/javascript" src="10-ObjectOrientedJS.js"></script>
```
```javascript
// Exemplo 1 de objeto:
var obj = new Object();

// Exemplo 2 de objeto
var obj = {};

// ou
obj = {
    name:{
        first: 'José',
        last: 'Malcher Jr.'
    },
    endereco: 'Angelo Custodio'
};

function Livro(titulo, paginas, isbn) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    }
}

var livroTeste = new Livro('titulo 01', 'paginas250', 'isbn123456');
console.log(livroTeste.printIsbn());
console.log(livroTeste.titulo);

livroTeste.titulo = 'Titulo Novo 01';
console.log(livroTeste.titulo);

Livro.prototype.printTitulo = function () {
    console.log(this.titulo);
};
livroTeste.printTitulo();
livroTeste.printIsbn();
```

---

### 11 - ES6 let e const

```json
{
  "name": "cap01estruturadadosjavascript",
  "version": "1.0.0",
  "description": "Estudos do livro de JavaScript Estutura de Dados e Algoritmo - Loiane G.",
  "main": "11-ES6letconst.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel 11-ES6letconst.js --out-file js/main.js -w"
  },
  "keywords": [
    "javascript",
    "Estrutura",
    "de",
    "Dados",
    "Capitulo",
    "1"
  ],
  "author": "José Malcher Jr.",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}

```

```html
<script type="text/javascript" src="js/main.js"></script>
```
```javascript
//ES 6

// EcmaScript 6 Constants
const PI = 3.141593;
//PI = 3.0; //throws error
console.log(PI);

//******* EcmaScript 6: let is the new var
var frame = 'Angular';
var frame = 'React';
console.log(frame);

let varES6 = 'javaScript';
//let varES6 = 'JAVA'; //dá erro

let movie = 'Lord of the Rings';
//var movie = 'Batman v Superman'; //throws error, variable movie already declared

function starWarsFan() {
    let movie = 'Fime Star Wars 01';
    return movie;
}

function marvelFan() {
    movie = 'The averangers';
    return movie;
}

function blizzardFan() {
    let isFan = true;
    let phrase = 'Wordcraft';
    console.log('Before if: ' + phrase);
    if(isFan){
        let phrase = 'Texto inicial';
        phrase = 'For the Horde!!';
        console.log('O que sobrou... '+ phrase);
    }
    phrase = 'Para Aliança....';
    console.log('Depois do se... '+ phrase);
}

console.log('---'+movie+'---');
console.log(starWarsFan());
console.log(marvelFan());
console.log('---'+movie+'---');
blizzardFan();

```

---

### 12 - Template literals

```json
 //(...)
 "main": "12-Es6StringTemplates.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel 12-Es6StringTemplates.js --out-file js/main.js -w"
  },
//(...)
```

```html
<script type="text/javascript" src="js/main.js"></script>
```
```javascript
// Template literals
var book = {
    name: 'Learning JavaScript DataStructures and Algorithms'
};

console.log(`You are reading... ${book.name}.,
    ...
    and this is a new line`);
```
---

### 13 - ES6 Arrow Functions

```json
  "main": "13-ES6ArrowFunctions.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel 13-ES6ArrowFunctions.js --out-file js/main.js -w"
  },
```

```javascript
let circulo = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
    return area;
};
console.log(circulo(2));

//ou

let cirtuclo2 = (r) => 3.14 * r*r;
console.log(cirtuclo2(4));

//ou

var mostraSegundos = function () {
    return new Date.getSeconds();
}
var mostraSegundos = () => {
    return new Date.getSeconds();
}
var mostraSegundos = () => new Date.getSeconds();

//outro ex;

var objetoUsuaro = function (id, nome) {
    return{
        id: id,
        nome: nome,
    };
};
var objetoUsuario = (id, nome)=> {return{id:id, nome:nome,}};
var objetoUsuario = (id, nome)=> ({id:id, nome:nome});

//outro ex:

var itemsCarrinho = [
    {id: 1, nome: 'Item 01', preco: 1200},
    {id: 2, nome: 'Item 02', preco: 3200},
];

var total = itemsCarrinho.reduce(function (total, item) {
    return total + item.preco;
}, 0);
var total = itemsCarrinho.reduce((total, item) => {
    return total + item.preco;
},0);

//resuzido possivel
var total = itemsCarrinho.reduce((total, item)=> total+ item.preco, 0 );


```
vídeo explicando: https://www.youtube.com/watch?v=cHvh-munKyA

---

### 14 - ES6 Parameter Handling

```json
  "main": "14-ES6ParameterHandling.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel 14-ES6ParameterHandling.js --out-file js/main.js -w"
  },
```

```javascript
//******* EcmaScript 6: Default Parameter Values
function soma(x = 1, y = 2, z = 3) {
    return x + y + z;
};
console.log(soma(10,20));

//function above is the same as
function sum2 (x, y, z) {
    if (x === undefined)
        x = 1;
    if (y === undefined)
        y = 2;
    if (z === undefined)
        z = 3;
    return x + y + z;
};
console.log(sum2(4,2)); //outpus 9

//******* EcmaScript 6: spread operator ('...')
let params = [3, 4, 5];
console.log(soma(...params));  // 12

let numbers = [1, 2, ...params]; //pushing values into array
console.log(numbers); // (5)[1,2,3,4,5]


//******* EcmaScript 6: rest parameter ('...')
function restParamaterFunction (x, y, ...a) {
    return (x + y) * a.length;
};
console.log(restParamaterFunction(1, 2, "hello", true, 7)); // outputs 9;

//code above is the same as ES5:
function restParamaterFunction2 (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
console.log(restParamaterFunction2(1, 2, "hello", true, 7)); // outputs 9;
```

---

### 15 - ES6 Enhanced Object Properties

```json
  "main": "15-ES6EnhancedObjectProperties.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel 15-ES6EnhancedObjectProperties.js --out-file js/main.js -w"
  },
```

```javascript
// Destructuring Assignment + Property Shorthand
var [x, y] = ['a', 'b'];
var obj = {x,y};
console.log(obj);

[x,y] = [y,x];
/*var temp = x;
x = y;
y = temp;*/
var obj2 = {x,y};
console.log(obj2);

// ou
var x = 'aa';
var y = 'bb';
var obj3 = {x:x, y:y};
console.log(obj3);


// Method Properties
var ola =  {
    nome: 'jose',
    printOla(){
        console.log('OLá... '+ this.nome);
    }
}
console.log(ola.printOla());

//code above is the same as:
var ola2  = {
    nome: 'JOSE MALCHER JR',
    printOla2: function printOla2() {
        console.log('OLá... '+ this.nome);
    }
};
console.log(ola2.printOla2());
```

--- 

### 16 - ES6 Classes

```json
 "main": "16-ES6Classes.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel 16-ES6Classes.js --out-file js/main.js -w"
  },
```
```javascript
// ES6 classes
class Livro{
    constructor(titulo, paginas, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.isbn = isbn;
    }
    printISBN(){
        console.log('ISBN: ' + this.isbn + ' Br');
    }
}

let livro01 = new Livro('Livro 01', '300', '1234567-89');
console.log(livro01.titulo);

livro01.titulo = 'Livro 01 Versão 2';
console.log(livro01.titulo);

livro01.printISBN();

console.log('------------------------------');

// Herança
class LivroTI extends Livro{
    constructor(titulo, paginas, isbn, assuntoTI){
        super(titulo, paginas, isbn);
        this.assuntoTI = assuntoTI;
    }
    printAssuntoLivroTI(){
        console.log('Assunto: ' + this.assuntoTI);
    }
}
let javaLivro = new LivroTI('Livro Java como programar', '200', '123456-789', 'JAVA');
console.log(javaLivro.titulo);
console.log(javaLivro.printAssuntoLivroTI());

console.log('------------------------------');

//Get e Set

class Pessoa{

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }
}

let pessoa01 = new Pessoa('Jose');
console.log(pessoa01.nome);
pessoa01.nome = 'Maria';
console.log(pessoa01.nome);

pessoa01._nome = 'SAM';
console.log(pessoa01.nome);
console.log('------------------------------');

//using symbols for private atributes

var _nome = Symbol();
class Pessoa02{

    constructor(nome) {
        this[_nome] = nome;
    }


    get nome() {
        return this[_nome];
    }

    set nome(value) {
        this[_nome] = value;
    }
}
let pessoa02 = new Pessoa02('FRODO');
console.log(pessoa02.nome);
pessoa02.nome = 'OUTRO NOME...';
console.log(pessoa02.nome);

console.log(Object.getOwnPropertySymbols(pessoa02));

```

---



