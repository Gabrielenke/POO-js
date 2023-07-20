class Veiculo {
	constructor(marca, modelo, rodas) {
		this.marca = marca;
		this.modelo = modelo;
		this.rodas = rodas;
	}
}

class TetoSolar extends Veiculo {
	constructor(marca, modelo, rodas, tetoSolar) {
		super(marca, modelo, rodas);
		this.tetoSolar = tetoSolar;
	}
}

const bmw = new TetoSolar("bmw", "x1", 4, true);

console.log(bmw);

console.log(bmw instanceof TetoSolar);
console.log(bmw instanceof Veiculo);
console.log(Veiculo instanceof TetoSolar);
console.log(TetoSolar instanceof Veiculo);
