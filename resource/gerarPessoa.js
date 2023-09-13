import { gerarNome } from "./gerarNome.js";
import { gerarDocFake } from "./gerarDocFake.js";
import { gerarEndereco } from "./gerarEndereco.js";
import { gerarData, calcularIdade } from "./gerarData.js";

export function gerarPessoa() {
    // DADOS PESSOAIS
    var nome = gerarNome();

    // DADOS PESSOAIS
    var nascimento = gerarData();
    var idade = calcularIdade(nascimento);
    var dataNascimento = nascimento.getDate().toString().padStart(2, '0') + "/" + (nascimento.getMonth() + 1).toString().padStart(2, '0') + "/" + nascimento.getFullYear();
    var photo = nome.genero === 'feminino' ? `female/facewoman (${Math.floor(Math.random() * 3819) + 1}).png` : `male/faceman (${Math.floor(Math.random() * 2986) + 1}).png`;


    //CONTATO
    var mail = `${nome.nome.toLowerCase()}_${nome.sobrenome.replace(/ /g, '.').toLowerCase()}@provedor.com`;
    var telefone = `(${gerarDocFake(2)}) ${gerarDocFake(4)} - ${gerarDocFake(4)}`;
    var endereco = gerarEndereco();

    // DOCUMENTOS
    var cpf = gerarDocFake(11);
    cpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
    var rg = gerarDocFake(10);
    rg = `${rg.slice(0, 3)}.${rg.slice(3, 6)}.${rg.slice(6, 8)}.${rg.slice(8, 10)}`;
    var ctps = gerarDocFake(11);

    var pessoa = {
        nome: {
            nome: nome.nome,
            sobrenome: nome.sobrenome
        },
        dados: {
            genero: nome.genero,
            dob: dataNascimento,
            idade: idade,
            photo: photo
        },
        contato: {
            telefone: telefone,
            email: mail,
            endereco: endereco
        },
        docs: {
            cpf: cpf,
            rg: rg,
            ctps: ctps
        }
    }
    //return JSON.stringify(pessoa, null, 2);
    return pessoa;
}

export default gerarPessoa;
