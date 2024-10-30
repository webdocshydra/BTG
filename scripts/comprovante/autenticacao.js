// Função para gerar um valor aleatório
  function gerarValorAleatorio() {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var valor = '';
    for (var i = 0; i < 24; i++) {
      valor += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return valor;
  }

  // Função para inserir o valor gerado no elemento <span> quando a página é carregada
  window.onload = function() {
    var spanAutenticacao = document.getElementById('autenticacao');
    spanAutenticacao.textContent = gerarValorAleatorio();
  };