const salariosCol=colombia.map(
    persona => persona.salary
)

const salariosColSorted=salariosCol.sort(
    (a,b) => a-b
)

function medianaSalarios(lista){
    lista.sort((a,b)=>a-b)

    let mediana;

    if (lista.length%2==0){

        posMediana1=(lista.length/2)-1
        posMediana2=lista.length/2
        mediana=(lista[posMediana1]+lista[posMediana2])/2

    }else{
        
        posMediana=((lista.length-1)/2)
        mediana=lista[posMediana]

    }

    return mediana

}

const medianaGeneralCol=medianaSalarios(salariosColSorted)


//mediana del 10%

const spliceStart=(salariosColSorted.length*90)/100;
const spliceCount=salariosColSorted.length-spliceStart;

const salariosColTop10=salariosColSorted.splice()