
// Lógica

export function calculateResult(numberInput){

    let firstResponse = 'Fizz'
    let secondResponse = 'Buzz'
    let thirdResponse = `${firstResponse}${secondResponse}`
    let result;

    if((numberInput % 3 === 0) && (numberInput % 5 === 0)){
        result = thirdResponse
    } else if(numberInput % 5 === 0){
        result = secondResponse
    } else if(numberInput % 3 === 0){
        result = firstResponse
    } else{
        result = numberInput
    }

    return result;
}

    