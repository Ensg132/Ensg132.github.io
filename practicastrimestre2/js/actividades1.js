/* ACTIVIDAD 1 */
function tirarDado(caras) {
    return Math.floor(Math.random() * caras) + 1;
}

console.log("Resultado:", tirarDado(6));