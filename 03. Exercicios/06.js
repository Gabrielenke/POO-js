function Ninja(nome, arma) {
	this.nome = nome;
	this.arma = arma;
	this.atirarArma = function () {
		console.log("Atirando a arma: " + this.arma);
	};
}

function Human(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

let ninja1 = new Ninja("Naruto", "Shuriken");
let android = new Human("C3PO", 100);

function isIstance(x, obj) {
	console.log(x instanceof obj);
}

isIstance(ninja1, Ninja);
isIstance(ninja1, Human);

isIstance(android, Ninja);
isIstance(android, Human);
