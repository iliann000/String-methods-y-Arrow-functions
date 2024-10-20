//Comprimir una cadena eliminando letras consecutivas repetidas:


const compressString = str => str.split('').filter((char, index, arr) => char !== arr[index - 1]).join('');
console.log(compressString("aabbccddeeffggghhhhiijjk"));