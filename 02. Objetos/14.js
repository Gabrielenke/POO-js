// prop constructor

function Robo(nome, arma) {
	this.nome = nome;
	this.arma = arma;
}

function Human(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

let android = new Robo("Android", "Laser");

console.log(android instanceof Robo);
console.log(android instanceof Human);
