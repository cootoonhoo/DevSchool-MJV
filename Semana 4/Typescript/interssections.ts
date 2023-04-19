interface Vector3D{
    x: number;
    y: number;
}

interface Vector3D{
    z: number;
}

type Name = {
    name: string
}

type NamedVector3D = Name & Vector3D;
const NamedPoid: NamedVector3D = {
    name : "Teste",
    x: 1,
    y: 2,
    z: 3
}

//Usado pra unir duas interfaces (como se fosse uma heranças mais simples)