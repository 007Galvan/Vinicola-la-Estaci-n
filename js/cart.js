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

})

function getcart() {
    carrito.forEach(data => {
        var compra = productos.find(productos => productos.id === data.id);
        content.innerHTML += `
            <tr>
            <td><img src="${compra.image}" alt="" id="imgcart">${compra.name}</td>
            <td>$ ${compra.price}</td>
            <td><button class="cart-button" onClick="morestock(${data.id})">+</button><span class="mlandr">${data.stock}</span> <button class="cart-button" onClick="lessstock(${data.id})">-</button></td>
            <td><button class="cart-button del-button" onCLick="del(${data.id})">Borrar</button></td>
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
        <td>$ ${compra.price}</td>
        <td><button class="cart-button" onClick="morestock(${data.id})">+</button><span class="mlandr">${data.stock}</span> <button class="cart-button" onClick="lessstock(${data.id})">-</button></td>
        <td><button class="cart-button del-button" onCLick="del(${data.id})">Borrar</button></td>
        <td id="price">1000</td>
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