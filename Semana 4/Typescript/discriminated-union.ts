type Square = {
    type: 'square';
    width : number;
}

type Circle = {
    type: 'circle';
    radius : number;
}

type Shape = Square | Circle;

function caculateArea(shape : Shape){
    shape; // Não conseguimos acessar nada
    switch(shape.type){
        case 'circle': // Já puxa automático;
            return (shape.radius ^ 2) * Math.PI;
        case 'square' : {
            return shape.width ^ 2;
        }
        default:
            shape // Não vai ter nada;
    }
}

//Muito importante para API
//Ver aula 6 da semana 4 quando for usar API