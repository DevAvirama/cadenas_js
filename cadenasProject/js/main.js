/**
 * Cadenas en JavaScript
 */

//let carName1 = "Volvo XC90"; //Una cadena de texto con comillas dobles
//let carName2 = 'Volvo XC90'; //Una cadena de texto con comillas simples

//alert(carName1);

/**
 * Caracteres de escape
 */

//let text = "We are the so-called \"Vikings\" from the north."; //Uso de comillas dobles dentro de una cadena con comillas dobles
//alert(text);

//let text2 = 'S\tE\tN\tA'; // Uso de tabulación dentro de una cadena con comillas simples
//alert(text2);

/**
 * Metodos de cadenas
 */

//let text3 = "Apple, Banana, Kiwi";

//let part = text3.slice(7, 13); // Extrae una parte de la cadena desde el índice 7 hasta el índice 13 (sin incluirlo)
//Extraer parte de una cadena de texto
//alert(part);


/**
 * Encontrar la longitud de una cadena de texto
 */

//let longitud = text.length; // Propiedad para obtener la longitud de una cadena de texto
//alert(longitud);


function explicarMetodo() {
    let parrafoOriginalElemento = document.getElementById('demostracion');
    let textoOriginal = parrafoOriginalElemento.textContent;

    let palabraBuscada = "es";
    let palabraReemplazo = "FUE";
    
    let textoModificado = textoOriginal.replaceAll(palabraBuscada, palabraReemplazo);

    let resultadoDiv = document.getElementById('resultado');
    
    resultadoDiv.innerHTML = `
        <h3>Texto Original:</h3>
        <p>${textoOriginal}</p>
        <h3>Texto Modificado (usando replaceAll("es", "FUE")):</h3>
        <p>${textoModificado}</p>
    `;

}
