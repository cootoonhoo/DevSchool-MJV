export interface User {
    id: number | null;
    name: string;
    email?: string;
}

// tipos utilitários gerais
export type SimpleUser = User;
export type PartialUser = Partial<User>
export type RequiredUser = Required<User>
export type ReadonlyUser = Readonly<User>
export type PickUserName = Pick<User, 'id' | 'name'>
export type RecordUser = Record<string, User>
export type ExcludeUserName = Exclude<keyof User, "name">
export type ExtractUser = Extract<User | null, User>
export type OmitUser = Omit<User, "name" | 'id'>
export type NonNullableUserId = NonNullable<User['id']>

//Funções

function createUser(name: string, id: number): User {
    return {
        id: id,
        name: name
    }
}

export type ParametersCreateUser = Parameters<typeof createUser>

export type ReturnTypeUser = ReturnType<typeof createUser>


//Classes

class Professor {
    constructor(public name: string, public age: number) { }
}
export type ConstructorParametersUser = ConstructorParameters<typeof Professor>
export type InstanceTypeUser = InstanceType<typeof Professor>

export type Teste = 'marco'
export type UppercaseMarco = Uppercase<Teste>
export type LowercaseMarco = Lowercase<UppercaseMarco>
export type CapitalizeMarco = Capitalize<LowercaseMarco>
export type UncapitalizeMarco = Uncapitalize<CapitalizeMarco>