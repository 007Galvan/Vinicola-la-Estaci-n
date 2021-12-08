var product = document.querySelector('.products')
var products = []

addEventListener('load', ()=>{
products = JSON.parse(localStorage.getItem('products'))
detail = JSON.parse(localStorage.getItem('detail'))

var find = products.find(x =>x.id == detail)
console.log(find);

product.innerHTML =`<div class="conta">
<h1>${find.name}</h1>
<div class="image">
    <img src="${find.image}">
</div>
<div class="data">
    <h2>${find.price}</h2>
    <p>${find.description}</p>
</div>
</div>`
})

function see(){
    if (localStorage.getItem('carrito') == null) {
        localStorage.setItem('carrito', '[]')
        console.log('No existe')
    }

}