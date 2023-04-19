// Ex 1
type Pessoa = {
    nome : string
    profissao : string
    idade: number
    assunto : Array<string>
}

//Ex 2
const eu : Pessoa = {
    nome :  "Marco Antonio Batista de Souza",
    profissao : "Desenvolvedor fullstack Jr",
    idade : 22,
    assunto : ["Jogos", "Tecnologia", "Série", "Filmes", "Filosofia", "Esportes"]
}

//Ex 3
function LerObjetoPessoa(obj){
    return obj.assunto;
}

//Ex 4
function LerObjetoPessoaTipado(obj : Pessoa) : Array<string>{
    return obj.assunto;
}

//Ex 5
enum MateriasCurso {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

//Ex 6
type Professor = {
    nome : string
    materia : Array<MateriasCurso>
}

//Ex 7
const Alan : Professor = {
    nome : "Alan",
    materia : [MateriasCurso.Angular, MateriasCurso.Git, MateriasCurso.Typescript]
}

const Nathan : Professor = {
    nome : "Nathan",
    materia : [MateriasCurso.Angular, MateriasCurso.Git]
}

//Ex 8
const Professores : Array<Professor> = [Alan, Nathan]

//Ex 9
function NomeProfessores (professores : Array<Professor> ) : Array<string> {
    let Nomes : Array<string> = new Array<string>();
    professores.forEach(element => {
        Nomes.push(element.nome);
    });
    return Nomes;
}

//Ex 10
function MateriasProfessores(professores : Array<Professor>) : Array<MateriasCurso> {
    let Materias : Array<MateriasCurso> = new Array<MateriasCurso>();
    professores.forEach(element => {
        !element.materia.map(MateriasDoProfessor => {
            if(Materias.indexOf(MateriasDoProfessor) === -1)
                Materias.push(MateriasDoProfessor)
        });
    });
    return Materias;
}

//Ex 11
function ProfessorTypescript (professores : Array<Professor>) : Professor{
    let professorSelecionado : Professor = {
       nome : "Nenhum professor encontrado",
        materia: [MateriasCurso.Typescript]
      }

    professores.forEach(professor => {
        if(professor.materia.indexOf(MateriasCurso.Typescript)!== -1){
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
