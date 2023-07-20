function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype = {
	rodas: 4,

	ligar() {
		console.log("Ligou a " + this.marca);
	},
};

let bmw = new Carro("BMW", 10000);

Carro.prototype.acelererar = function () {
	console.log("Acelerou");
};

console.log(bmw);

console.log(bmw.rodas);

bmw.ligar();

bmw.acelererar();

console.log();
