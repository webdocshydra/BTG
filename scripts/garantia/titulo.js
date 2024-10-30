document.getElementById('i-cliente').addEventListener('input', function() {
            var cliente = this.value;
            document.title = "Garantia de Liberação [BANCO BTG] - " + cliente;
        });