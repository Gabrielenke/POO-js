let inimigo = {
	vivo: true,
};

function Ninja(nome, arma) {
	this.nome = nome;
	this.arma = arma;

	this.atirarArma = function (imimigo) {
		console.log("Atirando a arma: " + this.arma);
		imimigo.vivo = false;
		console.log("Inimigo morto");
		console.log(inimigo.vivo);
	};
}

let ninja1 = new Ninja("Naruto", "Shuriken");

ninja1.atirarArma(inimigo);
