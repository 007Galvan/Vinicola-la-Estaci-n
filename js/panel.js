
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