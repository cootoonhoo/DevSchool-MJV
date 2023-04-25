export type MappedType = {
    [K in 'prop1' | 'prop2']
}

export type User = {
    age: string;
    id : number;
}

export type MappedUser = {
    [key in keyof User]: User[key];
}

export type MappedGeneric<T> = {
    [key in keyof T] : T[key];
}

export type MappedGenericCustom<T> = {
    [key in keyof T as `get${Capitalize<Extract<key,string>>}`] : () => T[key];
}

export type MappedGenericExemple = MappedGenericCustom<User>; //Props de MappedGenericExemple ficaram get + props de user