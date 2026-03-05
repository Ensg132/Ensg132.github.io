
/* ACTIVIDAD 3 */
let abc="abcdefghijklmnñopqrstuxvwyzABCDEEFGHIJKLMNÑOPQRSTUXVWYZ"
let frase="hola"
let paso=3
for (i=0;i<frase.length;i++) {
    let posicion=abc.indexOf(frase[i])
    console.log(frase[i]+" Su nueva letra es "+abc[posicion+paso])
}
