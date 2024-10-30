// JavaScript Document

// Selecionando o elemento de input do CNPJ/CPF
const inputDocumento = document.getElementById('i-cnpj');

// Adicionando um evento de input ao campo de entrada de documento
inputDocumento.addEventListener('input', function() {
    const documentoValue = inputDocumento.value.replace(/\D/g, ''); // Remover caracteres não numéricos

    // Configuração de comprimento máximo do input
    inputDocumento.maxLength = 18;

    let formattedDocumento;

    if (documentoValue.length <= 11) {
        // Formatação para CPF (###.###.###-##)
        formattedDocumento = documentoValue.substring(0, 3);
        if (documentoValue.length > 3) formattedDocumento += '.' + documentoValue.substring(3, 6);
        if (documentoValue.length > 6) formattedDocumento += '.' + documentoValue.substring(6, 9);
        if (documentoValue.length > 9) formattedDocumento += '-' + documentoValue.substring(9, 11);
    } else {
        // Formatação para CNPJ (##.###.###/####-##)
        formattedDocumento = documentoValue.substring(0, 2);
        if (documentoValue.length > 2) formattedDocumento += '.' + documentoValue.substring(2, 5);
        if (documentoValue.length > 5) formattedDocumento += '.' + documentoValue.substring(5, 8);
        if (documentoValue.length > 8) formattedDocumento += '/' + documentoValue.substring(8, 12);
        if (documentoValue.length > 12) formattedDocumento += '-' + documentoValue.substring(12, 14);
    }

    inputDocumento.value = formattedDocumento;
});

document.addEventListener('DOMContentLoaded', function() {
        const statusSelect = document.getElementById('status');
        const inputStatus = document.getElementById('input-status');

        // Define o valor padrão do campo de entrada para "12x"
        inputStatus.value = "Concluída";
        inputStatus.readOnly = true;

        // Adiciona um ouvinte de evento para monitorar a mudança na seleção
        statusSelect.addEventListener('change', function() {
            const selectedOption = statusSelect.value; // Obtém o valor da opção selecionada

            if (selectedOption === 'Outro') {
                // Se "Outro" for selecionado, permite a edição e limpa o valor e o placeholder
                inputStatus.readOnly = false;
                inputStatus.value = "";
                inputStatus.placeholder = "Insira aqui o STATUS";
            } else {
                // Se outra opção for selecionada, atualiza o valor do campo de entrada e o torna somente leitura
                inputStatus.value = selectedOption;
                inputStatus.readOnly = true;
                inputStatus.placeholder = ""; // Remove o placeholder se não for "Outro"
                }
            });
        });

document.addEventListener('DOMContentLoaded', function() {
        const pixSelect = document.getElementById('pix');
        const inputPix = document.getElementById('input-pix');

        // Define o valor padrão do campo de entrada para "12x"
        inputPix.value = "Não utilizada";
        inputPix.readOnly = true;

        // Adiciona um ouvinte de evento para monitorar a mudança na seleção
        pixSelect.addEventListener('change', function() {
            const selectedOption = pixSelect.value; // Obtém o valor da opção selecionada

            if (selectedOption === 'Outro') {
                // Se "Outro" for selecionado, permite a edição e limpa o valor e o placeholder
                inputPix.readOnly = false;
                inputPix.value = "";
                inputPix.placeholder = "Insira aqui a CHAVE PIX";
            } else {
                // Se outra opção for selecionada, atualiza o valor do campo de entrada e o torna somente leitura
                inputPix.value = selectedOption;
                inputPix.readOnly = true;
                inputPix.placeholder = ""; // Remove o placeholder se não for "Outro"
                }
            });
        });

document.getElementById('input-cnpj').addEventListener('input', function() {
            var cnpj = this.value;
            document.title = "Banco BTG - Comprovante [" + cnpj + "]";
        });