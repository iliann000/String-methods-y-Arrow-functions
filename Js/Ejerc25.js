//Remover caracteres especiales de una cadena:


const removeSpecialChars = str => str.replace(/[^a-zA-Z0-9 ]/g, '');
console.log(removeSpecialChars("Hola@parisstarantantan!"));