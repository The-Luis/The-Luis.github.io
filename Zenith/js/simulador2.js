export function iniciar(container) {
  container.innerHTML = `
    <h2>Simulador 2: Diluição</h2>
    <input id="c1" type="number" placeholder="C1 (mol/L)">
    <input id="v1" type="number" placeholder="V1 (L)">
    <input id="v2" type="number" placeholder="V2 (L)">
    <button id="calc">Calcular C2</button>
    <p id="resultado"></p>
  `;

  document.getElementById("calc").onclick = () => {
    const c1 = parseFloat(document.getElementById("c1").value);
    const v1 = parseFloat(document.getElementById("v1").value);
    const v2 = parseFloat(document.getElementById("v2").value);
    const c2 = (c1 * v1) / v2;
    document.getElementById("resultado").innerText = 
      isNaN(c2) ? "Preencha os valores corretamente!" : `C2 = ${c2.toFixed(3)} mol/L`;
  };
}
