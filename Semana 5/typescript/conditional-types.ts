export type RemoveStringAndNumber<T> = T extends string | number ? never : T;

export type RemoveTest = string | number | string[] | boolean | null ;

export type TestRemoved = RemoveStringAndNumber<RemoveTest>;

export type unpackArray<T> = T extends Array <infer A> ? A : never;

export type test = unpackArray<string[]>;
export type test1 = unpackArray<number>;
export type test2 = unpackArray<any>;
export type test3 = unpackArray<unknown>;

export type UnpackArrayRecursive<T> = 
T extends Array<infer A> ? 
    A extends Array<infer A> ? UnpackArrayRecursive<A> : A 
: never;

export function createId(numeric:boolean) : string | number {
    const id = Math.floor(Math.random() * 999);
    if(numeric){
        return id;
    }
    return id.toString();
}