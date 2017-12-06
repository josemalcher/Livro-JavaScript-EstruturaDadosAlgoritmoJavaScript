'use strict';

//ES 6

// EcmaScript 6 Constants
var PI = 3.141593;
//PI = 3.0; //throws error
console.log(PI);

//******* EcmaScript 6: let is the new var
var frame = 'Angular';
var frame = 'React';
console.log(frame);

var varES6 = 'javaScript';
//let varES6 = 'JAVA'; //dá erro

var movie = 'Lord of the Rings';
//var movie = 'Batman v Superman'; //throws error, variable movie already declared

function starWarsFan() {
    var movie = 'Fime Star Wars 01';
    return movie;
}

function marvelFan() {
    movie = 'The averangers';
    return movie;
}

function blizzardFan() {
    var isFan = true;
    var phrase = 'Wordcraft';
    console.log('Before if: ' + phrase);
    if (isFan) {
        var _phrase = 'Texto inicial';
        _phrase = 'For the Horde!!';
        console.log('O que sobrou... ' + _phrase);
    }
    phrase = 'Para Aliança....';
    console.log('Depois do se... ' + phrase);
}

console.log('---' + movie + '---');
console.log(starWarsFan());
console.log(marvelFan());
console.log('---' + movie + '---');
blizzardFan();
