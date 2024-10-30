document.addEventListener('DOMContentLoaded', (event) => {
            // Função para gerar um código aleatório de 24 caracteres (apenas letras maiúsculas e números)
            function generateRandomCode(length) {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let result = '';
                const charactersLength = characters.length;
                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(Math.random() * charactersLength);
                    result += characters.charAt(randomIndex);
                }
                return result;
            }

            // Obtém o input
            const input = document.getElementById('input-autenticacao');

            // Gera o código aleatório de 24 caracteres
            const randomCode = generateRandomCode(24);

            // Define o valor do input como o código aleatório gerado
            input.value = randomCode;
        });