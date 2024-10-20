//Convertir una frase a camelCase:


const toCamelCase = str => str.split(' ').map((word, index) => 
  index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
).join('');
console.log(toCamelCase("¿Puedes envasar una lata como un envasador enlata una lata?"));