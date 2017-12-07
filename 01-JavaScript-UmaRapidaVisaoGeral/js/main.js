'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES6 classes
var Livro = function () {
    function Livro(titulo, paginas, isbn) {
        _classCallCheck(this, Livro);

        this.titulo = titulo;
        this.paginas = paginas;
        this.isbn = isbn;
    }

    _createClass(Livro, [{
        key: 'printISBN',
        value: function printISBN() {
            console.log('ISBN: ' + this.isbn + ' Br');
        }
    }]);

    return Livro;
}();

var livro01 = new Livro('Livro 01', '300', '1234567-89');
console.log(livro01.titulo);

livro01.titulo = 'Livro 01 Versão 2';
console.log(livro01.titulo);

livro01.printISBN();

console.log('------------------------------');

// Herança

var LivroTI = function (_Livro) {
    _inherits(LivroTI, _Livro);

    function LivroTI(titulo, paginas, isbn, assuntoTI) {
        _classCallCheck(this, LivroTI);

        var _this = _possibleConstructorReturn(this, (LivroTI.__proto__ || Object.getPrototypeOf(LivroTI)).call(this, titulo, paginas, isbn));

        _this.assuntoTI = assuntoTI;
        return _this;
    }

    _createClass(LivroTI, [{
        key: 'printAssuntoLivroTI',
        value: function printAssuntoLivroTI() {
            console.log('Assunto: ' + this.assuntoTI);
        }
    }]);

    return LivroTI;
}(Livro);

var javaLivro = new LivroTI('Livro Java como programar', '200', '123456-789', 'JAVA');
console.log(javaLivro.titulo);
console.log(javaLivro.printAssuntoLivroTI());

console.log('------------------------------');

//Get e Set

var Pessoa = function () {
    function Pessoa(nome) {
        _classCallCheck(this, Pessoa);

        this._nome = nome;
    }

    _createClass(Pessoa, [{
        key: 'nome',
        get: function get() {
            return this._nome;
        },
        set: function set(value) {
            this._nome = value;
        }
    }]);

    return Pessoa;
}();

var pessoa01 = new Pessoa('Jose');
console.log(pessoa01.nome);
pessoa01.nome = 'Maria';
console.log(pessoa01.nome);

pessoa01._nome = 'SAM';
console.log(pessoa01.nome);
console.log('------------------------------');

//using symbols for private atributes

var _nome = Symbol();

var Pessoa02 = function () {
    function Pessoa02(nome) {
        _classCallCheck(this, Pessoa02);

        this[_nome] = nome;
    }

    _createClass(Pessoa02, [{
        key: 'nome',
        get: function get() {
            return this[_nome];
        },
        set: function set(value) {
            this[_nome] = value;
        }
    }]);

    return Pessoa02;
}();

var pessoa02 = new Pessoa02('FRODO');
console.log(pessoa02.nome);
pessoa02.nome = 'OUTRO NOME...';
console.log(pessoa02.nome);

console.log(Object.getOwnPropertySymbols(pessoa02));
