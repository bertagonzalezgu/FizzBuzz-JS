
// Lógica

export let arrayObjects = [] // Mover el array de objetos en el cálculo porque forma parte de la lógica para añadir después con el número y el reultado

export function calculateResult(numberInput){

    let firstResponse = 'Fizz'
    let secondResponse = 'Buzz'
    let thirdResponse = `${firstResponse}${secondResponse}`
    let result;

    let errorMessage = 'El número introducido no es válido'

    // Validación // Tengo que poner la validación con la lógica para que pase el test y quitar el alert para que lo lea

    if(isNaN(numberInput) || numberInput === ''){
        return errorMessage;
    }

    if((numberInput % 3 === 0) && (numberInput % 5 === 0)){
        result = thirdResponse
    } else if(numberInput % 5 === 0){
        result = secondResponse
    } else if(numberInput % 3 === 0){
        result = firstResponse
    } else{
        result = numberInput
    }

    let object = {  number: `${numberInput}`,
                    result: `${result}` };
    
    arrayObjects.push(object)
    return result;
}

    