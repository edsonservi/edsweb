import gerarNome from "../../resource/gerarNome";
import gerarDocFake from "../../resource/gerarDocFake";
import gerarEndereco from "../../resource/gerarEndereco";
import { gerarData, calcularIdade } from "../../resource/gerarData";

export default function handler(req, res) {
    // DADOS PESSOAIS
    var nome = gerarNome();
    var nascimento = gerarData();
    var idade = calcularIdade(nascimento);
    var dataNascimento = nascimento.getDate().toString().padStart(2, '0') + "/" + (nascimento.getMonth() + 1).toString().padStart(2, '0') + "/" + nascimento.getFullYear();
    var photo = nome.genero === 'feminino' ? `../../resource/female_face (${Math.floor(Math.random() * 299) + 1}).png` : `../../resource/male_face (${Math.floor(Math.random() * 299) + 1}).png`;

    //CONTATO
    var mail = `${nome.nome.toLowerCase().replace(/ /g, '.')}_${nome.sobrenome.replace(/ /g, '.').toLowerCase()}@provedor.com`;
    var telefone = `+${gerarDocFake(2)} ${gerarDocFake(2)} ${gerarDocFake(2) + gerarDocFake(3)}-${gerarDocFake(4)}`;
    var endereco = gerarEndereco();

    // DOCUMENTOS
    var cpf = gerarDocFake(11);
    cpf = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9, 11)}`
    var rg = gerarDocFake(10);
    rg = `${rg.slice(0, 3)}.${rg.slice(3, 6)}.${rg.slice(6, 8)}.${rg.slice(8, 10)}`;
    var ctps = gerarDocFake(11);

    res.status(200).json({
        pessoa: {
            nome: {
                nome: nome.nome,
                sobrenome: nome.sobrenome
            },
            dados: {
                genero: nome.genero,
                dob: dataNascimento,
                idade: idade,
                urlphoto: photo
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
        },
    })
}