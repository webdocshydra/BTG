document.addEventListener('DOMContentLoaded', () => {
    const botaoImprimir = document.getElementById('botao-imprimir');
    const secaoConfig = document.querySelector('.config');
    const documento = document.getElementById('documento');

    function validarEtapa1() {
        const ids = ['i-data', 'i-hora', 'i-valor', 'i-nome', 'i-cnpj', 'i-banco', 'i-agencia', 'i-conta'];
        for (let id of ids) {
            const input = document.getElementById(id);
            if (!input.value) {
                console.error(`Etapa 1 inválida = tem vazio no campo ${id}`);
                return 'INVÁLIDO';
            }
        }
        return 'VÁLIDO';
    }

    function validarEtapa2() {
        const statusSelect = document.getElementById('status-select');
        const selectedValue = statusSelect.value;
        if (selectedValue === '[STATUS]') {
            console.error('Etapa 2 inválida = é status');
            return 'INVÁLIDO';
        }
        if (selectedValue === 'Outro') {
            const iStatus = document.getElementById('i-status');
            if (!iStatus.value) {
                console.error('Campo iStatus está vazio');
                return 'INVÁLIDO';
            }
        }
        return 'VÁLIDO';
    }

    function validarEtapa3() {
        const pixSelect = document.getElementById('pix-select');
        const selectedValue = pixSelect.value;

        if (selectedValue === '[CHAVE PIX]') {
            console.error('Etapa 3 inválida = é chave pix');
            return 'INVÁLIDO';
        }

        if (selectedValue === 'Não utilizada') {
            return 'VÁLIDO';
        }

        if (selectedValue === 'Sim') {
            const iPix = document.getElementById('i-pix');
            if (!iPix.value) {
                console.error('Campo iPix está vazio');
                return 'INVÁLIDO';
            }
        }
        return 'VÁLIDO';
    }

    function validarFormulario() {
        const etapa1 = validarEtapa1();
        const etapa2 = validarEtapa2();
        const etapa3 = validarEtapa3();

        if (etapa1 === 'VÁLIDO' && etapa2 === 'VÁLIDO' && etapa3 === 'VÁLIDO') {
            botaoImprimir.classList.add('botao-habilitado');
            botaoImprimir.classList.remove('botao-desabilitado');
        } else {
            botaoImprimir.classList.add('botao-desabilitado');
            botaoImprimir.classList.remove('botao-habilitado');
        }
    }

    const ids = [
        'i-data', 'i-hora', 'i-valor', 'i-nome', 'i-cnpj', 'i-banco', 'i-agencia', 
        'i-conta', 'status-select', 'i-status', 'pix-select', 'i-pix'
    ];
    ids.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', validarFormulario);
            element.addEventListener('change', validarFormulario);
        }
    });

    if (botaoImprimir && secaoConfig) {
        botaoImprimir.addEventListener('click', () => {
            if (!botaoImprimir.classList.contains('botao-desabilitado')) {
                secaoConfig.classList.add('ocultar-na-impressao');
                documento.style.border = "0px solid #001001";
                window.print();
                setTimeout(() => {
                    secaoConfig.classList.remove('ocultar-na-impressao');
                    documento.style.border = "2px solid #001001";
                }, 500);
            }
        });
    }
});
