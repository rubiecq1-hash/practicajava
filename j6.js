function generarTabla() {
  const num = parseInt(document.getElementById('numTabla').value);
  const res = document.getElementById('resultado');

  if (isNaN(num)) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Por favor, ingrese un número.";
  }

  let html = `<b style="color: #d87093">Tabla del ${num}:</b><br><br>`;
  for (let i = 1; i <= 10; i++) {
    html += `${num} × ${i} = <b>${num * i}</b><br>`;
  }

  res.className = "result-box active";
  res.innerHTML = html;
}