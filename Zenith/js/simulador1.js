export function iniciar(container) {
  container.innerHTML = `
    <h2>Simulador 1: Cálculo de Massa Molar</h2>
    <input id="massa" type="number" placeholder="Massa (g)">
    <input id="mm" type="number" placeholder="Massa Molar (g/mol)">
    <button id="calc">Calcular mols</button>
    <p id="resultado"></p>
  `;

  document.getElementById("calc").onclick = () => {
    const massa = parseFloat(document.getElementById("massa").value);
    const mm = parseFloat(document.getElementById("mm").value);
    const mols = massa / mm;
    document.getElementById("resultado").innerText = 
      isNaN(mols) ? "Preencha os valores corretamente!" : `Resultado: ${mols.toFixed(3)} mol`;
  };
}
