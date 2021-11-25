var cuerpo = document.querySelector('.cards')
var productos = [];
var user = document.getElementById("name")

function mostrarDatos() {
    JSON.parse(localStorage.getItem("products")).forEach(info => {

        cuerpo.innerHTML += `<div class="card">
        <img class="card-img" src="${info.image}" alt="" >
        <p>${info.name}</p>
        <p>$${info.price}</p>
        <button class="add-to-cart" id="buy" onClick="buy(${info.id}) " >Agregar al carrito</button>
    </div>`
    })

}

window.addEventListener('load', () => {
    let productosLS = JSON.parse(localStorage.getItem('products'))
    let carritoLS = JSON.parse(localStorage.getItem('carrito'));
    user.innerHTML = UsName()

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
if (localStorage.getItem('carrito') == null) {
    localStorage.setItem('carrito', '[]')
}
// prueba compra carrito
function buy(producto) {
    console.log('se agrego el producto ' + producto);
    var cart = {
        id: producto,
        stock: 1
    }

    let carritols = JSON.parse(localStorage.getItem('carrito'))
    let founded = carritols.find(x => x.id == cart.id)
    console.log(founded);
    if (founded == null) {
        carritols.push(cart);
        localStorage.setItem('carrito', JSON.stringify(carritols))
    } else {
        // carritols = JSON.parse(localStorage.getItem('carrito'))
        // const index = carritols.indexOf(founded);
        // console.log(index);

        // if (index > - 1) {
        //     console.log(index);

        //     carritols.splice(index, 1);
        // }
        // // carritols[index].stock++
        // cart.stock++
        // carritols.push(cart);
        // localStorage.setItem('carrito', JSON.stringify(carritols))
        alert('el producto ya se encuentra en el carrito')
    }
}


/*cerrar sesion */
var close = document.getElementById('close')
close.addEventListener('click', () => {
    sessionStorage.removeItem("logged")
})

function UsName(){
    let username
    users = JSON.parse(localStorage.getItem('usuarios'))
    names = JSON.parse(sessionStorage.getItem('logged'))
    username = users.find(users => users.email === names);
    return `: ${username.name}`
}