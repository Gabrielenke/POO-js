// destructuring

let config = {
	ip: "111.1.1.1",
	port: "3000",
	blocked: true,
};

// let { ip, port, blocked } = config;

// console.log(ip);
// console.log(port);
// console.log(blocked);

// destructuring pt2

let port = 0;

({ port } = config);

console.log(port);

// destructuring pt3

let numeros = [1, 2, 3, 4, 5];

// const [a, b, c, d, e] = numeros;

// console.log(a, b, c, d, e);

// destructuring com rest operator

let [a, ...b] = numeros;

console.log(a, b);
