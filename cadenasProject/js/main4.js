function metodo(){
    let texto = document.getElementById("texto").value;
    let palabra = document.getElementById("palabra").value;
    let nuevo = document.getElementById("nuevo").value;

    let resultado = texto.replace(palabra, nuevo);
    document.getElementById("salida").textContent = resultado;

}