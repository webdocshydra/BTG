// Função para gerar um número aleatório dentro de um intervalo
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para gerar um caractere aleatório entre A e Z
function randomLetter() {
	var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// Gerar a assinatura
function generateAssinatura() {
	var assinatura = '';
	assinatura += randomLetter(); // CARACTERE
	assinatura += randomNumber(10, 99); // NÚMERO DE 2 DÍGITOS
	assinatura += '.2024.';
	assinatura += randomNumber(0, 9); // NÚMERO DE 1 DÍGITO
	assinatura += randomNumber(10, 99); // NÚMERO DE 2 DÍGITOS
	assinatura += randomLetter(); // CARACTERE
	assinatura += '.';
	assinatura += randomLetter(); // CARACTERE
	assinatura += randomNumber(0, 9); // NÚMERO DE 1 DÍGITO
	assinatura += randomLetter(); // CARACTERE
	assinatura += randomNumber(0, 9); // NÚMERO DE 1 DÍGITO
  
	return assinatura;
}

// Exibir a assinatura na div com id="assinatura"
document.getElementById('assinatura').innerText = generateAssinatura();