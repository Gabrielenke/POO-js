// objeto dentro de objeto

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
	caracteristicas: {
		cnh: true,
		carteira: ["Dinheiro", "Documentos", "Moedas"],
	},
};

pessoa.aniversario();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

pessoa.podeDirigir();

pessoa.dizerIdade();

console.log(pessoa.caracteristicas.carteira[0]);
