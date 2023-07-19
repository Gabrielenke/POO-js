// Comparando objetos

function Robo(nome, arma) {
	this.nome = nome;
	this.arma = arma;
}

let robo1 = new Robo("Android", "Laser");
let robo2 = new Robo("Android", "Laser");

console.log(robo1 === robo2);

let robo3 = robo1;

console.log(robo1 === robo3);
