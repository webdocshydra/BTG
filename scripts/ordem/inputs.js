document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
		{ inputId: 'i-gerente', targetId: 'gerente1', originalText: '[GERENTE]' },
		{ inputId: 'i-gerente', targetId: 'gerente2', originalText: '[GERENTE]' },
		{ inputId: 'i-nome', targetId: 'nome-completo', originalText: '[NOME COMPLETO]' },
		{ inputId: 'i-cnpj', targetId: 'cnpj', originalText: '[CNPJ]' },
        { inputId: 'i-rs', targetId: 'razao-social', originalText: '[RAZÃO SOCIAL]' },
		{ inputId: 'i-banco', targetId: 'banco', originalText: '[BANCO]' },
		{ inputId: 'i-agencia', targetId: 'agencia', originalText: '[AGÊNCIA]' },
		{ inputId: 'i-conta', targetId: 'conta', originalText: '[CONTA]' },
		{ inputId: 'i-telefone', targetId: 'telefone', originalText: '[TELEFONE]' },
		{ inputId: 'i-conclusao', targetId: 'conclusao', originalText: '[CONCLUSÃO]' },
    ];

    configurations.forEach(config => {
        const inputElement = document.getElementById(config.inputId);
        const targetElement = document.getElementById(config.targetId);

        // Initialize the target element with the original text
        targetElement.textContent = config.originalText;

        inputElement.addEventListener('input', () => {
            if (inputElement.value.trim() === '') {
                targetElement.textContent = config.originalText;
            } else {
                targetElement.textContent = inputElement.value;
            }
        });
    });
});
