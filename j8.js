function calcularArea() {
  const radio = parseFloat(document.getElementById('radio').value);
  const res = document.getElementById('resultado');

  if (isNaN(radio) || radio <= 0) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Ingrese un radio mayor a 0.";
  }

  const area = Math.PI * Math.pow(radio, 2);
  res.className = "result-box active";
  res.innerHTML = `El área del círculo es: <b style="color: #d87093">${area.toFixed(2)}</b>`;
}