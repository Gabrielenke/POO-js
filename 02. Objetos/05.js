// 6- metodos

const robo = {
	bracos: 5,
	pernas: 2,
	arma: "metralhadora",
	armaEspecial: "fogute",
	atirar: function () {
		console.log("pew pew pew ");
	},
};

robo.atirar();

let pessoa = {
	nome: "gabriel",
	falar: function () {
		console.log("oi meu nome é " + this.nome);
	},
};

pessoa.falar();
