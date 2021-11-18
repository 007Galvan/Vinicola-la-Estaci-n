var products = document.getElementById('products')
var users = document.querySelector('usersIn')
var sales = document.querySelector('salesIn')
window.addEventListener('load', () => {
    products += `
    <div class="image-block" id="card">
    <h1>${variable}</h1>
    <img src="${variable}" alt="" />
    <div id="botton">
        <h3>Stock ${variable}</h3>
        <button id="deleteP">Eliminar</button>
    </div>
    </div>`

    users += `
    <tr>
    <td>${variable}</td>
    <td>${variable}</td>
    <td>${variable}</td>
    <td>${variable}</td>
    <td class="delete"><a class="button">borrar</a></td>
    </tr>`

    sales += `
    <tr>
    <td>${variable}</td>
    <td>${variable}</td>
    <td>${variable}</td>
    </tr>`
})

//products
var deletep = document.getElementById('deleteP')
deletep.addEventListener('click', () => {

})

//users
var deleteu = document.querySelector('#button')
deleteb.addEventListener('click', () => {

})
//sales