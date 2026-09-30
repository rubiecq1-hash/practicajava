function verificarCapicua() {
  const val = document.getElementById('numCapicua').value.trim();
  const num = parseInt(val);
  const res = document.getElementById('resultado');

  if (isNaN(num) || val.length !== 3 || num < 100 || num > 999) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Ingrese un número entero de exactamente 3 cifras.";
  }

  res.className = "result-box active";
  if (val[0] === val[2]) {
    res.innerHTML = `El número <b>${num}</b> <b style="color: #d87093">ES CAPICÚA</b>.`;
  } else {
    res.innerHTML = `El número <b>${num}</b> <b style="color: #d87093">NO es capicúa</b>.`;
  }
}