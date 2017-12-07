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