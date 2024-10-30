document.addEventListener('DOMContentLoaded', function() {
    const secaoDados = document.getElementById('dados-bancarios');
    const selectDados = document.getElementById('dados-bc');

    secaoDados.style.display = 'none';

    selectDados.addEventListener('change', function() {
        const opcaoSelecionada = selectDados.value;

        if (opcaoSelecionada === 'NÃO Exibir') {
            secaoDados.style.display = 'none';
        } else {
            secaoDados.style.display = 'flex';
        }
    });
});