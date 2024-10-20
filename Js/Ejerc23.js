//Truncar una cadena a un número específico de caracteres:


const truncateString = (str, num) => str.length > num ? str.slice(0, num) + '...' : str;
console.log(truncateString("Double bubble gum, bubbles double.", 10));