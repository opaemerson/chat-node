function abrirModal() {
    document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function alterarFoto(direcao) {
    indiceAtual = (indiceAtual + direcao + fotos.length) % fotos.length;
    const fotoSelecionada = document.getElementById('foto-selecionada');
    fotoSelecionada.src = "images/" + fotos[indiceAtual];
}

function atualizarCadastro(){
  const nomeInput = document.getElementById('nome');

    if (nomeInput.value.trim() === '') {
      alert('Parametro nome faltante');
      return;
    }
}