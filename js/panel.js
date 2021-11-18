var nombreP=document.getElementById('nombre');
var precioP=document.getElementById('precio');
var stockP=document.getElementById('stock');
var detalleP=document.getElementById('detalle');
var imagen=document.getElementById('imagen');
var formulario=document.querySelector('#formulario');

var productos=[];

window.addEventListener('load', ()=> {
    productos=JSON.parse(localStorage.getItem('productos'));

    if (productos==null){
        productos=[];
    }

})
function obtImg(){

	var file = document.querySelector('input[type=file]').files[0];
	var leer = new FileReader();
	leer.readAsDataURL(file);

	leer.addEventListener('load', () => {localStorage.setItem('imgTemp', leer.result)} )
}

function agregarProducto(){

    var objeto={
    nombre: nombreP.value,
    precio: precioP.value,
    stock: stockP.value,
    detalle: detalleP.value,
    imagen: localStorage.getItem('imgTemp')

    }

    localStorage.removeItem('imgTemp');
    productos.push(objeto);

    localStorage.setItem('productos', JSON.stringify(productos))
    alert('Se registro '+nombreP.value)

    
nombreP.value="";
precioP.value="";
stockP.value="";
detalleP.value="";
imagen.value="";


}
function mostrarFormulario(){
    formulario.style.display='block';
}
function quitarFormulario(){
    formulario.style.display='none';
}
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
