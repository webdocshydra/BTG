 // Função para gerar um número aleatório entre min e max
function gerarNumeroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para converter número para decimal
function numeroParaDecimal(numero, casasDecimais) {
	return numero.toFixed(casasDecimais);
}

// Gerar um número aleatório entre 1.000.000.000.000.000 e 9.999.999.999.999.999
const numeroAleatorio = gerarNumeroAleatorio(1000000000000000, 9999999999999999);

// Converter o número para decimal com 1 casa decimal
const numeroDecimal = numeroParaDecimal(numeroAleatorio, 1);

// Exibir o resultado no elemento com id="registro"
document.getElementById('cod-registro').textContent = numeroDecimal;