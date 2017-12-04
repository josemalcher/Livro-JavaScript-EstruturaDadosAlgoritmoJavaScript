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


