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

