// metodos e props em objetos ja crtados

let carro = {
	tipo: "SUV",
	portas: 4,
};

console.log(carro.portas);

if (carro.tipo == "SUV") {
	carro.tetoSolar = true;
}
console.log(carro);

carro.acelerar = function () {
	console.log("Vrummmmm");
};

carro.acelerar();
