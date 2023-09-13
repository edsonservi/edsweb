/**
 * Função para gerar um documento fake com o número de dígitos especificado.
 *
 * @param {number} n - O número de dígitos do documento fake a ser gerado.
 * @returns {string} - Uma string contendo o documento fake gerado.
 */
export function gerarDocFake(n) {
    var numero = '';
    for (var x = 0; x < n; x++) {
        numero += `${Math.floor(Math.random() * 9)}`;
    }
    return numero;
}

/**
 * Função para gerar um documento fake com o número de dígitos especificado.
 * É uma exportação padrão para permitir que a função seja importada por meio de um nome personalizado.
 *
 * @param {number} n - O número de dígitos do documento fake a ser gerado.
 * @returns {string} - Uma string contendo o documento fake gerado.
 */
export default gerarDocFake;