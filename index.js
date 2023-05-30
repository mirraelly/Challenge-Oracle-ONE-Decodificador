
/**
 * Função de criptografia. 
 * A implementação atual realiza operações de substituição 
 * de caracteres para ofuscar o texto original.
 * Nota: A ordem da substituição das vogais interfere no resultado correto.
 * @param {string} texto 
 * @returns retorna a string criptografada
 */
function criptografar(texto) {
    let resultado = texto.replaceAll("e", "enter");
    resultado = resultado.replaceAll("i", "imes");
    resultado = resultado.replaceAll("a", "ai");
    resultado = resultado.replaceAll("o", "ober");
    resultado = resultado.replaceAll("u", "ufat");
    return resultado;
}

/**
 * Função de descriptografar. 
 * A implementação atual realiza operações de substituição 
 * de caracteres para retornar o texto ofuscado a sua forma original.
 * Nota: A ordem da substituição das vogais interfere no resultado correto.
 * @param {string} texto 
 * @returns retorna a string descriptografada
 */
function descriptografar(texto) {
    let resultado = texto.replaceAll("enter", "e");
    resultado = resultado.replaceAll("imes", "i");
    resultado = resultado.replaceAll("ai", "a");
    resultado = resultado.replaceAll("ober", "o");
    resultado = resultado.replaceAll("ufat", "u");
    return resultado;
}

/**
 * Função de validação. 
 * A implementação atual realiza a verificação de caracteres proibidos.
 * @param {string} texto 
 * @returns retorna verdadeiro, caso o texto de entrada não contenha caracteres proibidos.
 * E falso, caso contrário.
 */
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

// Variáveis para armazenar elementos da página.
const textareaCriptografar = document.querySelector('#textoCriptografar');
const textareaCriptografado = document.querySelector('#textoCriptografado');
const divNenhumTexto = document.querySelector('.nenhum-texto');
const divTextoCriptografia = document.querySelector('.texto-criptografia');

// Variáveis para armazenar elementos que o usuário utiliza.
const buttonCriptografar = document.querySelector('#criptografar');
const buttonDescriptografar = document.querySelector('#descriptografar');
const buttonApagar = document.querySelector('#apagar');
const buttonCopiar = document.querySelector('#copiar');

// Registrando o evento de clique para quando o usuário 
// solicita a criptografia do texto digitado. 
buttonCriptografar.addEventListener('click', () => {
    const textoOriginal = textareaCriptografar.value;

    if (validaEntrada(textoOriginal)) {
        const textoFinal = criptografar(textoOriginal);

        atualizarInterface(textoFinal);
    } else {
        alert('O texto digitado possui letras maiúsculas e/ou com acentos.\n' +
            'Por favor, digite um texto válido!')
    }
});

// Registrando o evento de clique para quando o usuário 
// solicita a descriptografia do texto digitado. 
buttonDescriptografar.addEventListener('click', () => {
    const textoOriginal = textareaCriptografar.value;

    if (validaEntrada(textoOriginal)) {
        const textoFinal = descriptografar(textoOriginal);
        
        atualizarInterface(textoFinal);
    } else {
        alert('O texto digitado possui letras maiúsculas e/ou com acentos.\n' +
            'Por favor, digite um texto válido!')
    }
});

// Registra o evento de clique para quando o usuário
// solicita a cópia do texto criptografado. 
buttonCopiar.addEventListener('click', async () => {
    const texto = textareaCriptografado.value;

    await navigator.clipboard.writeText(texto);
});

// Registra o evento de clique para quando o usuário
// solicita a limpeza dos campos da interface. 
buttonApagar.addEventListener('click', () => {
    textareaCriptografar.value = '';
    textareaCriptografado.value = '';
    divNenhumTexto.classList.remove('display-none');
    divNenhumTexto.classList.add('display-block');
    divTextoCriptografia.classList.remove('display-block');
    divTextoCriptografia.classList.add('display-none');
});

/**
 * Atualiza a interface do usuário com o resultado das operações.
 * @param {string} textoFinal texto para ser apresentado no painel direito
 */
function atualizarInterface(textoFinal) {
    textareaCriptografado.value = textoFinal;
    divNenhumTexto.classList.remove('display-block');
    divNenhumTexto.classList.add('display-none');
    divTextoCriptografia.classList.remove('display-none');
    divTextoCriptografia.classList.add('display-block');
}
