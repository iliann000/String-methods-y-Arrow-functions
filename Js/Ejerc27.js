//Convertir una cadena a snake_case:


const toSnakeCase = str => str.toLowerCase().replace(/ /g, '_');
console.log(toSnakeCase("Fred le dio pan a Ted y Ted le dio pan a Fred."));