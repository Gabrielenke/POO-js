try {
	throw new Error("Deu errado!");
} catch (error) {
	console.log(error.name + ": " + error.message);
}
