
var cuerpo = document.querySelector('.cards')
var productos = [];
function mostrarDatos() {
    productos.forEach(info => {

        cuerpo.innerHTML += `<div class="card">
        <img class="card-img" src="${info.imagen}" alt="" >
        <p>${info.nombre}</p>
        <p>$${info.precio}</p>
        <p>Stock: ${info.stock}</p>
        <button class="add-to-cart" id="buy" onClick="buy(${info.id}) " >Agregar al carrito</button>
    </div>`
        console.log(info.id)
    })

}

window.addEventListener('load', () => {

    productos = JSON.parse(localStorage.getItem('productos'))
    carrito = JSON.parse(localStorage.getItem('carrito'));

    if (productos == null) {
        alert('No hay productos que mostrar')
    }
    else {
        mostrarDatos();
    }

    if (carrito == null) {
        carrito = [];
    }
})


// prueba compra carrito
function buy(producto) {
    console.log('se agrego el producto ' + producto);
    var cart = {
        id: producto
    }

    carrito.push(cart);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    
}
