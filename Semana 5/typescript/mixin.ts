// A ideia é possibilitar composição para criar um tipo maior sem preocupar com heranças e tudo mais
export type Constructor <T ={}> = new(...args: any[]) =>T;

export function identifiable<TBase extends Constructor>(base : TBase){
    return class extends base {
        id = Math.round(Math.random())
    }
}

const identifiableDate = identifiable(Date);

const idDate = new identifiableDate();
idDate.id; // Veio da adição no identifable
idDate.getDay(); // Veio da classe primitiva Date

export interface NodeTyped {
    type: string;
}

export function changeabelType<TBase extends Constructor<NodeTyped>>(base : TBase){
    return class extends base{
        setType(t: string){
            this.type = t;
        }
    }
}

export class Node<T extends string> implements NodeTyped{
    constructor(public readonly type:T){

    }
}

export function timestampable <TBase extends Constructor>(base : TBase){
    return class extends base{
        ceratedAt = new Date();
        updatedAt = new Date();

        setModfied(){
            this.updatedAt = new Date();
        }
    }
}

export const idNode = timestampable(changeabelType(identifiable(Node))); // É um gerador de construtores onde vc vai adcionando propriedades
const teste = new idNode("Teste");
teste.id; //veio de identifiable
teste.type; // veio de NodeTyped
teste.setType("Teste2"); // veio de changabletype
