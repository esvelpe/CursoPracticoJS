const cupones=[{name: "cupon1",descuento:15},{name="cupon2",descuento:30},{name="cupon3",descuento:25}]

function calcularPrecioConDescuento (precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100

    return precioConDescuento
}

function buttonPriceDiscount(){
    const inputPrice=Number(document.getElementById("inputPrice").value)
    const inputDiscount=Number(document.getElementById("inputDiscount").value)

    const precioConDescuento=calcularPrecioConDescuento(inputPrice,inputDiscount)

    const resultP=document.getElementById("ResultP")
    resultP.innerText="El precio con descuento son: $" + precioConDescuento

}

function buttonCuponDiscount(){
    const inputPrice=Number(document.getElementById("inputPriceCupon").value)
    const inputDiscount=document.getElementById("inputCupon").value

    const resultadoC=document.getElementById("ResultadoC")

    const isCuponValueValid=(cupon) => cupon.name==inputDiscount

    const userCupon=cupones.find(isCuponValueValid)

    if(!userCupon){
        alert("El cupón " + userCupon.name + " no es válido");
    }else{
        const descuento=userCupon.descuento
        const precioConDescuento=calcularPrecioConDescuento(inputPrice,descuento)

    }

    if (isCuponValueValid){
        resultadoC.innerText="El descuento que ofrece el cupón es de: "+descuento+"$ y el precio después de aplicar el descuento es de: "+precioConDescuento+"$";
    }


}