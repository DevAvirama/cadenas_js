/**
 * Ecuación de String padStart
 */

function padStart(){
    let num = "23";
    let numFormateado = num.padStart(5, "0");

    document.getElementById("resultado").textContent = "Num generado: " + numFormateado;
}
