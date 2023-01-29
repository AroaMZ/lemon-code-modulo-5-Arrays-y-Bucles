const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true,

    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true,

    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: true,
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false,
    }


];
//Ejercicio 1
console.log("Ejercicio 1: Mostras el carrito de la compra")
for (producto of carrito) {
    imprimir(producto);
}
function imprimir(producto) {
    console.log("-----------------------");
    for (posicion in producto) {
        console.log(posicion + ": " + producto[posicion]);
    }
}

//Espacios
console.log("");
console.log("");

//Ejercicio 2
console.log("Ejercicio 2: Listar todos los productos")
for (posicion in carrito) {
    console.log("----------" + (parseFloat(posicion) + 1) + "-------------");
    imprimir(carrito[posicion]);
}
function imprimir(carrito) {
    for (producto in carrito) {
        console.log(producto + ": " + carrito[producto]);
    }
}

//Espacios
console.log("");
console.log("");

//Ejercicio 3
console.log("Ejercicio 3: Eliminar el producto con id 54657 del carrito de la compra")

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == 54657) {
        var eliminado = carrito.splice(i, 1)
        console.log(carrito);
    }
}

//Espacios
console.log("");
console.log("");

//Ejercicio 4
console.log("calcular el total del carrito de la compra (el coste de una línea es precio*cantidad)")

total = 0;
for (i = 0; i < carrito.length; i++) {
    total = total + carrito[i].price * carrito[i].count;
}
console.log(total);

//Espacios
console.log("");
console.log("");

//Ejericicio 5
console.log("Ejercicio 5: Filtrar por los productos que sean prime")

for(i = 0; i < carrito.length; i++){
    if (carrito[i].premium == true) {
        console.log(carrito[i]);
    }
}

//Espacios
console.log("");
console.log("");

//Ejercicio 6
console.log("Ejercicio 6: Si todos los productos son prime mostrar un mensaje 'Pedido sin gastos de envío', si no 'Este pedido tiene gastos de envío'.")

var total = true;
for (i = 0; i < carrito.length; i++) {
    if (carrito[i].premium == true && total == true) {
        total = true;
    } else {
        total = false;
    }
}
if (total == false) {
    console.log("Este pedido tiene gastos de envío");
}
else {
    console.log(" Pedido sin gastos de envío");
}

//Espacios
console.log("");
console.log("");

console.log("Ejercicio 7: Mostrar el carrito en un listado de html básico.")

function titleColumn(producto) {
    for (campo in producto) {
        document.getElementById(campo).innerHTML = campo;
    }
}

var filaTitulo = document.getElementById("title")
var thProducto = document.createElement("th")
thProducto.textContent = "Producto";
filaTitulo.appendChild(thProducto)
for (clave in carrito[0]) {
    var thTitle = document.createElement("th")
    thTitle.textContent = clave;
    filaTitulo.appendChild(thTitle)

}

var bodyTable = document.getElementById("bodyTable");

for (posicion in carrito) {
    var tr = document.createElement("tr");

    var tdTitulo = document.createElement("td");
    tdTitulo.textContent = innerHTML = "Producto " + (parseFloat(posicion) + 1);
    tr.appendChild(tdTitulo);

    var tdId = document.createElement("td");
    tdId.textContent = carrito[posicion].id;
    tr.appendChild(tdId);

    var tdName = document.createElement("td");
    tdName.textContent = carrito[posicion].name;
    tr.appendChild(tdName);

    var tdPrice = document.createElement("td");
    tdPrice.textContent = carrito[posicion].price;
    tr.appendChild(tdPrice);

    var tdCount = document.createElement("td");
    tdCount.textContent = carrito[posicion].count;
    tr.appendChild(tdCount);

    var tdPremium = document.createElement("td");
    tdPremium.textContent = carrito[posicion].premium;
    tr.appendChild(tdPremium);

    bodyTable.appendChild(tr);

}

//Espacios
console.log("");
console.log("");

console.log("Ejercicio 8: Aplicar un descuento del 5% si la compra es mayor de 100 euros")

total = 0;
for (i = 0; i < carrito.length; i++) {
    total = total + carrito[i].price * carrito[i].count;
}
if (total > 100) {
    var totalDescuento = total * 0.95;
    console.log(totalDescuento);
} else {
    console.log(total);
}












