function Ninja(nome, arma) {
	this.nome = nome;
	this.arma = arma;
	this.atirarArma = function () {
		console.log("Atirando a arma: " + this.arma);
	};
}

let ninja1 = new Ninja("Naruto", "Shuriken");

ninja1.atirarArma();
