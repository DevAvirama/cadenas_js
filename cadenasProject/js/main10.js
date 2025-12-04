function mostrar() {
    let texto = "Hola mundo";
    let resultado = texto.padEnd(15, "__*"); 

    document.getElementById("resultado").innerText = resultado;
}