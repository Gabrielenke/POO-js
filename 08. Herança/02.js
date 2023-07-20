function Veiculo() {
	this.carenagem = "aço";
	this.ligar = function () {
		console.log("ligando");
	};
}

function Trem(tipo) {
	this.tipo = tipo;
	this.vagoes = 50;
}

function Carro() {
	this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let trembala = new Trem("bala");
let ferrari = new Carro();
