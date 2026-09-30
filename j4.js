// Función para determinar el nombre del día según el número ingresado (1 - 7)
function determinarDia() {
  const input = document.getElementById('numDia');
  const resultado = document.getElementById('resultado');
  const numero = parseInt(input.value);

  // Arreglo con los nombres de los días de la semana
  const dias = [
    "Lunes", 
    "Martes", 
    "Miércoles", 
    "Jueves", 
    "Viernes", 
    "Sábado", 
    "Domingo"
  ];

  // Validación: verificar si el número está dentro del rango 1 a 7
  if (isNaN(numero) || numero < 1 || numero > 7) {
    resultado.className = "result-box";
    resultado.innerHTML = "⚠️ <b>Por favor, ingrese un número válido del 1 al 7.</b>";
    return;
  }

  // Obtener el día correspondiente (se resta 1 porque las listas en JS empiezan en 0)
  const diaNombre = dias[numero - 1];
  
  // Mostrar el resultado en el HTML
  resultado.className = "result-box active";
  resultado.innerHTML = `El día ${numero} corresponde a: <span class="result-highlight">${diaNombre}</span>`;
}