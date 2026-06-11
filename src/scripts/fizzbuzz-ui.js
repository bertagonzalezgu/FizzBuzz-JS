// Manipulación del DOM:

import { calculateResult } from "./fizzbuzz.js";

// Variables fuera de la función porque son comunes
export let historialResponses = [] // historial de resultados obtenidos, no de inputs!!!

export function showResult(){

    // Crear variables

    let numberInput = parseInt(document.getElementById("number-input").value)
    let responseId = document.getElementById("response")
    
    let result = calculateResult(numberInput)

    historialResponses.push(result)
    console.log(historialResponses)

    // Respuesta

    responseId.innerHTML = `Resultado: ${result}<br>
    Historial de resultados: ${historialResponses.join(', ')}`

}





    