var total = document.getElementById("total").innerHTML
var content = document.querySelector('.shopping')
var carrito = []
var productos = [];

window.addEventListener('load', () => {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    productos = JSON.parse(localStorage.getItem('productos'))
    if (productos == null) alert('No hay productos')
    else if (carrito == null) alert('agrega productos al carrito')
    else getcart()
    console.log(carrito)
    console.log(productos)
})

function getcart() {
    carrito.forEach(data => {
        var compra = productos.find(productos => productos.id === data.id);
        content.innerHTML += `
            <tr>
            <td><img src="${compra.imagen}" alt="" id="imgcart">${compra.nombre}</td>
            <td>${compra.detalle}</td>
            <td>${compra.precio}</td>
            <td><button onClick="morestock(${compra.id})">+</button> 1 <button onClick="lessstock(${compra.id})">-</button></td>
            <td><button onCLick="del(${data.id})">borrar</button></td>
            <td>1000</td>
        </tr>`
    })
}

function morestock(compra) {
    console.log('more');
    console.log(compra);

}
function lessstock(compra) {
    console.log('less');
    console.log(compra);
}
function del(compra) {
    var delet = productos.find(productos => productos.id === compra);
    console.log(typeof delet);

    console.log('producto borrado');
    console.log(compra);
}
