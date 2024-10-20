//Eliminar todas las vocales de una cadena:


const removeVowels = str => str.replace(/[aeiouAEIOU]/g, '');
console.log(removeVowels("¿Qué relojes de pulsera son relojes de pulsera suizos?"));