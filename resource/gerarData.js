/**
 * Função para gerar uma data de nascimento aleatória entre 15 e 60 anos,
 * ou, se fornecido um número de dias, retorna a data atual subtraída por essa quantidade de dias.
 *
 * @param {number} [dias] - Opcional. A quantidade de dias a subtrair da data atual para gerar a data de nascimento.
 * @returns {Date} - Um objeto Date representando a data de nascimento gerada aleatoriamente ou a data atual subtraída pelos dias fornecidos.
 */
export function gerarData(dias) {
    const hoje = new Date();

    // Se dias não for fornecido ou for inválido, gera uma data aleatória entre 15 e 60 anos
    if (!dias || isNaN(dias)) {
        const idadeMinima = 15;
        const idadeMaxima = 60;
        const diasIdadeMinima = idadeMinima * 365; // Considerando anos bissextos
        const diasIdadeMaxima = idadeMaxima * 365; // Considerando anos bissextos
        const diasAleatorios = Math.floor(Math.random() * (diasIdadeMaxima - diasIdadeMinima + 1)) + diasIdadeMinima;
        hoje.setDate(hoje.getDate() - diasAleatorios);
    } else {
        // Se dias for válido, subtrai os dias da data atual
        hoje.setDate(hoje.getDate() - dias);
    }

    return hoje;
}

/**
 * Função para calcular a idade com base na data de nascimento.
 *
 * @param {Date} dataNascimento - Um objeto Date representando a data de nascimento.
 * @returns {number} - A idade calculada com base na data de nascimento.
 */
export function calcularIdade(dataNascimento) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    // Verifica se ainda não fez aniversário no ano atual
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

/**
 * Função para gerar uma data de nascimento aleatória entre 15 e 60 anos,
 * ou, se fornecido um número de dias, retorna a data atual subtraída por essa quantidade de dias.
 * É uma exportação padrão para permitir que a função seja importada por meio de um nome personalizado.
 *
 * @param {number} [dias] - Opcional. A quantidade de dias a subtrair da data atual para gerar a data de nascimento.
 * @returns {Date} - Um objeto Date representando a data de nascimento gerada aleatoriamente ou a data atual subtraída pelos dias fornecidos.
 */
export default gerarData;