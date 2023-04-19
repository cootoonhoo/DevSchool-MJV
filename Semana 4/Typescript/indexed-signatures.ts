export interface CacheById{
    [id:string] : any;
}

const cache: CacheById = {
    'Teste':[1,2,3,4],
    'mjv':123    
}

export type PersonType = "entity" | "code" | "adress";

export type CachePersonUnion ={
    [P in PersonType] : any
}

const Test : CachePersonUnion = {
    adress : "Oii",
    code : "Que doido",
    entity : 123123123
}