function sumarNumeros() {
  const n1 = parseFloat(document.getElementById('numero1').value);
  const n2 = parseFloat(document.getElementById('numero2').value);
  const res = document.getElementById('resultado');
  if (isNaN(n1) || isNaN(n2)) return res.innerHTML = "⚠️ Ingrese ambos números";
  res.className = "result-box active";
  res.innerHTML = `Suma: <b>${n1 + n2}</b>`;
}

function restarNumeros() {
  const n1 = parseFloat(document.getElementById('numero1').value);
  const n2 = parseFloat(document.getElementById('numero2').value);
  const res = document.getElementById('resultado');
  if (isNaN(n1) || isNaN(n2)) return res.innerHTML = "⚠️ Ingrese ambos números";
  res.className = "result-box active";
  res.innerHTML = `Resta: <b>${n1 - n2}</b>`;
}

function multiplicarNumeros() {
  const n1 = parseFloat(document.getElementById('numero1').value);
  const n2 = parseFloat(document.getElementById('numero2').value);
  const res = document.getElementById('resultado');
  if (isNaN(n1) || isNaN(n2)) return res.innerHTML = "⚠️ Ingrese ambos números";
  res.className = "result-box active";
  res.innerHTML = `Multiplicación: <b>${n1 * n2}</b>`;
}

function dividirNumeros() {
  const n1 = parseFloat(document.getElementById('numero1').value);
  const n2 = parseFloat(document.getElementById('numero2').value);
  const res = document.getElementById('resultado');
  if (isNaN(n1) || isNaN(n2)) return res.innerHTML = "⚠️ Ingrese ambos números";
  if (n2 === 0) return res.innerHTML = "⚠️ No se puede dividir entre cero";
  res.className = "result-box active";
  res.innerHTML = `División: <b>${(n1 / n2).toFixed(2)}</b>`;
}