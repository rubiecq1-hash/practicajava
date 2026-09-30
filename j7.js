function calcularPromedio() {
  const n1 = parseFloat(document.getElementById('nota1').value);
  const n2 = parseFloat(document.getElementById('nota2').value);
  const n3 = parseFloat(document.getElementById('nota3').value);
  const res = document.getElementById('resultado');

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Por favor, ingrese las 3 notas.";
  }

  const promedio = (n1 + n2 + n3) / 3;
  const estado = promedio >= 10.5 ? '<b style="color: #2b2d42">APROBADO</b>' : '<b style="color: #d87093">DESAPROBADO</b>';

  res.className = "result-box active";
  res.innerHTML = `
    Promedio: <b style="color: #d87093">${promedio.toFixed(2)}</b><br>
    Estado: ${estado}
  `;
}