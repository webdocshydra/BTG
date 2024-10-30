document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-cnpj', targetId: 'cnpj', originalText: '[CNPJ]' },
        { inputId: 'i-rs', targetId: 'razao-social', originalText: '[RAZÃO SOCIAL]' },
        { inputId: 'i-tempo', targetId: 'tempo-limite', originalText: '[TEMPO LIMITE]' },
        { inputId: 'i-pendencia', targetId: 'pendencia', originalText: '[PENDÊNCIA]' },
		{ inputId: 'i-gerente', targetId: 'gerente', originalText: '[GERENTE]' },
		{ inputId: 'i-titular', targetId: 'titular', originalText: '[TITULAR]' }
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
