"use strict";

//******* EcmaScript 6: Default Parameter Values
function soma() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

    return x + y + z;
};
console.log(soma(10, 20));

//function above is the same as
function sum2(x, y, z) {
    if (x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
};
console.log(sum2(4, 2)); //outpus 9

//******* EcmaScript 6: spread operator ('...')
var params = [3, 4, 5];
console.log(soma.apply(undefined, params)); // 12

var numbers = [1, 2].concat(params); //pushing values into array
console.log(numbers); // (5)[1,2,3,4,5]


//******* EcmaScript 6: rest parameter ('...')
function restParamaterFunction(x, y) {
    return (x + y) * (arguments.length <= 2 ? 0 : arguments.length - 2);
};
console.log(restParamaterFunction(1, 2, "hello", true, 7)); // outputs 9;

//code above is the same as ES5:
function restParamaterFunction2(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
console.log(restParamaterFunction2(1, 2, "hello", true, 7)); // outputs 9;
