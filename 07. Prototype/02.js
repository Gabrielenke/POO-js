function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

Carro.prototype.rodas = 4;

Carro.prototype.ligar = function () {
	console.log("Ligou a " + this.marca);
};

let bmw = new Carro("BMW", 10000);

console.log(bmw);

console.log(bmw.rodas);

bmw.ligar();
