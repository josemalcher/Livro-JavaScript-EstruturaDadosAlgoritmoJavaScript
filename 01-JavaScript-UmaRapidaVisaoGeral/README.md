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