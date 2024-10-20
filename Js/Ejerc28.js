//Capitalizar todas las palabras de una frase:

const capitalizeWords = str => str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(capitalizeWords("One-One era un caballo de carreras. Two-Two también lo era. One-One ganó una carrera. Two-Two también ganó una."));