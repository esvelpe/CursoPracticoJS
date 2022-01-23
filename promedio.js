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