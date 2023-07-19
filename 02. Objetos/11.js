let ninja = {
	classe: "profissional",
	arma: "shuriken",
	atirarArma() {
		console.log("Atirou a  " + this.arma);
	},

	atirarDuasVezes() {
		for (let i = 2; i > 0; i--) {
			this.atirarArma();
		}
	},
};

ninja.atirarArma();
ninja.atirarDuasVezes();
