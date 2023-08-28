let nPalabras1
let nPalabras2
let lenguaje1 = []
let lenguaje2 = []

const btnNPalabras1 = document.getElementById("btnNPal1")
const btnNPalabras2 = document.getElementById("btnNPal2")

const divPedirPalabras1 = document.getElementById("divIptPalabras1")
const lblLen1 = document.getElementById("lblLen1")
const btnPalabras1 = document.getElementById("btnPal1")

const divPedirPalabras2 = document.getElementById("divIptPalabras2")
const lblLen2 = document.getElementById("lblLen2")
const btnPalabras2 = document.getElementById("btnPal2")

const btnCalcular = document.getElementById("btnCalcular")
const pResultado = document.getElementById("pResultado")

btnNPalabras1.addEventListener("click", () => {
    const nPalabrasLeng1 = parseInt((document.getElementById("nPal1")).value)
    nPalabras1 = nPalabrasLeng1
    divPedirPalabras1.style.display = "block"
    lblLen1.innerHTML = `Introduzca ${nPalabras1} Palabras separadas por comas`
})

btnPalabras1.addEventListener("click", () => {
    const textAreaValue1 = ((document.getElementById("textarea1")).value).split(",")  
    lenguaje1 = textAreaValue1
})

btnNPalabras2.addEventListener("click", () => {
    const nPalabrasLeng2 = parseInt((document.getElementById("nPal2")).value)
    nPalabras2 = nPalabrasLeng2
    divPedirPalabras2.style.display = "block"
    lblLen2.innerHTML = `Introduzca ${nPalabras2} Palabras separadas por comas`
})

btnPalabras2.addEventListener("click", () => {
    const textAreaValue2 = ((document.getElementById("textarea2")).value).split(",")  
    lenguaje2 = textAreaValue2
})

btnCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    const operacion = (document.getElementById("menu")).value
    menu(operacion)
})

function menu(opcion){
    let txtContt = ""
    const divRes = document.getElementById("divResultado")
    const newParagraph = document.createElement("p");
    switch(opcion){
        case "interseccion":
            txtContt = "∩"
            newParagraph.innerHTML = `${interseccion()}`
            break;
        case "diferencia":
            txtContt = "−"
            newParagraph.innerHTML = `${diferencia()}`
            break;
        case "concatenacion":
            txtContt = "•"
            newParagraph.innerHTML = `${concatenar()}`
            break;
        case "salir":
            location.reload();
            break;
        default:
            pResultado.textContent = "Valor Fuera de Opciones"
            break;
    }
    pResultado.innerHTML = `L1: ${lenguaje1} ${txtContt} ${lenguaje2} :L2`
    divRes.appendChild(newParagraph);
}

function interseccion(){
    const resOperation = []
    for(const element of lenguaje1){
        if(lenguaje2.includes(element)){
            resOperation.push(element)
        }
    }
    if(resOperation.length == 0){
        return "∅"
    }
    return resOperation.join(",");
}

function diferencia(){
    const resOperation = []
    for(const element of lenguaje1){
        if(!lenguaje2.includes(element)){
            resOperation.push(element)
        }
    }
    if(resOperation.length == 0)
        return "∅"
    return resOperation.join(",");
}

function concatenar(){
    const resOperation = []
    for(const element of lenguaje1){
        for(const pal2 of lenguaje2){
            resOperation.push(element+pal2)
        }
    }
    if(resOperation.length == 0)
        return "∅"
    return resOperation.join(",");
}