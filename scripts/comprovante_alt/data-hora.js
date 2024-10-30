// Função para formatar a data no formato dd/mm/aaaa
        function formatDate(date) {
            const [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        }

        // Função para atualizar os campos de texto
        function updateFields() {
            const dateInput = document.getElementById("data");
            const timeInput = document.getElementById("hora");

            const formattedDate = dateInput.value ? formatDate(dateInput.value) : "";
            const formattedTime = timeInput.value || "";

            document.getElementById("input-data").value = formattedDate;
            document.getElementById("input-hora").value = formattedTime;
        }

        // Adiciona eventos para os inputs de data e hora
        document.getElementById("data").addEventListener("change", updateFields);
        document.getElementById("hora").addEventListener("change", updateFields);