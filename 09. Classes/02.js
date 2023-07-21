let Tenis = class {
	constructor(modelo, cor) {
		this.modelo = modelo;
		this.cor = cor;
	}
	nomeDoTenis() {
		console.log(this.modelo);
	}
};

let allstar = new Tenis("allstar", "preto");

allstar.nomeDoTenis();
