const botaoVerMais = document.getElementById('botao');

botaoVerMais.addEventListener('click', () => {
  const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

  mostrarMaisProjetos(projetosInativos);

  esconderBotaoVerMais();

});

function esconderBotaoVerMais() {
    botaoVerMais.classList.add('remover');
}

function mostrarMaisProjetos(projetosInativos) {
    projetosInativos.forEach((projetoInativo) => {
        projetoInativo.classList.add('ativo');
    });
}
