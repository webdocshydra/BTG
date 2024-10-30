function validarValor(input) {
    let valor = input.value;
    // Remove caracteres que não são números, ponto ou vírgula
    valor = valor.replace(/[^0-9.,]/g, '');
    // Substitui todas as vírgulas por pontos (opcional, dependendo da formatação desejada)
    // valor = valor.replace(/,/g, '.');
    input.value = valor;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const inputValor = document.getElementById('i-valor');
    inputValor.addEventListener('input', function() {
        validarValor(this);
    });
});