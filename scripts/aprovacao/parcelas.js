document.addEventListener('DOMContentLoaded', function() {
    const selectParcelas = document.getElementById('parcelas');
    const inputParcelas = document.getElementById('i-parcelas');

    // Define o valor padrão do campo de entrada para "12x"
    inputParcelas.value = "12x";
    inputParcelas.readOnly = true;

    // Adiciona um ouvinte de evento para monitorar a mudança na seleção
    selectParcelas.addEventListener('change', function() {
        const selectedOption = selectParcelas.value;

        if (selectedOption === 'Outro') {
            // Se "Outro" for selecionado, permite a edição e limpa o valor e o placeholder
            inputParcelas.readOnly = false;
            inputParcelas.value = "";
            inputParcelas.placeholder = "Insira aqui a PARCELA";
        } else {
            // Se outra opção for selecionada, atualiza o valor do campo de entrada e o torna somente leitura
            inputParcelas.value = selectedOption;
            inputParcelas.readOnly = true;
            inputParcelas.placeholder = ""; // Remove o placeholder se não for "Outro"
        }
    });

    // Adiciona um ouvinte de evento para permitir apenas números e a letra "x" quando "Outro" é selecionado
    inputParcelas.addEventListener('input', function() {
        if (selectParcelas.value === 'Outro') {
            // Se "Outro" estiver selecionado, substitui qualquer caractere que não seja número ou "x" por uma string vazia
            inputParcelas.value = inputParcelas.value.replace(/[^\dx]/gi, '');
        } else {
            // Se outra opção estiver selecionada, limpa o valor
            inputParcelas.value = "";
        }
    });
});