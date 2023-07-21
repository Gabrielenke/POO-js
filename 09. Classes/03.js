let Tenis = class {
	constructor(modelo, cor) {
		this.modelo = modelo;
		this.cor = cor;
	}
	modeloDotenis() {
		return this.modelo;
	}
	set trocarModelo(novoModelo) {
		this.modelo = novoModelo;
	}

	get obterModelo() {
		return "O modelo do tenis e : " + this.modelo;
	}
};

let allstar = new Tenis("All star", "preto");

allstar.trocarModelo = "Nike";

console.log(allstar.obterModelo);
