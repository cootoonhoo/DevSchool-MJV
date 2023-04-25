type PairStrings = [string, string];

type PairStringNumber = [string, number];

type Pair<T1,T2> = [type1:T1, type2: T2];
type PairStringNumber2 = Pair<string, number>;

type Triplet <T1,T2,T3> = [T1,T2,T3];
const triplet: Triplet<string,string, number> = ['1','2',3]

type UndefStringNumberTuple = [...string[], number];
const undef : UndefStringNumberTuple = ['a', 'a', 'a', 1];

type ReadOnly = readonly [number,any]