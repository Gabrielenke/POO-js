function Carro(marca, preco) {
	this.marca = marca;
	this.preco = preco;
}

// Carro.prototype.rodas = 4;

Carro.prototype = {
	rodas: 4,
};

let bmw = new Carro("BMW", 10000);

console.log(bmw.rodas);

if (bmw.hasOwnProperty("rodas")) {
	console.log("Rodas eh do objeto");
} else if (bmw.constructor.prototype.hasOwnProperty("rodas")) {
	console.log("Rodas eh do prototype");
} else {
	console.log("Rodas nao existe");
}

for (prop in Carro) {
	console.log(prop + " ->" + Carro[prop]);
}
