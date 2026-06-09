/* To Do:
- Crear "form" html con input
- Crear boton
- Crear div con id para respuesta
- Crear 1 arrays (historial de respuestas)
- Crear variables (número ingresado en input, r1: Fizz, r2: Buzz, r3: r1 + r2, mensaje de error) para la respuesta
- Validación de campo input (validar que sea número válido) con condicional if
- Mandar mensaje de error en caso de no ser número válido
- Crear lógica, con condicional if con el resultado correspondiente
- Crear objeto con 2 values: número input + resultado correspondiente
*/

const historialResponses = []

function calculateResult(){

    // Crear variables

    let numberInput = parseInt(document.getElementById("number-input").value)
    let responseId = document.getElementById("response")

    let firstResponse = "Fizz"
    let secondResponse = "Buzz"
    let thirdResponse = `${firstResponse}${secondResponse}`
    let errorMessage = `El número introducido no és válido`
    let result;

    // Validación

    if(numberInput === isNaN){

    }


}