let numero=document.getElementById("numero1")
let numero2=document.getElementById("numero2")
let solucion=document.getElementById("solucion")
let run=document.getElementById("run")
console.log("Estoy en el fichero de pruebas")

run.addEventListener("click" ,(e) => {
    let n1=numero.value
    let n2=numero2.value
    let bucle=[]
    for (i=1;i<=n2;i++){
        console.log(n1)
        bucle=bucle+n1+"<br>"
    }
    solucion.innerHTML=bucle
    console.log(bucle)
} )

