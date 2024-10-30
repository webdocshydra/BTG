document.addEventListener('DOMContentLoaded', function() {
    // Obtém o input
    const input = document.getElementById('i-codigo');

    // Gera um número aleatório entre 100000000000000 e 999999999999999
    const valorAleatorio = Math.floor(Math.random() * (999999999999999 - 100000000000000 + 1) + 100000000000000);

    // Define o valor do input como o número aleatório gerado
    input.value = valorAleatorio;
});