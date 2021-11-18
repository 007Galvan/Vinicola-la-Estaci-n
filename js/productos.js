
var cuerpo=document.querySelector('.cards')
var productos=[];

function mostrarDatos(){
	productos.forEach(info =>{

		cuerpo.innerHTML+=`<div class="card">
        <img class="card-img" src="${info.imagen}" alt="" >
        <p>${info.nombre}</p>
        <p>$${info.precio}</p>
        <p>Stock: ${info.stock}</p>
        <a class="add-to-cart" href="">Agregar al carrito</a>
    </div>`
	})
}

window.addEventListener('load', ()=> {

    productos=JSON.parse(localStorage.getItem('productos'))
    if(productos==null){
        alert('No hay productos que mostrar')
    }
    else{
        mostrarDatos();
    }
})

