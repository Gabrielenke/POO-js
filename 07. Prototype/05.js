function Carro(marca, preco, cor, ano) {
	this.marca = marca;
	this.preco = preco;
	this.cor = cor;
	this.ano = ano;
}

let bmw = new Carro("BMW", 10000, "preta", 2023);

for (prop in bmw) {
	console.log(prop + " : " + bmw[prop]);
}

// for in é recomendado para usar quando se trata de objetos
// for normal é recomendado para usar quando se trata de arrays
