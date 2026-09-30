function sumar(a,b){
    return a+b;
}
function sumarNumeros(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado= sumar(numero1, numero2);
    document.getElementById("resultado").textContent=resultado;
    alert(resultado);
    console.log("La suma es: ",resultado);
}
// --- FUNCIONES MATEMÁTICAS PURAS ---
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero";
    }
    return a / b;
}

// --- FUNCIONES QUE INTERACTÚAN CON EL HTML ---

// SUMAR
function sumarNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = sumar(numero1, numero2);
    document.getElementById("resultado").textContent = resultado;
    alert(resultado);
    console.log("La suma es: ", resultado);
}

// RESTAR
function restarNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = restar(numero1, numero2);
    document.getElementById("resultado").textContent = resultado;
    alert(resultado);
    console.log("La resta es: ", resultado);
}

// MULTIPLICAR
function multiplicarNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = multiplicar(numero1, numero2);
    document.getElementById("resultado").textContent = resultado;
    alert(resultado);
    console.log("La multiplicación es: ", resultado);
}

// DIVIDIR
function dividirNumeros() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = dividir(numero1, numero2);
    document.getElementById("resultado").textContent = resultado;
    alert(resultado);
    console.log("La división es: ", resultado);
}