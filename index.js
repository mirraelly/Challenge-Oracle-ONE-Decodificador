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

function validaEntrada(texto) {
    if (texto === '') {
        return false;
    }

    const acentos = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëÇçðÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';

    if (texto.split('').some(caractere => acentos.indexOf(caractere) >= 0)) {
        return false;
    }

    let minusculo = texto.toLowerCase();
    if (texto == minusculo) {
        return true;
    } else {
        return false;
    }
}

function testar() {
    console.assert(criptografar("arroz") == "airroberz", "A criptografia está quebrada");
    console.assert(descriptografar("enter") == "e", "A descriptografia está quebrada");
}

// console.log(criptografar("paralelepipedo quebrado")); exemplo: "paralelepipedo quebrado"


const textareaCriptografar = document.querySelector('#textoCriptografar');
const textareaCriptografado = document.querySelector('#textoCriptografado');
const divNenhumTexto = document.querySelector('.nenhum-texto');
const divTextoCriptografia = document.querySelector('.texto-criptografia');

const buttonCriptografar = document.querySelector('#criptografar');
const buttonDescriptografar = document.querySelector('#descriptografar');
const buttonApagar = document.querySelector('#apagar');
const buttonCopiar = document.querySelector('#copiar');

buttonCriptografar.addEventListener('click', () => {
    const textoOriginal = textareaCriptografar.value;

    if (validaEntrada(textoOriginal)) {
        const textoFinal = criptografar(textoOriginal);

        textareaCriptografado.value = textoFinal;
        divNenhumTexto.classList.remove('display-block');
        divNenhumTexto.classList.add('display-none');
        divTextoCriptografia.classList.remove('display-none');
        divTextoCriptografia.classList.add('display-block');
    } else {
        alert('O texto digitado possui letras maiúsculas e/ou com acentos.\n' +
            'Por favor, digite um texto válido!')
    }
});

buttonDescriptografar.addEventListener('click', () => {
    const textoOriginal = textareaCriptografar.value;

    if (validaEntrada(textoOriginal)) {
        const textoFinal = descriptografar(textoOriginal);

        textareaCriptografado.value = textoFinal;
        divNenhumTexto.classList.remove('display-block');
        divNenhumTexto.classList.add('display-none');
        divTextoCriptografia.classList.remove('display-none');
        divTextoCriptografia.classList.add('display-block');
    } else {
        alert('O texto digitado possui letras maiúsculas e/ou com acentos.\n' +
            'Por favor, digite um texto válido!')
    }
});

buttonCopiar.addEventListener('click', async () => {
    const texto = textareaCriptografado.value;

    await navigator.clipboard.writeText(texto);
});

buttonApagar.addEventListener('click', () => {
    textareaCriptografar.value = '';
    textareaCriptografado.value = '';
    divNenhumTexto.classList.remove('display-none');
    divNenhumTexto.classList.add('display-block');
    divTextoCriptografia.classList.remove('display-block');
    divTextoCriptografia.classList.add('display-none');
});