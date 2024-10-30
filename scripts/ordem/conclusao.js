    document.addEventListener("DOMContentLoaded", function() {
        const radios = document.querySelectorAll('.segmented-control input[type="radio"]');
        const conclusaoDescricao = document.getElementById('conclusao-descricao');
        const iConclusao = document.getElementById('i-conclusao');
        const conclusao = document.getElementById('conclusao');

        function toggleElementDisplay() {
            if (radios[0].checked) {
                conclusaoDescricao.style.display = 'none';
                iConclusao.style.display = 'none';
                conclusao.style.display = 'none';
            } else {
                conclusaoDescricao.style.display = 'block';
                iConclusao.style.display = 'block';
                conclusao.style.display = 'block';
            }
        }

        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                radios.forEach(otherRadio => {
                    if (otherRadio !== this) {
                        otherRadio.checked = false;
                    }
                });
                toggleElementDisplay();
            });
        });

        toggleElementDisplay(); // Chamar a função uma vez para garantir que os elementos estejam configurados corretamente no carregamento do documento
    });