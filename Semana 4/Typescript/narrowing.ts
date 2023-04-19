//Verificação se tal variável é de determinado tipo;
//Basicamente utilizado para filtragem de resultados any;
function truthnessString(x: string|null|undefined){
    if(x){
        x
    }
    else{
        x
    }
}

function inCheck(x: any[] | object){
    if("length" in x){
        x.length;   
    } else{
        x //Object
    }
}

function customTypeGuard(x:any): x is String {
    return x instanceof String; // True or false 
}

function ExaustiveCheck(x: any){
//Verificar na mão mesmo, usando typeof
    switch(typeof x){
        case 'string':
            return true;
        default :
            return false;
    }
}

function ExaustiveCheckNeverCase(x: number | string){
    //Verificar na mão mesmo, usando typeof
        switch(typeof x){
            case 'string':
                x // Type string
                break;
            case 'number':
                x // Type number
                break;
            default :
                x // Never
            //Não se esqueça do break;
        }
    }