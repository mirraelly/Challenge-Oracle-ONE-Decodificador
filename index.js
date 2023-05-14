function criptografar(texto) {
    let resultado = texto.replaceAll("e", "enter");
    resultado = resultado.replaceAll("i", "imes");
    resultado = resultado.replaceAll("a", "ai");
    resultado = resultado.replaceAll("o", "ober"); 
    resultado = resultado.replaceAll("u", "ufat");
    return resultado;
}

function descriptografar(texto) {
    let resultado = texto.replaceAll("enter", "e");
    resultado = resultado.replaceAll("imes", "i");
    resultado = resultado.replaceAll("ai", "a");
    resultado = resultado.replaceAll("ober", "o");
    resultado = resultado.replaceAll("ufat", "u");
    return resultado;
}

function testar() {
    console.assert(criptografar("arroz") == "airroberz", "A criptografia está quebrada");
    console.assert(descriptografar("enter") == "e", "A descriptografia está quebrada");
}

// console.log(criptografar("paralelepipedo quebrado")); exemplo: "paralelepipedo quebrado"