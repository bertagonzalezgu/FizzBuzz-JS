import { describe, test, expect, beforeEach } from "vitest";

import { showResult } from "../src/scripts/fizzbuzz-ui";
import { calculateResult } from "../src/scripts/fizzbuzz";

import { historialResponses } from "../src/scripts/fizzbuzz-ui";
import { arrayObjects } from "../src/scripts/fizzbuzz";

describe('Validación de FizzBuzz', () => {

  beforeEach (()=> {
    arrayObjects.length = 0;
    });

  test('Given un número 9 / When el número es procesado / Then se muestra "Fizz"', () => {

  expect(calculateResult(9)).toBe("Fizz")
  });

  test('Given un número 10 / When el número es procesado / Then se muestra "Buzz"', () => {

  expect(calculateResult(10)).toBe("Buzz")
  });

  test('Given un número 15 / When el número es procesado / Then se muestra "FizzBuzz"', () => {

  expect(calculateResult(15)).toBe("FizzBuzz")
  });

  test('Given un número 7 / When el número es procesado / Then se muestra 7', () => {

  expect(calculateResult(7)).toBe(7)
  });

  test('Given una entrada "Hola" / When el usuario intenta procesar la entrada / Then se muestra un mensaje de error', () => {
    
  expect(calculateResult("Hola")).toBe("El número introducido no es válido")
  
  });

  test('Given un número 9 y un número 10 / When el usuario los ingresa secuencialmente / Then el historial muestra "9: Fizz" y "10: Buzz"', () => {
    
    calculateResult(9);
    calculateResult(10);

  expect(arrayObjects).toEqual([{ number: "9",
                              result: "Fizz" },
                            { number: "10",
                              result: "Buzz" }])
  
  });

});