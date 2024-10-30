document.getElementById('i-cnpj').addEventListener('input', function() {
    var cnpj = this.value;
    document.title = "Banco BTG - Tela de Aprovação [" + cnpj + "]";
});