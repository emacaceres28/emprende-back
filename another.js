const name = "martin";
//console.log({module}); 
module.exports={name};
//module es un variable global que tiene varias caracteristicas
const person = {name: "ema"};
person.name = "juan";
console.log(person.name); // usamos dot notation, para leer una propiedad y para cambiar "."
// en las variables constantes podemos modificar las propiedades internas del objeto, PERO
// no te deja sobreescribir por completo la variable constante