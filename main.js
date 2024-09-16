let producto = "";
let cantidad = 0;
let precio = 0;
let cantidadTotal = 0;
let precioTotal = 0;
let continuarCompra = false;

function comprarBebida(){
        
    do {

    producto = prompt("Ofrecemos cerveza, vino y tequila ¿Qué deseas llevar?")
    cantidad = parseInt(prompt("¿Qué cantidad de "+producto+" deseas llevar?"))

    while (isNaN(cantidad)) {
        comprarBebida();
    }
    
    switch (producto) {
        case "cerveza":
            precio = 1300;
            break;
        
        case "vino":
            precio = 1800;
            break;
        
        case "tequila":
            precio = 2000;
            break;
        
        default:
            alert("No ofrecemos "+producto+"")
            break;
    }

precioTotal += precio * cantidad;
cantidadTotal += cantidad;

continuarCompra = confirm("¿Desea agregar más productos a su compra?")
} while(continuarCompra)

alert("El total a pagar es $"+precioTotal+"")
alert("Gracias por su compra")

}

let edad = parseInt(prompt("Por favor ingrese su edad"))

if (edad < 18){
        alert("Debes ser mayor de edad para realizar compras.")
    } 

else {
    
    comprarBebida();
}




