const textArea = document.querySelector(".text_area");
const resultado = document.querySelector(".Resultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    resultado.value = textoEncriptado  
    textArea.value = "";      
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a",".1001."],["e",".0101."],["i",".1010."],["o",".0110."],["u",".0011."]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }
    return stringEncriptada;

}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    resultado.value = textoEncriptado  
    textArea.value = ""; 
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["a",".1001."],["e",".0101."],["i",".1010."],["o",".0110."],["u",".0011."]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptada;

}

function copiarAlPortapapeles() {
    var texto = document.querySelector(".Resultado").value;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
  }
