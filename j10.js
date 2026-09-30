function verificarPrimo() {
  const num = parseInt(document.getElementById('numPrimo').value);
  const res = document.getElementById('resultado');

  if (isNaN(num) || num <= 1) {
    res.className = "result-box";
    return res.innerHTML = "⚠️ Ingrese un número entero mayor a 1.";
  }

  let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }

  res.className = "result-box active";
  if (esPrimo) {
    res.innerHTML = `El número <b>${num}</b> <b style="color: #d87093">ES PRIMO</b>.`;
  } else {
    res.innerHTML = `El número <b>${num}</b> <b style="color: #d87093">NO es primo</b>.`;
  }
}