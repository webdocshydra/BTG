document.getElementById('status-select').addEventListener('change', function() {
    var select = this;
    var selectedOption = select.options[select.selectedIndex].value;
    var status = document.getElementById('status');
    var iStatus = document.getElementById('i-status');
    
    if (selectedOption === 'Outro') {
        iStatus.style.display = 'block';
        updateStatus();
    } else {
        iStatus.style.display = 'none';
        status.textContent = selectedOption; // Atualiza o span com a opção selecionada
    }
});

document.getElementById('i-status').addEventListener('input', updateStatus);

function updateStatus() {
    var status = document.getElementById('status');
    var iStatus = document.getElementById('i-status');
    
    if (iStatus.style.display !== 'none' && iStatus.value.trim() !== '') {
        status.textContent = iStatus.value; // Exibe [OUTRO] seguido pelo valor digitado
    } else {
        status.textContent = '[OUTRO]';
    }
}
