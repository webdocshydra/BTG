document.getElementById('pix-select').addEventListener('change', function() {
    var select = this;
    var selectedOption = select.options[select.selectedIndex].value;
    var pix = document.getElementById('pix');
    var iPix = document.getElementById('i-pix');

    if (selectedOption === 'Sim') {
        iPix.style.display = 'block';
        updatePix();
    } else {
        iPix.style.display = 'none';
        pix.textContent = selectedOption; // Atualiza o span com a opção selecionada
    }
});

document.getElementById('i-pix').addEventListener('input', updatePix);

function updatePix() {
    var pix = document.getElementById('pix');
    var iPix = document.getElementById('i-pix');
    
    if (iPix.style.display !== 'none' && iPix.value.trim() !== '') {
        pix.textContent = iPix.value; // Exibe [OUTRO] seguido pelo valor digitado
    } else {
        pix.textContent = '[CHAVE PIX]';
    }
}
