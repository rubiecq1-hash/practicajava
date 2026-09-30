function calcularMayor() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const n3 = parseFloat(document.getElementById('num3').value);
  const res = document.getElementById('resultado');

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Por favor, ingrese los 3 números.";
  }

  const mayor = Math.max(n1, n2, n3);
  res.className = "result-box active";
  res.innerHTML = `El número mayor es: <b style="color: #d87093">${mayor}</b>`;
}