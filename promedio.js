const lista1=[12,3,20,100,5,1,500];

function calcularPromedio(lista){
    // let sumaLista=0;

    // for (let i=0;i<lista.length;i++) {
    //     sumaLista+=lista[i];
    // }

    const sumaLista=lista.reduce(
        (valorAcumulado=0,nuevoElemento) => valorAcumulado+nuevoElemento 
    );

    const promedioLista=sumaLista/lista.length;

    return promedioLista;
}

function calcularMediana(lista){
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

a={name:"valeria",edad:15}



function calcularModa(lista){

    listaConteo={}

    lista.map(elemento => listaConteo[elemento]?listaConteo[elemento]++ : listaConteo[elemento]=1)

    listaOrdenada=Object.entries(listaConteo).sort((a,b)=>a[1]-b[1])

    moda=listaOrdenada[listaOrdenada.length-1]

    return moda

}

function calcularMediaGeometrica (lista){
    const productoElementos=lista.reduce((a,b)=>a*b)

    const mediaGeométrica=Math.pow(productoElementos,1/lista.length)

    

    return mediaGeométrica

}

function calcularPromedioPonderado(lista){

    const noteWithCredit=lista.map(a=>a.note*a.credit)

    const sumOfNoteWithCredit=noteWithCredit.reduce((sum=0,newValue)=>sum+newValue)

    const credits=lista.map(a=>a.credit)

    const sumOfCredits=credits.reduce((sum=0,newValue)=>sum+newValue)

    const promedioPonderado=sumOfNoteWithCredit/sumOfCredits
}