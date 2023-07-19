function criarPessoa(nome, sobrenome, idade) {
	return {
		nome,
		sobrenome,
		idade,
	};
}

let pessoa1 = criarPessoa("Gabriel", "Enke", 19);

console.log(pessoa1);

let pessoa2 = criarPessoa("x", "y", 20);

console.log(pessoa2);
