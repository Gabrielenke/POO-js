class Animal {
	constructor(nome) {
		this.nome = nome;
	}
}

class Cachorro extends Animal {
	latir() {
		console.log("Au au");
	}
}

let bob = new Cachorro("Bob");

console.log(bob.nome);
bob.latir();
