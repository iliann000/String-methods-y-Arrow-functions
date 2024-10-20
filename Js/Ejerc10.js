//Contar ocurrencias de una letra en una cadena:

const countOccurrences = (str, char) => str.split(char).length - 1;
console.log(countOccurrences("Una Donna", "n"));
