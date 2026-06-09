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

function calculateResult(){
    console.log('Entra la función')

    let historialResponses = []
    let arrayObjects = []

    // Crear variables

    let numberInput = parseInt(document.getElementById("number-input").value)
    console.log(numberInput)
    let responseId = document.getElementById("response")

    let firstResponse = 'Fizz'
    let secondResponse = 'Buzz'
    let thirdResponse = `${firstResponse}${secondResponse}`
    let errorMessage = 'El número introducido no es válido'
    let result;

    // Validación

    if(numberInput === NaN | numberInput === ''){
        console.log(errorMessage)
        alert(errorMessage)
        return;
    }

    // Lógica

    if((numberInput / 3) === 0){
        result = firstResponse
    } else if(numberInput / 5){
        result = secondResponse
    } else if((numberInput / 3) === 0 && (numberInput / 5) === 0){
        result = thirdResponse
    } else if(!(numberInput / 3) === 0 && (numberInput / 5) === 0){
        result = numberInput
    }

    historialResponses.push(numberInput)
    console.log(historialResponses)

    let object = [
        {
            number: `${numberInput}`,
            result: `${result}`
        }
    ];

    arrayObjects.push(object)
    console.log(arrayObjects)

    document.getElementById("response").innerHTML = `Resultado: ${result}<br>
    Historial de resultados: ${historialResponses.join(', ')}`// también devuelve objeto

}