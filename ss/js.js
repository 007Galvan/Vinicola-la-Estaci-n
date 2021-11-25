let pass = document.getElementById("contraseña");
let btnAgregar = document.getElementById("agregar");
let producto = {
    name: "vino negro",
    price: 500,
    id: 1
}

// guardar array inicial para compras
if (localStorage.getItem("comprasPorUsuario") === null) {
    console.log("sin valores en local, agregando");
    localStorage.setItem("comprasPorUsuario", "[]");
}

// guardar usuario logueado en session
const mostrar = () => {
    let usuarioLogueado = document.getElementById("correo");
    sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuarioLogueado.value));

    console.log("inició sesión: " + usuarioLogueado.value);
}

// agregar al carro y saber quién compró
const agregar = () => {
    producto.comprador = JSON.parse(sessionStorage.getItem("usuarioLogueado"));
    let comprasLs = JSON.parse(localStorage.getItem("comprasPorUsuario"));
    comprasLs.push(producto);
    localStorage.setItem("comprasPorUsuario", JSON.stringify(comprasLs));
}