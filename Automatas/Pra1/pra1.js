const btnNumPalabras = document.getElementById("btNumPalabras")
const inputNumPalabras = document.getElementById("inputNumPalabras")
//Palabras
const divPalabras = document.getElementById("palabras")
const inputPalabras = document.getElementById("inputPalabras")
const btnPalabras = document.getElementById("btnPalabras")
const alertPalabras = document.getElementById("alertPalabras")

//Cerradura
const divCerradura = document.getElementById("lvlCerradura")
const inputCerradura = document.getElementById("inputCerradura")
const btnCalcular = document.getElementById("btnCalcular")
const resultDiv = document.getElementById("cerraduraDiv")

btnNumPalabras.addEventListener("click", () => {
    divPalabras.style.display = 'block'
})

btnPalabras.addEventListener("click", () =>{
    const numPalabras = parseInt(inputNumPalabras.value);
    const textAreaValue = inputPalabras.value;
    const palabras = textAreaValue.split(",");
    if(palabras.length > numPalabras) {
        window.alert("Numero mayor de palabras diferente al requerido")
    } else if(palabras.length < numPalabras) {
        window.alert("Numero menor de palabras diferente al requerido")
    } else
        divCerradura.style.display = "block"
    console.log(palabras)
})

btnCalcular.addEventListener(("click"), () => {
    const rowDiv = document.createElement("div")
    const pCerradura = document.createElement("p");

    pCerradura.classList.add("numPalabrasP")
    rowDiv.classList.add("row")
    const cantidadPalabras = Math.pow(parseInt(inputNumPalabras.value),parseInt(inputCerradura.value)) 
    pCerradura.innerHTML = `N# de palabras: <span>${cantidadPalabras}</span>`
    rowDiv.appendChild(pCerradura);
    const nivel = parseInt(inputCerradura.value)

    //Seleccionar Palabras Y hacer Cerradura
    const textAreaValue = inputPalabras.value;
    const palabras = textAreaValue.split(",");
    rowDiv.appendChild(calcularCerradura(palabras,nivel))

    resultDiv.appendChild(rowDiv)
    
})

function calcularCerradura(palabras, nivel){
    const pCerradura = document.createElement("p");
    pCerradura.classList.add("numPalabrasP")
    let contenidoCerradura = ""
    switch(nivel){
        case 0:
            contenidoCerradura = "λ"
            break;
        case 1:
            contenidoCerradura = palabras
            break;
        default:
            contenidoCerradura = `${nivelCerradura(palabras,nivel)}`
            break;
    }
    pCerradura.innerHTML = `L^${nivel} = { <span>${contenidoCerradura}</span> }` 
    return pCerradura
}

function nivelCerradura(palabras, nivel, auxArr = palabras){
    if(nivel == 1){
        return auxArr;
    }   else{
        const result = []
        for(const palabra of palabras){
            for(const palAux of auxArr){
                result.push(palabra + palAux)
            }
        }
        return nivelCerradura(palabras, nivel-1, result)
    }
}
