let carro = {
	portas: 4,
	cor: "vermelho",
};

console.log(carro);
console.log(carro.portas);

console.log(carro["portas"]);

if (carro.portas > 2) {
	console.log("esse carro possui mais de duas portas");
}
