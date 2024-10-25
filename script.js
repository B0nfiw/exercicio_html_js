document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const mensagemErro = document.getElementById('mensagemErro');

    // Limpa a mensagem de erro anterior
    mensagemErro.style.display = 'none';
    document.getElementById('campoA').classList.remove('erro');
    document.getElementById('campoB').classList.remove('erro');

    if (campoB > campoA) {
        mensagemErro.style.display = 'none'; // Esconde a mensagem de erro
        alert('Formulário válido! O número B é maior que o número A.');
    } else {
        // Exibe a mensagem de erro
        mensagemErro.textContent = 'Formulário inválido! O número B deve ser maior que o número A.';
        mensagemErro.style.display = 'block'; // Mostra a caixa de erro
        document.getElementById('campoB').classList.add('erro'); // Adiciona a classe de erro ao campo B
    }
});