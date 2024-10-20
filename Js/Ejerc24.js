//Comprobar si una cadena contiene solo números:

const isNumeric = str => /^\d+$/.test(str);
console.log(isNumeric("1234567823"));