'use strict';

var circulo = function circulo(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circulo(2));

//ou

var cirtuclo2 = function cirtuclo2(r) {
    return 3.14 * r * r;
};
console.log(cirtuclo2(4));

//ou

var mostraSegundos = function mostraSegundos() {
    return new Date.getSeconds();
};
var mostraSegundos = function mostraSegundos() {
    return new Date.getSeconds();
};
var mostraSegundos = function mostraSegundos() {
    return new Date.getSeconds();
};

//outro ex;

var objetoUsuaro = function objetoUsuaro(id, nome) {
    return {
        id: id,
        nome: nome
    };
};
var objetoUsuario = function objetoUsuario(id, nome) {
    return { id: id, nome: nome };
};
var objetoUsuario = function objetoUsuario(id, nome) {
    return { id: id, nome: nome };
};

//outro ex:

var itemsCarrinho = [{ id: 1, nome: 'Item 01', preco: 1200 }, { id: 2, nome: 'Item 02', preco: 3200 }];

var total = itemsCarrinho.reduce(function (total, item) {
    return total + item.preco;
}, 0);
var total = itemsCarrinho.reduce(function (total, item) {
    return total + item.preco;
}, 0);

//resuzido possivel
var total = itemsCarrinho.reduce(function (total, item) {
    return total + item.preco;
}, 0);
