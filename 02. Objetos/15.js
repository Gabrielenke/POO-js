// copia de objetos (maneira errada)

let obj = {
	numero: 1,
};

console.log(obj.numero);

let copia = obj;

console.log(copia.numero);

copia.numero = 2;

console.log(obj);
