function perimetroCuadrado(lado){
    return 4*lado;
}

function areaCuadrado(lado){
    return lado*lado
}

function perimetroTriangulo(lado1,lado2,lado3){
    return lado1 + lado2 + lado3
}


function areaTriangulo(A,B,C){
    S=(A+B+C)/2
    radicando=S*(S-A)*(S-B)*(S-C)
    return Math.sqrt(radicando)
}

function perimetroCirculo(radio){
    return 2*Math.PI*radio
}

function areaCirculo(radio){
    return radio*radio*Math.PI
}

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    const perimetro =perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    const area =areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLadoA=document.getElementById("inputTrianguloA");
    const A=Number(inputLadoA.value);
    const inputLadoB=document.getElementById("inputTrianguloB");
    const B=Number(inputLadoB.value);
    const inputLadoC=document.getElementById("inputTrianguloC");
    const C=Number(inputLadoC.value);

    const perimetro=perimetroTriangulo(A,B,C);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const inputLadoA=document.getElementById("inputTrianguloA");
    const A=Number(inputLadoA.value);
    const inputLadoB=document.getElementById("inputTrianguloB");
    const B=Number(inputLadoB.value);
    const inputLadoC=document.getElementById("inputTrianguloC");
    const C=Number(inputLadoC.value);

    const area=areaTriangulo(A,B,C)
    alert(area)
}

function calcularPerimetroCirculo(){
    const radio=Number(document.getElementById("inputRadio").value)

    const perimetro=perimetroCirculo(radio)

    alert(perimetro)
}

function calcularAreaCirculo(){
    const radio=Number(document.getElementById("inputRadio").value)

    const area=areaCirculo(radio)

    alert(area)
}


