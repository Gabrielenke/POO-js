let pessoa = {
	nome: "gabriel",
	idade: 19,
	getNome: function () {
		console.log("O nome e " + this.nome);
	},
	aniversario() {
		this.idade += 1;
	},
	dizerIdade() {
		console.log("A minha idade e " + this.idade);
	},
	podeDirigir() {
		if (this.idade > 18) {
			console.log("Pode dirigir");
		} else {
			console.log("Não pode dirigir");
		}
	},
};

pessoa.aniversario();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);
pessoa.podeDirigir();

pessoa.dizerIdade();

let calculadora = {
	numeros: 0,
	somar: function (a, b) {
		this.numeros = a + b;
	},
	subtrair(a) {
		this.numeros -= a;
	},
};

calculadora.somar(2, 3);
console.log(calculadora.numeros);
calculadora.subtrair(1);
console.log(calculadora.numeros);
