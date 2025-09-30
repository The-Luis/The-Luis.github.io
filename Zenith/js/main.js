// Função para carregar simuladores
async function carregarSimulador(nome) {
  const conteudo = document.getElementById("conteudo");

  try {
    // Carrega dinamicamente o script do simulador
    const modulo = await import(`./${nome}.js`);
    
    // Executa a função principal do simulador
    conteudo.innerHTML = ""; // limpa a tela
    modulo.iniciar(conteudo);
  } catch (e) {
    conteudo.innerHTML = `<p>Erro ao carregar o simulador: ${e}</p>`;
  }
}
