function f1 (array) {
    for(let i=0;i<array.length;i++)
        console.log(array[i])

}

function f2(objeto){
    for(const [keys,values] of Object.entries(objeto))
        console.log(keys,values)
} 

var a=[1,1,2,3]

f1(a)

b={name:'Esneider',apellido:'Velez',edad:14}

f2(b)