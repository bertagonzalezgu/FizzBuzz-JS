// Manipulación del DOM:

import { calculateResult } from "./fizzbuzz.js";

// Variables fuera de la función porque son comunes
let historialResponses = [] // historial de resultados obtenidos, no de inputs!!!
let arrayObjects = []

export function showResult(){

    // Crear variables

    let numberInput = parseInt(document.getElementById("number-input").value)
    let responseId = document.getElementById("response")

    let errorMessage = 'El número introducido no es válido'

    // Validación

    if(isNaN(numberInput) || numberInput === ''){
        alert(errorMessage)
        return;
    }
    
    let result = calculateResult(numberInput)

    let object = {
            number: `${numberInput}`,
            result: `${result}`
    };

    arrayObjects.push(object)
    console.log(arrayObjects)

    historialResponses.push(result)
    console.log(historialResponses)

    // Respuesta

    responseId.innerHTML = `Resultado: ${result}<br>
    Historial de resultados: ${historialResponses.join(', ')}`

}





    