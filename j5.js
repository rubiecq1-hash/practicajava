function calcularFactorial() {
  const num = parseInt(document.getElementById('numFactorial').value);
  const res = document.getElementById('resultado');

  if (isNaN(num) || num < 0) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Ingrese un número entero mayor o igual a 0.";
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  res.className = "result-box active";
  res.innerHTML = `El factorial de <b>${num}!</b> es: <b style="color: #d87093">${factorial}</b>`;
}