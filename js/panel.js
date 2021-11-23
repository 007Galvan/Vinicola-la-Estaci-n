var nombreP = document.getElementById('nombre');
var precioP = document.getElementById('precio');
var stockP = document.getElementById('stock');
var detalleP = document.getElementById('detalle');
var imagen = document.getElementById('imagen');
var formulario = document.querySelector('#formulario');

var productos = [];
var usuarios = [];
var products = document.getElementById('products')
var users = document.getElementById('usersIn')
var sales = document.querySelector('salesIn')
window.addEventListener('load', () => {

    productos = JSON.parse(localStorage.getItem('products'));
    usuarios = JSON.parse(localStorage.getItem('usuarios'));


    if (productos == null) {
        productos = [];
        products.innerHTML = "No hay productos que mostrar";
    }
    if (usuarios == null) {
        usuarios = [];
        users = "No hay usuarios"
    }
    productos.forEach(info => {
        products.innerHTML += `
    <div class="image-block" id="card">
    <img src="${info.image}" alt="" />
    <div id="botton">
    <h3>${info.name}</h3>
    <h3>$ ${info.price}</h3>
        <h3>Stock ${info.stock}</h3>
        <button id="deleteP">Eliminar</button>
    </div>
    </div>`})

    usuarios.forEach(user => {
        users.innerHTML += `
        <tr>
        <td>${user.name + " " + user.lastName}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        <td class="delete"><a class="button">borrar</a></td>
        </tr>`

        /*sales += `
        <tr>
        <td>${variable}</td>
        <td>${variable}</td>
        <td>${variable}</td>
        </tr>`*/
    })

})

/*window.addEventListener('load', ()=> {
    

})*/
function obtImg() {

    var file = document.querySelector('input[type=file]').files[0];
    var leer = new FileReader();
    leer.readAsDataURL(file);

    leer.addEventListener('load', () => { localStorage.setItem('imgTemp', leer.result) })
}

function GetId() {
    let uniq = (new Date()).getTime();
    return uniq
}

function agregarProducto() {

    var objeto = {
        id: GetId(),
        nombre: nombreP.value,
        precio: precioP.value,
        stock: stockP.value,
        detalle: detalleP.value,
        imagen: localStorage.getItem('imgTemp')

    }

    localStorage.removeItem('imgTemp');
    productos.push(objeto);

    localStorage.setItem('productos', JSON.stringify(productos))
    alert('Se registro ' + nombreP.value)


    nombreP.value = "";
    precioP.value = "";
    stockP.value = "";
    detalleP.value = "";
    imagen.value = "";
    location.reload()


}
function mostrarFormulario() {

    formulario.style.display = 'block'
    formulario.classList.add('z-index')

}
function quitarFormulario() {
    formulario.style.display = 'none';

}



//products
const deletep = document.getElementById('deleteP')
deletep.addEventListener('click', () => {
    console.log("xxx");
})

//users
const deleteu = document.querySelector('#button')
/*deleteb.addEventListener('click', () => {
    console.log("xxx");
})*/
//sales

