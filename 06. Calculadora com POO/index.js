class Calculator {
	constructor() {
		this.upperValue = document.querySelector("#upper-number");
		this.resultValue = document.querySelector("#reseult-number");
		this.reset = 0;
	}

	clearValues() {
		this.upperValue.textContent = "0";
		this.resultValue.textContent = "0";
	}

	checkLastDigit(input, upperValue, reg) {
		if (
			!reg.test(input) &&
			!reg.test(upperValue.substr(upperValue.length - 1))
		) {
			return true;
		} else {
			return false;
		}
	}

	// metodo de soma
	sum(n1, n2) {
		return parseFloat(n1) + parseFloat(n2);
	}

	// metodo de subtracao
	substraction(n1, n2) {
		return parseFloat(n1) - parseFloat(n2);
	}

	// metodo de multiplicacao
	multiplication(n1, n2) {
		return parseFloat(n1) * parseFloat(n2);
	}

	// metodo de divisao
	division(n1, n2) {
		return parseFloat(n1) / parseFloat(n2);
	}

	// atualiza valores
	refreshValues(total) {
		this.upperValue.textContent = total;
		this.resultValue.textContent = total;
	}

	// resolve uma operacao
	resolution() {
		// explode uma string em um array

		let upperValueArray = this.upperValue.textContent.split(" ");
		// resultado da operacao
		let result = 0;

		for (let i = 0; i <= upperValueArray.length; i++) {
			let operation = 0;
			let actualItem = upperValueArray[i];

			if (actualItem == "x") {
				result = calc.multiplication(
					upperValueArray[i - 1],
					upperValueArray[i + 1],
				);
				operation = 1;
			} else if (actualItem == "/") {
				result = calc.division(upperValueArray[i - 1], upperValueArray[i + 1]);

				operation = 1;
				//chega se o array ainda tem multiplicacao e divisao a aser feita
			} else if (
				!upperValueArray.includes("x") &&
				!upperValueArray.includes("/")
			) {
				// soma e subtracao
				if (actualItem == "+") {
					result = calc.sum(upperValueArray[i - 1], upperValueArray[i + 1]);

					operation = 1;
				} else if (actualItem == "-") {
					result = calc.substraction(
						upperValueArray[i - 1],
						upperValueArray[i + 1],
					);

					operation = 1;
				}
			}

			// atualiza valores do array para a proxima operacao

			if (operation) {
				// indice antetior no resultado da operacao
				upperValueArray[i - 1] = result;
				// remove os items ja utilizados para a operacao
				upperValueArray.splice(i, 2);
				// atualizar o valor do indice
				i = 0;
			}
		}

		if (result) {
			calc.reset = 1;
		}

		calc.refreshValues(result);
	}

	btnPress() {
		let input = this.textContent;
		let upperValue = calc.upperValue.textContent;

		// verificar se tem so numeros
		var reg = new RegExp("^\\d+$");
		// se precisar resetar limpa o displa
		if (calc.reset && reg.test(input)) {
			upperValue = "0";
		}
		// limpa a prop de reset
		calc.reset = 0;

		if (input == "AC") {
			calc.clearValues();
		} else if (input == "=") {
			calc.resolution();
		} else {
			// checa se precisa adicionar ou nao

			if (calc.checkLastDigit(input, upperValue, reg)) {
				return false;
			}

			// adiciona espacos aos operadores
			if (!reg.test(input)) {
				input = ` ${input} `;
			}

			if (upperValue == "0") {
				calc.upperValue.textContent = input;
			} else {
				calc.upperValue.textContent += input;
			}
		}
	}
}

// start object

let calc = new Calculator();

// start btns

let buttons = document.querySelectorAll(".btn");

// map all buttons

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", calc.btnPress);
}
