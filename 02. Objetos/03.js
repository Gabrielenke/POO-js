// As propiedades aceitam qualquer tipo de dados do javaScript
// (números, strings, arrays, objetos, funções, etc).

// Tipos de dados

let maquina = {
	material: "aço inox",
	equipamentos: ["motor", "pistão", "correia", "engrenagem"],
	vaiMontada: false,
	numeroDeMotores: 4,
};

console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[2]);

for (let i = 0; i < maquina.equipamentos.length; i++) {
	console.log(maquina.equipamentos[i]);
}

if (maquina.vaiMontada == false) {
	console.log("O comprador precisa montar ");
}
