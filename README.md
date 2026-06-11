# FizzBuzz JS

Prueba de nivel técnica resuelta en JavaScript moderno (ES6+). 
Aplicación web que permite al usuario introducir un número y obtener su resultado FizzBuzz, manteniendo un historial de entradas y resultados.

## Descripción

El usuario introduce un número en un campo de entrada y al pulsar el botón se muestra el resultado según las reglas de FizzBuzz:

- Si el número es divisible por **3** → `Fizz`
- Si el número es divisible por **5** → `Buzz`
- Si el número es divisible por **3 y 5** → `FizzBuzz`
- Si no es divisible por ninguno → el número mismo
- Si la entrada está vacía o no es numérica → mensaje de error

## Cómo ejecutar

Abre el archivo directamente en el navegador:

```
index.html
```

No requiere servidor ni instalación adicional.

## Tests

Los tests están implementados con Vitest.

### Instalar dependencias

```bash
npm install
```

### Ejecutar tests

```bash
npm test
```

## Estructura del proyecto

```
FizzBuzz-JS/
├── src/
│   └── scripts/
│       ├── fizzbuzz.js      # Lógica principal FizzBuzz
│       └── fizzbuzz-ui.js   # Manipulación del DOM
├── tests/
│   └── fizzbuzz.test.js     # Tests unitarios con Vitest
├── node_modules/
├── index.html               # Punto de entrada
├── index.js                 # Entry point JS
├── package.json
├── package-lock.json
└── .gitignore
```

## Tecnologías

- JavaScript (ES6+)
- HTML5
- Vitest — testing
