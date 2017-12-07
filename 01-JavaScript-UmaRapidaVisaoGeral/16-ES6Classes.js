// ES6 classes
class Livro{
    constructor(titulo, paginas, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.isbn = isbn;
    }
    printISBN(){
        console.log('ISBN: ' + this.isbn + ' Br');
    }
}

let livro01 = new Livro('Livro 01', '300', '1234567-89');
console.log(livro01.titulo);

livro01.titulo = 'Livro 01 Versão 2';
console.log(livro01.titulo);

livro01.printISBN();

console.log('------------------------------');

// Herança
class LivroTI extends Livro{
    constructor(titulo, paginas, isbn, assuntoTI){
        super(titulo, paginas, isbn);
        this.assuntoTI = assuntoTI;
    }
    printAssuntoLivroTI(){
        console.log('Assunto: ' + this.assuntoTI);
    }
}
let javaLivro = new LivroTI('Livro Java como programar', '200', '123456-789', 'JAVA');
console.log(javaLivro.titulo);
console.log(javaLivro.printAssuntoLivroTI());

console.log('------------------------------');

//Get e Set

class Pessoa{

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }
}

let pessoa01 = new Pessoa('Jose');
console.log(pessoa01.nome);
pessoa01.nome = 'Maria';
console.log(pessoa01.nome);

pessoa01._nome = 'SAM';
console.log(pessoa01.nome);
console.log('------------------------------');

//using symbols for private atributes

var _nome = Symbol();
class Pessoa02{

    constructor(nome) {
        this[_nome] = nome;
    }


    get nome() {
        return this[_nome];
    }

    set nome(value) {
        this[_nome] = value;
    }
}
let pessoa02 = new Pessoa02('FRODO');
console.log(pessoa02.nome);
pessoa02.nome = 'OUTRO NOME...';
console.log(pessoa02.nome);

console.log(Object.getOwnPropertySymbols(pessoa02));



