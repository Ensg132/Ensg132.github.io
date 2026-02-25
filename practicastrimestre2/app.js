

/* Imprime en pantalla un numero aleatorio*/
let abc="abcdefghijklmnñopqrstuxvwyzABCDEEFGHIJKLMNÑOPQRSTUXVWYZ"
let frase="ES LA CASA DE PUCHUMOUSEÑ"
let paso=3
console.log(frase[0]) //c
console.log(frase[3]) //a
for (i=0;i<frase.length;i++) {
    let posicion=abc.indexOf(frase[i])
    console.log(frase[i]+" Su nueva letra es "+abc[posicion+paso])
}

let min=8
let max=80

let caracteres = "abcdefghijklmnopqrstuvwxyz";
let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let caracteresNumeros = "0123456789";
let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";
function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let char=caracteres[numeroAleatorio(0,9)]
let may=caracteresMayusculas[numeroAleatorio(0,9)]
let num=caracteresNumeros[numeroAleatorio(0,9)]
let esp=caracteresEspeciales[numeroAleatorio(0,9)]
let password=char+may+num+esp
password = password.split('').sort(() => Math.random() - 0.5).join('');
console.log(password)