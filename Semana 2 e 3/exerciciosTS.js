//Ex 2
var eu = {
    nome: "Marco Antonio Batista de Souza",
    profissao: "Desenvolvedor fullstack Jr",
    idade: 22,
    assunto: ["Jogos", "Tecnologia", "Série", "Filmes", "Filosofia", "Esportes"]
};
//Ex 3
function LerObjetoPessoa(obj) {
    return obj.assunto;
}
//Ex 4
function LerObjetoPessoaTipado(obj) {
    return obj.assunto;
}
//Ex 5
var MateriasCurso;
(function (MateriasCurso) {
    MateriasCurso["Angular"] = "Angular";
    MateriasCurso["Typescript"] = "Typescript";
    MateriasCurso["Git"] = "Git";
})(MateriasCurso || (MateriasCurso = {}));
//Ex 7
var Alan = {
    nome: "Alan",
    materia: [MateriasCurso.Angular, MateriasCurso.Git, MateriasCurso.Typescript]
};
var Nathan = {
    nome: "Nathan",
    materia: [MateriasCurso.Angular, MateriasCurso.Git]
};
//Ex 8
var Professores = [Alan, Nathan];
//Ex 9
function NomeProfessores(professores) {
    var Nomes = new Array();
    professores.forEach(function (element) {
        Nomes.push(element.nome);
    });
    return Nomes;
}
//Ex 10
function MateriasProfessores(professores) {
    var Materias = new Array();
    professores.forEach(function (element) {
        !element.materia.map(function (MateriasDoProfessor) {
            if (Materias.indexOf(MateriasDoProfessor) === -1)
                Materias.push(MateriasDoProfessor);
        });
    });
    return Materias;
}
//Ex 11
function ProfessorTypescript(professores) {
    var professorSelecionado = {
        nome: "Nenhum professor encontrado",
        materia: [MateriasCurso.Typescript]
    };
    professores.forEach(function (professor) {
        if (professor.materia.indexOf(MateriasCurso.Typescript) !== -1) {
            professorSelecionado = professor;
        }
        return;
    });
    return professorSelecionado;
}
//Testes
console.log(eu);
console.log(LerObjetoPessoa(eu));
console.log(NomeProfessores(Professores));
console.log(MateriasProfessores(Professores));
console.log(ProfessorTypescript(Professores));
