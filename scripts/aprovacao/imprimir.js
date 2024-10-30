document.addEventListener('DOMContentLoaded', function () {
    var botaoImprimir = document.getElementById('imprimir');
    var config = document.getElementById('config');
    var tela = document.getElementById('tela');

    if (botaoImprimir && config) {
        botaoImprimir.addEventListener('click', function () {
            // Adiciona uma classe para ocultar a seção de configuração
            config.classList.add('ocultar-na-impressao');
            tela.style.height = '1113px';
            
            // Dispara a impressão
            window.print();

            // Remove a classe após 500 milissegundos
            setTimeout(function () {
                config.classList.remove('ocultar-na-impressao');
                tela.style.height = '860px';
            }, 500);
        });
    }
});