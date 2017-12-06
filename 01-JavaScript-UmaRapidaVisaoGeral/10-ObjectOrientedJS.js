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