// Função para formatar a data no formato dd/mm/aaaa
        function formatDate(date) {
            const [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        }

        // Função para atualizar os campos de texto
        function updateFields() {
            const dateInput = document.getElementById("i-data");
            const timeInput = document.getElementById("i-hora");

            // Verifica se a data foi alterada
            const formattedDate = dateInput.value ? formatDate(dateInput.value) : "[DATA]";
            // Verifica se a hora foi alterada
            const formattedTime = timeInput.value ? timeInput.value : "[HORA]";

            // Atualiza os campos de texto com os valores formatados
            document.getElementById("data").textContent = formattedDate;
            document.getElementById("hora").textContent = formattedTime;
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Inicializa os campos com os valores padrão
            updateFields();

            document.getElementById("i-data").addEventListener("input", updateFields);
            document.getElementById("i-hora").addEventListener("input", updateFields);
        });