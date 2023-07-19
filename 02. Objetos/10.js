// Deletando propriedades e metodos em objetos

let carro = {
	tipo: "SUV",
	portas: 4,
	ligar() {
		console.log("ligou ");
	},
};

carro.ligar();

delete carro.ligar;
delete carro.portas;
// carro.ligar();
console.log("carro depois do delete ");
console.log(" ");
console.log(carro);
