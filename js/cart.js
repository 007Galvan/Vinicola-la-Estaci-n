var total = document.getElementById("total")
var content = document.querySelector('.shopping')
var carrito = []
var productos = [];
var totaladd = 0
var out = document.querySelector('#check')

var moreless = document.querySelector('#buy')
var tobuy = 0
window.addEventListener('load', () => {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    productos = JSON.parse(localStorage.getItem('products'))
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
            <td><img src="${compra.image}" alt="" id="imgcart">${compra.name}</td>
            <td>${compra.description}</td>
            <td>${compra.price}</td>
            <td><button onClick="morestock(${data.id})">+</button>${data.stock}<button onClick="lessstock(${data.id})">-</button></td>
            <td><button onCLick="del(${data.id})">borrar</button></td>
            <td id="price">1000</td>
        </tr>`

        totaladd += compra.price
    })
    total.innerHTML = totaladd
}
function render() {
    content.innerHTML = ""
    total.innerHTML=""
    totaladd= 0
    JSON.parse(localStorage.getItem('carrito')).forEach(data => {
        var compra = productos.find(productos => productos.id === data.id);
        content.innerHTML += `
            <tr>
            <td><img src="${compra.image}" alt="" id="imgcart">${compra.name}</td>
            <td>${compra.description}</td>
            <td>${compra.price}</td>
            <td><button onClick="morestock(${data.id})">+</button>${data.stock}<button onClick="lessstock(${data.id})">-</button></td>
            <td><button onCLick="del(${data.id})">borrar</button></td>
            <td id="price">${compra.price*data.stock}</td>
        </tr>`

        totaladd += compra.price*data.stock
    })
    total.innerHTML = totaladd
}

function morestock(id) {
    let cart = JSON.parse(localStorage.getItem('carrito'));
    let found = cart.find(x => x.id == id)
    const index = cart.indexOf(found)
    cart[index].stock += 1
    console.log(cart)
    localStorage.setItem('carrito', JSON.stringify(cart))
    render()
}
function lessstock(id) {
    let cart = JSON.parse(localStorage.getItem('carrito'));
    let found = cart.find(x => x.id == id)
    const index = cart.indexOf(found)
    cart[index].stock -= 1
    localStorage.setItem('carrito', JSON.stringify(cart))
    render()
}
function del(id) {
    let delet = JSON.parse(localStorage.getItem('carrito'))
    let found = delet.find(x => x.id == id)
    const index = delet.indexOf(found)
    if(index> - 1) delet.splice(index, 1)
    localStorage.setItem('carrito', JSON.stringify(delet))
    render()
}

out.addEventListener('click', ()=>{ 
    let cart = JSON.parse(localStorage.getItem('carrito'))
    localStorage.setItem('sells', JSON.stringify(cart))
    localStorage.removeItem('carrito')
})