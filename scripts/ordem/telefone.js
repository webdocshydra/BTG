document.getElementById('i-telefone').addEventListener('input', function(event) {
	let input = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    let formattedInput;

    if (input.length > 11) {
        input = input.slice(0, 11); // Limita a 11 dígitos
    }

    if (input.length === 10) {
        formattedInput = input.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (input.length === 11) {
        formattedInput = input.replace(/^(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    } else {
        formattedInput = input;
    }

    event.target.value = formattedInput;
});
