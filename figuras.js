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
    
    const resultadoCuadrado=document.getElementById("resultadoCuadrado")
    resultadoCuadrado.innerText="El perímetro del cuadrado con lados: " + value + "cm, Es igual a: " + perimetro + "cm"
}

function calcularAreaCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value=input.value;

    const area =areaCuadrado(value);
    
    const resultadoCuadrado=document.getElementById("resultadoCuadrado")
    resultadoCuadrado.innerText="El area del cuadrado con lados: " + value + "cm, Es igual a: " + area + "cm"
}

function calcularPerimetroTriangulo(){
    const inputLadoA=document.getElementById("inputTrianguloA");
    const A=Number(inputLadoA.value);
    const inputLadoB=document.getElementById("inputTrianguloB");
    const B=Number(inputLadoB.value);
    const inputLadoC=document.getElementById("inputTrianguloC");
    const C=Number(inputLadoC.value);

    const perimetro=perimetroTriangulo(A,B,C);
    
    const resultadoTriangulo=document.getElementById("resultadoTriangulo")
    resultadoTriangulo.innerText="El perímetro del triángulo con lado A igual a: " 
    + A + 
    ", lado B igual a: " + B + " y lado C igual a: " + C + ", es de: " + perimetro + "cm"
}

function calcularAreaTriangulo(){
    const inputLadoA=document.getElementById("inputTrianguloA");
    const A=Number(inputLadoA.value);
    const inputLadoB=document.getElementById("inputTrianguloB");
    const B=Number(inputLadoB.value);
    const inputLadoC=document.getElementById("inputTrianguloC");
    const C=Number(inputLadoC.value);

    const area=areaTriangulo(A,B,C)
    
    const resultadoTriangulo=document.getElementById("resultadoTriangulo")
    resultadoTriangulo.innerText="El area del triángulo con lado A igual a: " 
    + A + 
    ", lado B igual a: " + B + " y lado C igual a: " + C + ", es de: " + area + "cm^2"
}

function calcularPerimetroCirculo(){
    const radio=Number(document.getElementById("inputRadio").value)

    const perimetro=perimetroCirculo(radio)

    const resultadoCirculo=document.getElementById("resultadoCirculo")
    resultadoCirculo.innerText="El perimetro del círculo con radio r igual a: " + radio + " es igual a: " + perimetro + "cm"
}

function calcularAreaCirculo(){
    const radio=Number(document.getElementById("inputRadio").value)

    const area=areaCirculo(radio)

    const resultadoCirculo=document.getElementById("resultadoCirculo")
    resultadoCirculo.innerText="El área del círculo con radio r igual a: " + radio + " es igual a: " + area + "cm^2"
}


