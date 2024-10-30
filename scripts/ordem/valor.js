function formatValue(value) {
            return value.replace(/[^\d,]/g, '').replace(',', '.');
        }

        function formatToBRL(value) {
            return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        function calcular() {
            let iValor = document.getElementById('i-valor').value;
            iValor = formatValue(iValor);

            if (iValor > 0) {
                iValor = parseFloat(iValor);
                document.getElementById('valor').innerText = formatToBRL(iValor);
            } else {
                document.getElementById('valor').innerText = '';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('i-valor').addEventListener('input', calcular);

            document.getElementById('i-valor').addEventListener('keypress', function(event) {
                const charCode = event.charCode;
                // Permitir apenas números, vírgula e ponto
                if (charCode !== 44 && charCode !== 46 && (charCode < 48 || charCode > 57)) {
                    event.preventDefault();
                }
            });
        });