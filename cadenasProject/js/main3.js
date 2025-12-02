// --- Ejemplo en JavaScript ---

        const textoConEspacios = "   Hola Mundo, con espacios al inicio y al final.   ";

        // Aplicamos trimStart()
        const textoLimpioAlInicio = textoConEspacios.trimStart();

        console.log("--- Texto Original (Longitud: " + textoConEspacios.length + ") ---");
        console.log("'" + textoConEspacios + "'"); 

        console.log("\n--- Texto después de trimStart() (Longitud: " + textoLimpioAlInicio.length + ") ---");
        console.log("'" + textoLimpioAlInicio + "'");
        
        // Fíjate que los espacios del final siguen ahí