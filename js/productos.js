var cuerpo = document.querySelector('.cards')
var productos = [];

function mostrarDatos() {
    JSON.parse(localStorage.getItem("products")).forEach(info => {

        cuerpo.innerHTML += `<div class="card">
        <img class="card-img" src="${info.image}" alt="" >
        <p>${info.name}</p>
        <p>$${info.price}</p>
        <button class="add-to-cart" id="buy" onClick="buy(${info.id}) " >Agregar al carrito</button>
    </div>`
        console.log(info.id)
    })

}

window.addEventListener('load', () => {

    let productosLS = JSON.parse(localStorage.getItem('products'))
    let carritoLS = JSON.parse(localStorage.getItem('carrito'));

    if (productosLS == null) {
        alert('No hay productos que mostrar')
    }
    else {
        mostrarDatos();
    }

    if (carritoLS == null) {
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
