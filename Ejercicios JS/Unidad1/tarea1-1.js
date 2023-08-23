const inputString = "MateriaProgramacionMovil"

let palabrasSeparadas = inputString.match(/[A-Z][a-z0-9]*/g)    //Encuentra la palabra en base a la busquda de mayuscula
const palabras = palabrasSeparadas.length   //Cuenta las palabras

let snakeCase = palabrasSeparadas.join('_')   // Convierte a snake_case


console.log(palabras)
console.log(snakeCase)