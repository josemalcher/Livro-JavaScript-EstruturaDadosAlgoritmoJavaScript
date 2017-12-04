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

