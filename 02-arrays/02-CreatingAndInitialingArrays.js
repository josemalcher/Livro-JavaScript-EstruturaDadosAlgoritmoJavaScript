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
