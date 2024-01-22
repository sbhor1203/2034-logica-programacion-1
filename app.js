// alert('Hola Mundo');
//alert('Por favor ingrese un número');

let numeroSecreto = 6;
let numeroUsuario = prompt('Por favor ingrese un número'); // Prompt de una tira el entry con la pregunta

// variable : espacio de memoria 
// palabras reservadas : const, var, let

console.log (numeroUsuario);

if (numeroUsuario == numeroSecreto){
    /*Comilla invertida: preparate porque te voy a mandar un string con una variable (alt+96) y también se pude colocar más codigo dentro de las llaves*/ 
    alert(`Bien si es el número, el número es: ${numeroUsuario}`);
}
else{
    alert (`No es ${numeroUsuario} :( sigamos intentando`);
};






















/*
/// Desafío 

//alert ('Bienvenida y bievenido a nuestro sitio web!');

//let nombre = "Luna";
//let edad = 25;
//let numeroDeVentas = 50;
//let saldoDisponible = 1000;


alert ('¡Error! Completa todos los campos ');


let nombre = prompt('Por favor ingrese su nombre');

let edad = prompt('Por favor ingrese su edad');

if (edad >= 18){
    alert('Felicidades puedes obtener tu licencia de conducir');
}
else{
    alert('Lo lamento, aún no cumples con los requisitos de edad mínima para poder adquirir tu licencia de conducir')
};*/






