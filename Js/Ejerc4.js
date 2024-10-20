//Crea una función que verifique si una palabra específica está contenida dentro de
//una cadena usando includes().
//Ejemplo: "JavaScript es genial", "genial" → true

const containsWord = (str, word) => str.includes(word);
console.log(containsWord("La lluvia es lo mejor", "mejor"));
