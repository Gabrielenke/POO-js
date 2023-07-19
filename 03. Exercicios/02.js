let pessoa = {
	nome: "Gabriel",
	sayName() {
		console.log(this.nome);
	},
};

pessoa.sayName();
