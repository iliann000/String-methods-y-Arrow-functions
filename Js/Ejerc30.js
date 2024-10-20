//Contar la frecuencia de caracteres en una cadena:


const charFrequency = str => [...str].reduce((acc, char) => {acc[char] = acc[char] ? acc[char] + 1 : 1;
return acc;
}, {});
console.log(charFrequency("abbccc"));