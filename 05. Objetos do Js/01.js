let o = {
	nome: "Gabriel",
	sayName() {
		console.log(this.nome);
	},
};

console.log(o.toString());
console.log(o.valueOf());

o.sayName();
