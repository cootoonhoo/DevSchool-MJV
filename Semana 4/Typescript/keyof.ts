export interface Professor{
    name : string;
    age: string;
}

type Professorproperties = keyof Professor;
const professorproperties : Professorproperties = "age";

// Ele seta quais valores a varíavel pode receber. 
// Acredito que é muito utlizado quando for uma config mesmo
// Ou alguma coisa que pode assumir algum valor de uma lista, etc..

