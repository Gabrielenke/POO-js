function Ninja(nome, arma, qtd) {
	this.nome = nome;
	this.arma = arma;
	this.municao = qtd;
	this.atirarArma = function () {
		if (this.municao > 0) {
			console.log("Atirando a arma: " + this.arma);
			this.municao -= 1;
			console.log(
				"atirou a arma: " + this.arma,
				"restam " + this.municao + " balas",
			);
		} else {
			console.log("Sem munição");
		}
	};
}

let ninja1 = new Ninja("Naruto", "Shuriken", 3);

ninja1.atirarArma();
ninja1.atirarArma();
ninja1.atirarArma();
ninja1.atirarArma();
ninja1.atirarArma();
