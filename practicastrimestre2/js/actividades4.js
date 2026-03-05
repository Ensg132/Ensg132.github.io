let letras = "abcdefghijklmnopqrstuvwxyz";
let mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeros = "0123456789";
let especiales = "!@#$%^&*";

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarPassword(longitud) {

    if (longitud < 8 || longitud > 50) {
        console.log("La longitud debe estar entre 8 y 50");
        return;
    }

    let password = "";

    password += mayus[numeroAleatorio(0, mayus.length - 1)];

    password += numeros[numeroAleatorio(0, numeros.length - 1)];

    password += especiales[numeroAleatorio(0, especiales.length - 1)];

    while (password.length < longitud) {
        password += letras[numeroAleatorio(0, letras.length - 1)];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

console.log(generarPassword(10));
