//Comprobar si una palabra es un palíndromo:

const isPalindrome = str => str === str.split('').reverse().join('');
console.log(isPalindrome("oso"));