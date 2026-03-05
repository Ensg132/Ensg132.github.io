

/* ACTIVIDAD 2 */
function generarPrimitiva() {

    let numeros = [];

    while (numeros.length < 6) {

        let num = Math.floor(Math.random() * 49) + 1;

        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }

    numeros.sort((a, b) => a - b);

    return numeros;
}

console.log("Primitiva:", generarPrimitiva());