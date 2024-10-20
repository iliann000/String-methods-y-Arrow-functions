//Encontrar la palabra más larga en una cadena:


const longestWord = str => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');
console.log(longestWord("Las mejores tiendas de palillos chinos tienen los mejores palillos chinos."));