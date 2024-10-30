document.addEventListener('DOMContentLoaded', () => {
    const configurations = [
        { inputId: 'i-cnpj', targetId: 'cnpj', originalText: '[CNPJ]' },
        { inputId: 'i-rs', targetId: 'razao-social', originalText: '[RAZÃO SOCIAL]' },
        { inputId: 'i-tipo', targetId: 'tipo-pendencia', originalText: '[TIPO DE PENDÊNCIA]' },
        { inputId: 'i-pendencia', targetId: 'pendencia', originalText: '[PENDÊNCIA]' },
		{ inputId: 'i-gerente', targetId: 'gerente1', originalText: '[GERENTE]' },
		{ inputId: 'i-gerente', targetId: 'gerente2', originalText: '[GERENTE]' }
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
